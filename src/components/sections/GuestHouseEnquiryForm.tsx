"use client";

import { FormEvent, useState } from "react";

type FormState = {
  fullName: string;
  email: string;
  arrival: string;
  departure: string;
  message: string;
  website: string;
};

const initialForm: FormState = {
  fullName: "",
  email: "",
  arrival: "",
  departure: "",
  message: "",
  website: "",
};

function cleanText(value: string) {
  return value.replace(/[<>]/g, "").trim();
}

const inputClass =
  "w-full bg-white/10 border border-white/15 text-white placeholder-white/30 font-inter text-sm px-4 py-3 focus:outline-none focus:border-gold";

export default function GuestHouseEnquiryForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submitEnquiry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.website) {
      setStatus("success");
      setMessage("Thank you. Your enquiry has been sent.");
      return;
    }

    if (!form.fullName.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setMessage("Please add your name, email address, and a message.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    const details = [
      form.arrival ? `Arrival: ${form.arrival}` : "",
      form.departure ? `Departure: ${form.departure}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const payload = {
      firstName: cleanText(form.fullName),
      email: cleanText(form.email),
      subject: "Guest House Booking",
      message: [details, cleanText(form.message)].filter(Boolean).join("\n\n"),
      website: cleanText(form.website),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as { message?: string } | null;
        throw new Error(result?.message || "Your enquiry could not be sent.");
      }

      setStatus("success");
      setMessage("Thank you. Your enquiry has been received and we will get back to you shortly.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We could not send your enquiry. Please check your connection and try again."
      );
    }
  };

  return (
    <form onSubmit={submitEnquiry} className="bg-white/5 border border-white/10 p-8 space-y-4" noValidate>
      <div>
        <label className="font-inter text-white/50 text-xs uppercase tracking-wider block mb-1.5">Full Name</label>
        <input
          value={form.fullName}
          onChange={(event) => updateField("fullName", event.target.value)}
          type="text"
          placeholder="Your name"
          autoComplete="name"
          maxLength={100}
          pattern="[^<>{}]*"
          required
          title="Please do not include code, angle brackets, or markup."
          className={inputClass}
        />
      </div>
      <div>
        <label className="font-inter text-white/50 text-xs uppercase tracking-wider block mb-1.5">Email Address</label>
        <input
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          type="email"
          placeholder="your@email.com"
          autoComplete="email"
          maxLength={120}
          required
          className={inputClass}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="font-inter text-white/50 text-xs uppercase tracking-wider block mb-1.5">Arrival Date</label>
          <input
            value={form.arrival}
            onChange={(event) => updateField("arrival", event.target.value)}
            type="date"
            autoComplete="off"
            className={inputClass}
          />
        </div>
        <div>
          <label className="font-inter text-white/50 text-xs uppercase tracking-wider block mb-1.5">Departure Date</label>
          <input
            value={form.departure}
            onChange={(event) => updateField("departure", event.target.value)}
            type="date"
            autoComplete="off"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className="font-inter text-white/50 text-xs uppercase tracking-wider block mb-1.5">Message</label>
        <textarea
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          rows={3}
          placeholder="Room preference, special requirements..."
          maxLength={800}
          required
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(event) => updateField("website", event.target.value)}
          />
        </label>
      </div>

      {message && (
        <p
          className={`font-inter text-sm ${status === "error" ? "text-sunset" : "text-emerald-300"}`}
          role="status"
        >
          {message}
        </p>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full justify-center text-xs mt-2">
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
