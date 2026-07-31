"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Who can join HKTC?",
    answer:
      "HKTC primarily serves university students in and around Nairobi, welcoming those exploring Krishna consciousness for the first time as well as those continuing an existing practice.",
  },
  {
    question: "Do I need a devotional background to join?",
    answer:
      "No prior background is required. Students are given room to explore at their own pace, with guidance from senior devotees at each step.",
  },
  {
    question: "What is expected of residents?",
    answer:
      "Residents follow the four regulative principles and take part in the daily programme of classes, chanting, service, and prasadam described on this page.",
  },
  {
    question: "Is there a cost to stay, and is sponsorship available?",
    answer:
      "Costs vary by arrangement. Reach out to the temple office for specifics, and see the Support section below for student sponsorship options.",
  },
  {
    question: "What happens after completing the study sequence?",
    answer:
      "Students who complete the book sequence and sit for examinations are recognised at HKTC's annual graduation ceremony.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-temple-sand border border-temple-sand bg-white">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
            >
              <span className="font-playfair text-base font-semibold text-ink sm:text-lg">
                {faq.question}
              </span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-gold transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-200 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 font-inter text-sm leading-relaxed text-ink/62 sm:px-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
