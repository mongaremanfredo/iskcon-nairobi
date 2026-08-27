import {
  kirtanSafariConfig,
  type FestivalDay,
  type FestivalPhaseOverride,
  type FestivalProgrammeItem,
} from "@/data/kirtanSafari";

export type FestivalPhase = "countdown" | "live" | "between-days" | "concluded";

export type FestivalState = {
  phase: FestivalPhase;
  now: Date;
  startsInMs: number;
  currentDay: FestivalDay | null;
  currentDayIndex: number;
  currentItem: FestivalProgrammeItem | null;
  nextItem: FestivalProgrammeItem | null;
  laterItems: FestivalProgrammeItem[];
  nextDay: FestivalDay | null;
  nextTransitionAt: Date | null;
};

function instant(value: string) {
  return new Date(value).getTime();
}

function isDuring(nowMs: number, start: string, end: string) {
  return nowMs >= instant(start) && nowMs < instant(end);
}

function findCurrentItem(day: FestivalDay, nowMs: number) {
  return (
    day.programme
      // A programme item is called current only when both boundaries were
      // explicitly confirmed. Start-only listings must never imply duration.
      .filter((item) => item.startsAt && item.endsAt && isDuring(nowMs, item.startsAt, item.endsAt))
      .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0))[0] ?? null
  );
}

function findNextItem(day: FestivalDay, nowMs: number) {
  return (
    day.programme
      .filter((item) => item.startsAt && instant(item.startsAt) > nowMs)
      .sort((a, b) => instant(a.startsAt!) - instant(b.startsAt!))[0] ?? null
  );
}

function phaseFromOverride(override: FestivalPhaseOverride) {
  return override === "automatic" ? null : override;
}

export function getKirtanSafariState(
  now: Date = new Date(),
  override: FestivalPhaseOverride = kirtanSafariConfig.phaseOverride
): FestivalState {
  const nowMs = now.getTime();
  const startMs = instant(kirtanSafariConfig.startsAt);
  const endMs = instant(kirtanSafariConfig.endsAt);
  const currentDayIndex = kirtanSafariConfig.days.findIndex((day) =>
    isDuring(nowMs, day.startsAt, day.endsAt)
  );
  const currentDay =
    currentDayIndex >= 0 ? (kirtanSafariConfig.days[currentDayIndex] as FestivalDay) : null;
  const nextDay =
    (kirtanSafariConfig.days.find((day) => instant(day.startsAt) > nowMs) as
      | FestivalDay
      | undefined) ?? null;

  let phase: FestivalPhase;
  const forced = phaseFromOverride(override);
  if (forced) phase = forced;
  else if (nowMs < startMs) phase = "countdown";
  else if (nowMs >= endMs) phase = "concluded";
  else if (currentDay) phase = "live";
  else phase = "between-days";

  const currentItem = currentDay ? findCurrentItem(currentDay, nowMs) : null;
  const nextItem = currentDay ? findNextItem(currentDay, nowMs) : null;
  const laterItems = currentDay
    ? currentDay.programme
        .filter((item) => item.startsAt && nextItem?.startsAt && instant(item.startsAt) > instant(nextItem.startsAt))
        .sort((a, b) => instant(a.startsAt!) - instant(b.startsAt!))
    : [];

  const transitionCandidates = [
    phase === "countdown" ? startMs : null,
    currentItem?.endsAt ? instant(currentItem.endsAt) : null,
    nextItem?.startsAt ? instant(nextItem.startsAt) : null,
    currentDay ? instant(currentDay.endsAt) : null,
    nextDay ? instant(nextDay.startsAt) : null,
    phase !== "concluded" ? endMs : null,
  ].filter((value): value is number => value !== null && value > nowMs);

  return {
    phase,
    now,
    startsInMs: Math.max(0, startMs - nowMs),
    currentDay,
    currentDayIndex,
    currentItem,
    nextItem,
    laterItems,
    nextDay,
    nextTransitionAt: transitionCandidates.length
      ? new Date(Math.min(...transitionCandidates))
      : null,
  };
}

export function formatFestivalTime(value: string) {
  return new Intl.DateTimeFormat("en-KE", {
    timeZone: kirtanSafariConfig.timezone,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(value));
}

export function formatFestivalDate(value: Date) {
  return new Intl.DateTimeFormat("en-KE", {
    timeZone: kirtanSafariConfig.timezone,
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(value);
}
