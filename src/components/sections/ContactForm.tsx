"use client";

import { FormEvent, useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website: string;
};

const initialForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "General Enquiry",
  message: "",
  website: "",
};

const subjects = [
  "General Enquiry",
  "Guest House Booking",
  "HKTC Admissions",
  "Food For Life Volunteering",
  "Donation Query",
  "Kirtan Safari Festival",
  "Media / Press",
];

function cleanText(value: string) {
  return value.replace(/[<>]/g, "").trim();
}

const inputClass =
  "w-full bg-white border border-temple-sand font-inter text-sm px-4 py-3 focus:outline-none focus:border-gold text-ink placeholder-ink/30";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submitMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.website) {
      setStatus("success");
      setMessage("Thank you. Your message has been sent.");
      return;
    }

    if (!form.firstName.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setMessage("Please add your name, email address, and a message.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    const payload = {
      firstName: cleanText(form.firstName),
      lastName: cleanText(form.lastName),
      email: cleanText(form.email),
      phone: cleanText(form.phone),
      subject: cleanText(form.subject),
      message: cleanText(form.message),
      formType: "contact-us",
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
        throw new Error(result?.message || "Your message could not be sent.");
      }

      setStatus("success");
      setMessage("Thank you. Your message has been received and we will get back to you shortly.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We could not send your message. Please check your connection and try again."
      );
    }
  };

  return (
    <form onSubmit={submitMessage} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        {[
          { label: "First Name", name: "firstName", type: "text", placeholder: "First name", autoComplete: "given-name" },
          { label: "Last Name", name: "lastName", type: "text", placeholder: "Last name", autoComplete: "family-name" },
        ].map((f) => (
          <div key={f.name}>
            <label className="font-inter text-xs font-semibold uppercase tracking-wider text-ink/50 block mb-1.5">{f.label}</label>
            <input
              value={form[f.name as "firstName" | "lastName"]}
              onChange={(event) => updateField(f.name as "firstName" | "lastName", event.target.value)}
              type={f.type}
              placeholder={f.placeholder}
              autoComplete={f.autoComplete}
              maxLength={60}
              required
              title="Please do not include code, angle brackets, or markup."
              className={inputClass}
            />
          </div>
        ))}
      </div>
      {[
        { label: "Email Address", name: "email", type: "email", placeholder: "your@email.com", autoComplete: "email", inputMode: "email", required: true },
        { label: "Phone Number (optional)", name: "phone", type: "tel", placeholder: "+254 ...", autoComplete: "tel", inputMode: "tel", required: false },
      ].map((f) => (
        <div key={f.name}>
          <label className="font-inter text-xs font-semibold uppercase tracking-wider text-ink/50 block mb-1.5">{f.label}</label>
          <input
            value={form[f.name as "email" | "phone"]}
            onChange={(event) => updateField(f.name as "email" | "phone", event.target.value)}
            type={f.type}
            placeholder={f.placeholder}
            autoComplete={f.autoComplete}
            inputMode={f.inputMode as "email" | "tel"}
            maxLength={f.type === "tel" ? 24 : 120}
            pattern={f.type === "tel" ? "[+0-9 ()-]{7,24}" : undefined}
            required={f.required}
            title={f.type === "tel" ? "Use numbers, spaces, brackets, plus signs, or hyphens only." : undefined}
            className={inputClass}
          />
        </div>
      ))}
      <div>
        <label className="font-inter text-xs font-semibold uppercase tracking-wider text-ink/50 block mb-1.5">Subject</label>
        <select
          value={form.subject}
          onChange={(event) => updateField("subject", event.target.value)}
          required
          className={`${inputClass} text-ink/70`}
        >
          {subjects.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="font-inter text-xs font-semibold uppercase tracking-wider text-ink/50 block mb-1.5">Message</label>
        <textarea
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          rows={5}
          placeholder="Tell us how we can help..."
          maxLength={1200}
          required
          title="Please do not include code or markup."
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
          className={`font-inter text-sm ${
            status === "error" ? "text-sunset" : "text-emerald-700"
          }`}
          role="status"
        >
          {message}
        </p>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full justify-center">
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
