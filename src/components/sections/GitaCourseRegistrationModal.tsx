"use client";

import { ReactNode, useEffect, useState } from "react";
import { X } from "lucide-react";
import GitaCourseRegistrationForm from "./GitaCourseRegistrationForm";

const OPEN_EVENT = "open-bhagavad-gita-course-registration";

export function openGitaCourseRegistration() {
  window.dispatchEvent(new CustomEvent(OPEN_EVENT));
}

export function GitaCourseRegistrationButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button type="button" onClick={openGitaCourseRegistration} className={className}>
      {children}
    </button>
  );
}

export default function GitaCourseRegistrationModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_EVENT, handleOpen);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="gita-modal" role="dialog" aria-modal="true" aria-labelledby="gita-modal-title">
      <button className="gita-modal-backdrop" type="button" onClick={() => setOpen(false)} aria-label="Close registration form" />

      <div className="gita-modal-panel">
        <button className="gita-modal-close" type="button" onClick={() => setOpen(false)} aria-label="Close registration form">
          <X size={18} />
        </button>

        <div className="gita-modal-header">
          <p>6 Week Course</p>
          <h2 id="gita-modal-title">
            Beginners <span>Bhagavad Gita Course</span>
          </h2>
          <div className="gita-modal-details">
            <span>In person starts 24 September</span>
            <span>Online starts 10 September</span>
          </div>
        </div>

        <GitaCourseRegistrationForm />

        <p className="gita-modal-contact">
          Contact Aisvarya Lila: <a href="tel:+254748276446">+254 748 276446</a>
        </p>
      </div>

      <style jsx>{`
        .gita-modal {
          align-items: center;
          display: flex;
          inset: 0;
          justify-content: center;
          padding: clamp(0.75rem, 3vw, 2rem);
          position: fixed;
          z-index: 90;
        }

        .gita-modal-backdrop {
          background: rgba(3, 12, 7, 0.78);
          border: 0;
          cursor: pointer;
          inset: 0;
          position: absolute;
        }

        .gita-modal-panel {
          background:
            radial-gradient(circle at 8% 0%, rgba(214, 156, 43, 0.22), transparent 34%),
            linear-gradient(135deg, #071c10 0%, #102f1c 54%, #24170d 100%);
          border: 1px solid rgba(214, 156, 43, 0.32);
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.48);
          color: #f6e2b1;
          max-height: min(92svh, 860px);
          max-width: 720px;
          overflow-y: auto;
          padding: clamp(1.25rem, 4vw, 2.4rem);
          position: relative;
          width: min(100%, 720px);
        }

        .gita-modal-close {
          align-items: center;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(246, 226, 177, 0.18);
          color: #f6e2b1;
          cursor: pointer;
          display: inline-flex;
          height: 2.35rem;
          justify-content: center;
          position: absolute;
          right: 1rem;
          top: 1rem;
          width: 2.35rem;
        }

        .gita-modal-header {
          margin-bottom: 1.15rem;
          padding-right: 2.4rem;
        }

        .gita-modal-header p {
          color: #d69c2b;
          font-family: var(--font-inter, sans-serif);
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.2em;
          margin: 0 0 0.7rem;
          text-transform: uppercase;
        }

        .gita-modal-header h2 {
          color: #fff;
          font-family: var(--font-playfair, serif);
          font-size: clamp(2rem, 5vw, 3.1rem);
          font-weight: 650;
          line-height: 0.98;
          margin: 0;
        }

        .gita-modal-header h2 span {
          color: #d69c2b;
          display: block;
          font-style: italic;
          font-weight: 400;
        }

        .gita-modal-details {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .gita-modal-details span {
          border: 1px solid rgba(214, 156, 43, 0.28);
          color: rgba(246, 226, 177, 0.76);
          font-family: var(--font-inter, sans-serif);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 0.46rem 0.62rem;
          text-transform: uppercase;
        }

        .gita-modal-contact {
          color: rgba(246, 226, 177, 0.72);
          font-family: var(--font-inter, sans-serif);
          font-size: 0.78rem;
          line-height: 1.5;
          margin: 1rem 0 0;
        }

        .gita-modal-contact a {
          color: #d69c2b;
          font-weight: 800;
          text-decoration: none;
        }

        @media (max-width: 640px) {
          .gita-modal {
            align-items: flex-end;
            padding: 0;
          }

          .gita-modal-panel {
            max-height: 88svh;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
