interface Env {
  CRON_SECRET: string;
  SITE_URL: string;
}

interface WorkerExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
}

interface WorkerScheduledController {
  cron: string;
  scheduledTime: number;
}

async function sendCalendarReminders(env: Env) {
  if (!env.CRON_SECRET || !env.SITE_URL) {
    throw new Error("Calendar reminder Worker is not configured.");
  }

  const endpoint = new URL("/api/cron/calendar-reminders", env.SITE_URL);
  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${env.CRON_SECRET}`,
      "User-Agent": "ISKCON-Nairobi-Calendar-Worker/1.0",
    },
  });

  if (!response.ok) {
    const detail = (await response.text()).slice(0, 500);
    throw new Error(`Calendar reminder request failed (${response.status}): ${detail}`);
  }
}

const calendarReminderWorker = {
  async fetch(request: Request) {
    const url = new URL(request.url);
    if (url.pathname !== "/health") {
      return new Response("Not found", { status: 404 });
    }

    return Response.json({ ok: true, service: "calendar-reminders" });
  },

  async scheduled(_controller: WorkerScheduledController, env: Env, ctx: WorkerExecutionContext) {
    ctx.waitUntil(sendCalendarReminders(env));
  },
};

export default calendarReminderWorker;
