import { describe, expect, it } from "vitest";
import { getKirtanSafariState } from "./kirtanSafariState";
import { getSiteNotices } from "@/data/notices";
import { kirtanSafariNotifications } from "@/data/kirtanSafariNotifications";

function at(value: string) {
  return getKirtanSafariState(new Date(value));
}

describe("Kirtan Safari lifecycle in Nairobi time", () => {
  it("counts down immediately before Adivas", () => {
    const state = at("2026-08-27T17:59:59+03:00");
    expect(state.phase).toBe("countdown");
    expect(state.startsInMs).toBe(1_000);
  });

  it("switches to live at the exact Adivas start", () => {
    const state = at("2026-08-27T18:00:00+03:00");
    expect(state.phase).toBe("live");
    expect(state.currentDay?.id).toBe("adhivas");
    expect(state.currentItem).toBeNull();
  });

  it("does not invent a duration for a start-only programme item", () => {
    const state = at("2026-08-28T11:00:00+03:00");
    expect(state.currentItem).toBeNull();
    expect(state.nextItem?.title).toBe("Prasadam");
  });

  it("enters the between-days state at the next Nairobi calendar day", () => {
    const state = at("2026-08-28T00:00:00+03:00");
    expect(state.phase).toBe("between-days");
    expect(state.nextDay?.id).toBe("day-two");
  });

  it("selects Friday after the overnight interval", () => {
    const state = at("2026-08-28T10:00:00+03:00");
    expect(state.phase).toBe("live");
    expect(state.currentDay?.id).toBe("day-two");
  });

  it("keeps the explicitly timed continuous Sunday kirtan current", () => {
    const state = at("2026-08-30T13:30:00+03:00");
    expect(state.currentItem?.id).toBe("sunday-continuous-kirtan");
  });

  it("concludes at the exact final boundary", () => {
    expect(at("2026-08-30T23:59:59+03:00").phase).toBe("live");
    expect(at("2026-08-31T00:00:00+03:00").phase).toBe("concluded");
  });

  it("supports an explicit emergency override", () => {
    const state = getKirtanSafariState(
      new Date("2026-08-26T12:00:00+03:00"),
      "live"
    );
    expect(state.phase).toBe("live");
  });

  it("updates the existing noticeboard item without creating a new notification id", () => {
    const notices = getSiteNotices(at("2026-08-29T19:00:00+03:00"));
    const festivalNotice = notices.find(
      (notice) => notice.id === "kirtan-safari-2026-registration"
    );
    expect(festivalNotice?.title).toContain("Kirtan Safari is live");
    expect(festivalNotice?.tag).toBe("Live Festival");
  });

  it("turns the noticeboard item into an archive after the final boundary", () => {
    const notices = getSiteNotices(at("2026-08-31T00:00:00+03:00"));
    const festivalNotice = notices.find(
      (notice) => notice.id === "kirtan-safari-2026-registration"
    );
    expect(festivalNotice?.title).toBe("Kirtan Safari 2026 memories");
    expect(festivalNotice?.tag).toBe("Festival Archive");
  });

  it("keeps the approved festival broadcast list to one notification per day", () => {
    expect(kirtanSafariNotifications).toHaveLength(4);
    expect(new Set(kirtanSafariNotifications.map((notice) => notice.id)).size).toBe(4);
    expect(kirtanSafariNotifications.map((notice) => notice.sendAt.slice(0, 10))).toEqual([
      "2026-08-27",
      "2026-08-28",
      "2026-08-29",
      "2026-08-30",
    ]);
  });

  it("deep-links every approved broadcast to the live festival panel", () => {
    for (const notice of kirtanSafariNotifications) {
      expect(notice.url).toBe("/festivals/kirtan-safari#live");
      expect(notice.tag).toBe(notice.id);
    }
  });
});
