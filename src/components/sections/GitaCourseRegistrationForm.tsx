"use client";

import { FormEvent, useState } from "react";

const courseOptions = [
  "In person, Hare Krishna Temple Nairobi - Thursday 24 September 2026, 7:00 pm",
  "Online - Thursday 10 September 2026, 7:30 pm",
];

const hearAboutOptions = [
  "Hare Krishna Temple",
  "Social Media",
  "Youth Festival, Sarit Centre",
  "A friend",
  "Other",
];

type FormState = {
  fullName: string;
  phone: string;
  hearAbout: string;
  courseOption: string;
  website: string;
};

const initialForm: FormState = {
  fullName: "",
  phone: "",
  hearAbout: "",
  courseOption: "",
  website: "",
};

function cleanText(value: string) {
  return value.replace(/[<>]/g, "").trim();
}

export default function GitaCourseRegistrationForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submitRegistration = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.website) {
      setStatus("success");
      setMessage("Thank you. Your registration has been received.");
      return;
    }

    if (!form.fullName.trim() || !form.phone.trim() || !form.hearAbout || !form.courseOption) {
      setStatus("error");
      setMessage("Please add your name, WhatsApp number, how you heard about the course, and your preferred option.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/bhagavad-gita-course-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: cleanText(form.fullName),
          phone: cleanText(form.phone),
          hearAbout: cleanText(form.hearAbout),
          courseOption: cleanText(form.courseOption),
          website: form.website,
        }),
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as { message?: string } | null;
        throw new Error(result?.message || "Registration failed");
      }

      setStatus("success");
      setMessage("Thank you. Your Bhagavad Gita course registration has been received.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We could not submit the form. Please check your connection and try again."
      );
    }
  };

  return (
    <form onSubmit={submitRegistration} className="gita-registration-form" noValidate>
      <div className="gita-registration-grid">
        <label className="gita-field">
          <span>Name</span>
          <input
            value={form.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            autoComplete="name"
            maxLength={120}
            required
          />
        </label>

        <label className="gita-field">
          <span>WhatsApp Number</span>
          <input
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            autoComplete="tel"
            inputMode="tel"
            maxLength={40}
            required
          />
        </label>

        <label className="gita-field gita-field-wide">
          <span>How did you find out about this course?</span>
          <select
            value={form.hearAbout}
            onChange={(event) => updateField("hearAbout", event.target.value)}
            required
          >
            <option value="">Select one</option>
            {hearAboutOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <div className="gita-field gita-field-wide">
          <span>Choose one option</span>
          <div className="gita-options">
            {courseOptions.map((option) => (
              <label key={option} className="gita-option">
                <input
                  type="radio"
                  name="courseOption"
                  value={option}
                  checked={form.courseOption === option}
                  onChange={(event) => updateField("courseOption", event.target.value)}
                  required
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <label className="gita-hidden-field" aria-hidden="true">
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
        <p className={`gita-form-message gita-form-message-${status}`} role="status">
          {message}
        </p>
      )}

      <button type="submit" disabled={status === "submitting"} className="gita-submit">
        {status === "submitting" ? "Submitting..." : "Submit Registration"}
      </button>

      <style jsx>{`
        .gita-registration-form {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(214, 156, 43, 0.26);
          padding: clamp(1rem, 3vw, 1.75rem);
        }

        .gita-registration-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.9rem;
        }

        .gita-field {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .gita-field-wide {
          grid-column: 1 / -1;
        }

        .gita-field span {
          color: rgba(246, 226, 177, 0.78);
          font-family: var(--font-inter, sans-serif);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .gita-field input,
        .gita-field select {
          width: 100%;
          border: 1px solid rgba(246, 226, 177, 0.18);
          background: rgba(7, 28, 16, 0.72);
          color: #fff;
          font-family: var(--font-inter, sans-serif);
          font-size: 1rem;
          outline: none;
          padding: 0.85rem 0.9rem;
        }

        .gita-field input:focus,
        .gita-field select:focus {
          border-color: rgba(214, 156, 43, 0.75);
        }

        .gita-options {
          display: grid;
          gap: 0.65rem;
        }

        .gita-option {
          align-items: flex-start;
          border: 1px solid rgba(246, 226, 177, 0.16);
          background: rgba(7, 28, 16, 0.58);
          cursor: pointer;
          display: flex;
          gap: 0.65rem;
          padding: 0.82rem;
        }

        .gita-option input {
          accent-color: #d69c2b;
          flex: 0 0 auto;
          height: 1rem;
          margin-top: 0.08rem;
          width: 1rem;
        }

        .gita-option span {
          color: rgba(255, 255, 255, 0.76);
          display: block;
          flex: 1 1 auto;
          font-size: 0.78rem;
          letter-spacing: 0.03em;
          line-height: 1.45;
          text-transform: none;
        }

        .gita-hidden-field {
          display: none;
        }

        .gita-form-message {
          font-family: var(--font-inter, sans-serif);
          font-size: 0.78rem;
          line-height: 1.55;
          margin: 1rem 0 0;
        }

        .gita-form-message-success {
          color: #f6e2b1;
        }

        .gita-form-message-error {
          color: rgba(255, 255, 255, 0.66);
        }

        .gita-submit {
          align-items: center;
          background: #d69c2b;
          border: 0;
          color: #071c10;
          cursor: pointer;
          display: inline-flex;
          font-family: var(--font-inter, sans-serif);
          font-size: 0.7rem;
          font-weight: 800;
          justify-content: center;
          letter-spacing: 0.18em;
          margin-top: 1.2rem;
          padding: 1rem 1.4rem;
          text-transform: uppercase;
          width: 100%;
        }

        .gita-submit:disabled {
          cursor: not-allowed;
          opacity: 0.55;
        }

        @media (max-width: 640px) {
          .gita-registration-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </form>
  );
}
