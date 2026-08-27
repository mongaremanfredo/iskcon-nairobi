"use client";

import { FormEvent, useState } from "react";

type Fields = { fullName: string; email: string; phone: string; city: string; consent: boolean; website: string };
const initialFields: Fields = { fullName: "", email: "", phone: "", city: "", consent: false, website: "" };

export default function KirtanSafariFutureInterestForm() {
  const [fields, setFields] = useState(initialFields);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!fields.fullName.trim() || !fields.email.trim() || !fields.phone.trim() || !fields.city.trim() || !fields.consent) {
      setStatus("error");
      setMessage("Please complete every field and confirm that you would like future festival updates.");
      return;
    }
    setStatus("submitting");
    setMessage("");
    try {
      const response = await fetch("/api/kirtan-safari-future-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const result = (await response.json().catch(() => null)) as { message?: string } | null;
      if (!response.ok) throw new Error(result?.message ?? "Your request could not be submitted.");
      setStatus("success");
      setMessage("Thank you. We will share news of the next Kirtan Safari when it is announced.");
      setFields(initialFields);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Please check your connection and try again.");
    }
  }

  return (
    <form className="ks-interest-form" onSubmit={submit} noValidate>
      <div className="ks-interest-fields">
        <label><span>Name</span><input required maxLength={120} autoComplete="name" value={fields.fullName} onChange={(event) => setFields({ ...fields, fullName: event.target.value })} /></label>
        <label><span>Email</span><input required maxLength={180} type="email" autoComplete="email" value={fields.email} onChange={(event) => setFields({ ...fields, email: event.target.value })} /></label>
        <label><span>WhatsApp number</span><input required maxLength={40} inputMode="tel" autoComplete="tel" value={fields.phone} onChange={(event) => setFields({ ...fields, phone: event.target.value })} /></label>
        <label><span>City or country</span><input required maxLength={100} autoComplete="address-level2" value={fields.city} onChange={(event) => setFields({ ...fields, city: event.target.value })} /></label>
        <label className="ks-interest-consent"><input type="checkbox" checked={fields.consent} onChange={(event) => setFields({ ...fields, consent: event.target.checked })} /><span>I would like to receive news about future Kirtan Safari editions.</span></label>
        <label className="ks-interest-honeypot" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" value={fields.website} onChange={(event) => setFields({ ...fields, website: event.target.value })} /></label>
      </div>
      {message ? <p className={`ks-interest-message is-${status}`} role="status">{message}</p> : null}
      <button type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Submitting..." : "Receive Future Updates"}</button>
      <style jsx>{`
        .ks-interest-fields { display:grid; gap:.8rem; grid-template-columns:repeat(2,minmax(0,1fr)); }
        label { display:grid; gap:.4rem; }
        label>span { color:#67544a; font:800 .59rem/1 var(--font-inter,sans-serif); letter-spacing:.12em; text-transform:uppercase; }
        input { background:#fffdf8; border:1px solid rgba(67,48,39,.22); color:#30231d; font:500 .9rem/1.3 var(--font-inter,sans-serif); min-height:46px; padding:.75rem; width:100%; }
        input:focus { border-color:#a23d31; outline:2px solid rgba(162,61,49,.12); }
        .ks-interest-consent { align-items:flex-start; display:flex; gap:.65rem; grid-column:1/-1; }
        .ks-interest-consent input { accent-color:#a23d31; flex:none; min-height:0; width:1rem; }
        .ks-interest-consent span { font-size:.68rem; line-height:1.45; text-transform:none; }
        .ks-interest-honeypot { left:-9999px; position:absolute; }
        button { background:#a23d31; border:0; color:white; cursor:pointer; font:800 .67rem/1 var(--font-inter,sans-serif); letter-spacing:.13em; margin-top:1rem; min-height:46px; padding:.9rem 1.2rem; text-transform:uppercase; }
        button:disabled { cursor:wait; opacity:.6; }
        .ks-interest-message { font:600 .76rem/1.5 var(--font-inter,sans-serif); margin:.8rem 0 0; }
        .ks-interest-message.is-success { color:#275f42; }
        .ks-interest-message.is-error { color:#9f3029; }
        @media(max-width:640px){ .ks-interest-fields{grid-template-columns:1fr;} }
      `}</style>
    </form>
  );
}
