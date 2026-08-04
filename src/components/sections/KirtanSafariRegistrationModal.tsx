"use client";

import { CSSProperties, ReactNode, useEffect, useState } from "react";
import { X } from "lucide-react";
import KirtanSafariRegistrationForm from "./KirtanSafariRegistrationForm";

const OPEN_EVENT = "open-kirtan-safari-registration";

export function openKirtanSafariRegistration() {
  window.dispatchEvent(new CustomEvent(OPEN_EVENT));
}

export function KirtanSafariRegistrationButton({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <button
      type="button"
      className={className}
      style={style}
      onClick={openKirtanSafariRegistration}
    >
      {children}
    </button>
  );
}

export default function KirtanSafariRegistrationModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const open = () => setIsOpen(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="ks-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      <section
        className="ks-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ks-registration-title"
      >
        <button
          type="button"
          className="ks-modal-close"
          aria-label="Close registration form"
          onClick={() => setIsOpen(false)}
        >
          <X size={18} strokeWidth={1.8} />
        </button>

        <div className="ks-modal-copy">
          <p className="ks-modal-eyebrow">Registration</p>
          <h2 id="ks-registration-title">
            Reserve Your <span>Kirtan Safari Place</span>
          </h2>
          <p>
            Share your details so the team can plan prasadam, seating, updates,
            and festival care. Entry is free, and donations are welcome.
          </p>
        </div>

        <KirtanSafariRegistrationForm />
      </section>

      <style jsx>{`
        .ks-modal-backdrop {
          align-items: center;
          background: rgba(3, 13, 8, 0.78);
          backdrop-filter: blur(10px);
          display: flex;
          inset: 0;
          justify-content: center;
          padding: clamp(1rem, 4vw, 2rem);
          position: fixed;
          z-index: 120;
        }

        .ks-modal-panel {
          background:
            linear-gradient(135deg, rgba(246, 226, 177, 0.08), rgba(7, 28, 16, 0.98)),
            #071c10;
          border: 1px solid rgba(214, 156, 43, 0.34);
          box-shadow: 0 28px 80px rgba(0, 0, 0, 0.45);
          max-height: min(88vh, 920px);
          max-width: 940px;
          overflow: auto;
          padding: clamp(1.1rem, 3vw, 2rem);
          position: relative;
          width: min(100%, 940px);
        }

        .ks-modal-close {
          align-items: center;
          background: rgba(246, 226, 177, 0.1);
          border: 1px solid rgba(246, 226, 177, 0.18);
          color: #f6e2b1;
          cursor: pointer;
          display: inline-flex;
          height: 42px;
          justify-content: center;
          padding: 0;
          position: absolute;
          right: 1rem;
          top: 1rem;
          width: 42px;
        }

        .ks-modal-copy {
          padding: 0 3rem 1.25rem 0;
        }

        .ks-modal-eyebrow {
          color: #d69c2b;
          font-family: var(--font-inter, sans-serif);
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.2em;
          margin: 0 0 0.7rem;
          text-transform: uppercase;
        }

        .ks-modal-copy h2 {
          color: #fff;
          font-family: var(--font-playfair, serif);
          font-size: clamp(1.85rem, 4vw, 3rem);
          line-height: 1.05;
          margin: 0 0 0.85rem;
        }

        .ks-modal-copy h2 span {
          color: #d69c2b;
          display: block;
        }

        .ks-modal-copy p:last-child {
          color: rgba(255, 255, 255, 0.64);
          font-family: var(--font-inter, sans-serif);
          font-size: 0.9rem;
          line-height: 1.7;
          margin: 0;
          max-width: 680px;
        }

        @media (max-width: 640px) {
          .ks-modal-backdrop {
            align-items: flex-end;
            padding: 0.7rem;
          }

          .ks-modal-panel {
            max-height: 86vh;
            padding: 1rem;
          }

          .ks-modal-copy {
            padding: 0 2.7rem 1rem 0;
          }
        }
      `}</style>
    </div>
  );
}
