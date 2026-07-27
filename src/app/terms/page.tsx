import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { templeInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions for using the ISKCON Nairobi website.",
};

const lastUpdated = "July 27, 2026";
const platformUrl = "https://iskcon-nairobi.vercel.app";
const templeAddress = templeInfo.addressLines.join(", ");

const termsSections = [
  {
    title: "1. Introduction and Acceptance",
    items: [
      `These Terms and Conditions govern your access to and use of ${platformUrl} and any associated digital services operated by ${templeInfo.name}, also known as ${templeInfo.legalName}, with its temple address at ${templeAddress}.`,
      "By accessing, browsing, or using this website, you agree to be bound by these Terms and by our Privacy Policy. If you do not agree, you should not use this website.",
      "If you use the website on behalf of an organization, devotee group, congregation, or vendor, you confirm that you have authority to act on its behalf.",
      "If you are under 18, you may use this website only with the involvement and consent of a parent or legal guardian, especially for donations, bookings, form submissions, or any feature involving personal data.",
    ],
  },
  {
    title: "2. Nature of the Website and Religious Content",
    items: [
      "This website is operated as a religious, cultural, educational, and community service for sharing information about Gaudiya Vaishnava philosophy, temple programmes, festivals, deity worship, prasadam distribution, education, outreach, and related activities.",
      "Scriptural references, philosophical commentary, festival descriptions, and devotional teachings reflect the theological and philosophical positions of ISKCON and the Gaudiya Vaishnava tradition. They are provided for informational, educational, and devotional purposes only.",
      "Nothing on this website should be treated as medical, legal, financial, psychological, or professional advice. We do not warrant that participation in any programme, ritual, service, or activity will produce a particular spiritual, physical, or material outcome.",
    ],
  },
  {
    title: "3. Accounts, Forms, and Information You Provide",
    items: [
      "Certain features, including event registration, donation enquiries, guest-house enquiries, course applications, volunteer sign-ups, newsletter subscriptions, or contact forms, may require you to submit personal information.",
      "You agree to provide accurate, current, and complete information and to update it where necessary.",
      `If you believe information submitted through the website has been used without authorization, contact us at ${templeInfo.email}.`,
      "We may decline, suspend, or remove access to any submission, account, or request that contains false information, violates these Terms, or is inconsistent with the devotional and community purpose of the Temple.",
    ],
  },
  {
    title: "4. Donations, Seva, Bookings, and Payments",
    items: [
      "Donations, seva contributions, and offerings made to ISKCON Nairobi are voluntary religious or charitable contributions. Unless expressly stated for a specific campaign or transaction, completed donations are treated as non-refundable because of their charitable nature.",
      "Where online payment integration or external payment links are used, payments may be processed by third-party payment providers such as mobile money, card, bank-transfer, or other gateway providers. ISKCON Nairobi does not ask for or store full payment card numbers, CVV codes, or M-Pesa PINs on this website.",
      `If you believe a donation, seva payment, booking, or purchase was duplicated or processed in error, contact ${templeInfo.email} with proof of transaction as soon as possible. Refunds, where granted, are at the discretion of ISKCON Nairobi and will normally be processed to the original payment method where technically possible.`,
      "Where event bookings, courses, prasadam orders, guest-house arrangements, or festival registrations are offered, additional pricing, cancellation, capacity, and attendance terms may be shown at the point of booking and will form part of these Terms for that transaction.",
      "ISKCON Nairobi may correct typographical, pricing, availability, or programme errors and may cancel or adjust any affected booking or order, with a refund where payment was collected and cancellation is appropriate.",
      "Donation receipts or acknowledgements may be issued where applicable and upon request. ISKCON Nairobi does not provide tax advice; donors should confirm any tax treatment with the Kenya Revenue Authority or their own advisor.",
    ],
  },
  {
    title: "5. User Conduct",
    items: [
      "You agree not to post, upload, submit, or transmit unlawful, defamatory, obscene, hateful, abusive, misleading, or discriminatory content, including content that disparages any religion, community, or individual.",
      "You must not impersonate ISKCON Nairobi, its officers, gurus, devotees, volunteers, or any other person or entity.",
      "You must not upload malware, attempt unauthorized access, disrupt the website, scrape or harvest data without written consent, spam users, or use the website for unrelated commercial solicitation.",
      "You must not use the website in a way that violates Kenyan law, including the Computer Misuse and Cybercrimes Act, 2018, or any applicable law in your jurisdiction.",
      "We may monitor, remove, restrict, or refuse user-submitted content that violates these Terms or the purpose of the website.",
    ],
  },
  {
    title: "6. User-Submitted Content",
    items: [
      "Where the website allows submissions such as comments, testimonials, photographs, prayer requests, volunteer applications, or contact messages, you retain ownership of your content but grant ISKCON Nairobi a worldwide, royalty-free, non-exclusive license to use, reproduce, display, and distribute it for the Temple's religious, educational, charitable, administrative, and promotional purposes.",
      "You confirm that you own or have the necessary rights to any content you submit and that it does not infringe another person's intellectual property, privacy, or other rights.",
      "Prayer requests, blessing requests, personal messages, or sensitive submissions will be handled in line with our Privacy Policy and will not be published unless the relevant form clearly states that the submission may be public or you separately consent.",
    ],
  },
  {
    title: "7. Intellectual Property",
    items: [
      "Content on this website, including text, graphics, logos, images, audio, video, classes, kirtans, layouts, and software, is owned by ISKCON Nairobi, its licensors, its contributors, or relevant rights holders and is protected by Kenyan copyright law and applicable international treaties.",
      "The ISKCON name, emblem, and related marks are used in connection with the International Society for Krishna Consciousness and its authorized activities.",
      "You may view, download, and share website content for personal, non-commercial, devotional, or educational use only. You may not sell, commercially exploit, republish, or reproduce website content at scale without written permission from ISKCON Nairobi and, where applicable, the relevant rights holder.",
      "Scriptural translations and commentaries, including works published by the Bhaktivedanta Book Trust, remain the property of their respective copyright holders. Any use beyond fair dealing, licensed temple use, or permitted sharing requires separate permission from the relevant rights holder.",
    ],
  },
  {
    title: "8. Third-Party Links and Services",
    items: [
      "This website may link to third-party websites, forms, payment processors, maps, livestream platforms, social media pages, video platforms, registration forms, or messaging services.",
      "ISKCON Nairobi does not control and is not responsible for the content, security, availability, terms, or privacy practices of third-party services. Your use of third-party services is governed by their own terms and privacy policies.",
    ],
  },
  {
    title: "9. Disclaimers",
    items: [
      "The website and all content are provided on an as-is and as-available basis, without warranties of any kind to the maximum extent permitted by Kenyan law.",
      "ISKCON Nairobi does not warrant that the website will be uninterrupted, secure, error-free, or that event schedules, class timings, prasadam availability, guest-house availability, or festival details will not change without notice.",
      "Users experiencing a medical, mental-health, legal, or financial emergency should seek qualified professional help or emergency services and should not rely on website content for urgent assistance.",
    ],
  },
  {
    title: "10. Limitation of Liability",
    items: [
      "To the maximum extent permitted by Kenyan law, ISKCON Nairobi, its trustees, officers, employees, devotees, and volunteers shall not be liable for indirect, incidental, special, consequential, punitive, or exemplary damages, or for loss of data, revenue, goodwill, or opportunity arising from use of or inability to use the website.",
      "Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited under Kenyan law, including liability for fraud or for death or personal injury caused by proven negligence.",
      "Where liability cannot be excluded, ISKCON Nairobi's total aggregate liability for any claim arising from use of the website shall not exceed the total amount you paid to ISKCON Nairobi through the website in the twelve months before the claim, or KES 10,000, whichever is greater.",
    ],
  },
  {
    title: "11. Indemnification",
    items: [
      "You agree to indemnify and hold harmless ISKCON Nairobi, its trustees, officers, employees, devotees, and volunteers from any claim, liability, damage, loss, or expense, including reasonable legal fees, arising from your breach of these Terms, misuse of the website, or submission of content that infringes another person's rights.",
    ],
  },
  {
    title: "12. Suspension and Termination",
    items: [
      "We may suspend, restrict, or terminate your access to the website or its features, with or without notice, if we reasonably believe you have violated these Terms, submitted false information, engaged in fraudulent payment activity, or used the website in a manner harmful to ISKCON Nairobi, its community, or other users.",
      `You may stop using the website at any time and may request deletion of personal data by contacting ${templeInfo.email}, subject to records we may be required to retain for legal, accounting, security, or dispute-resolution purposes.`,
    ],
  },
  {
    title: "13. Changes to the Website and These Terms",
    items: [
      "We may modify, suspend, or discontinue any part of the website at any time.",
      "We may update these Terms from time to time. Material changes may be notified by a notice on the website or by email where we hold your email address. Continued use after changes take effect means you accept the revised Terms.",
    ],
  },
  {
    title: "14. Governing Law and Dispute Resolution",
    items: [
      "These Terms are governed by the laws of the Republic of Kenya.",
      "The parties should first attempt to resolve disputes through good-faith negotiation. Where appropriate in the Temple's spiritual community context, parties may also consider mediation through relevant ISKCON internal governance structures before litigation.",
      "Subject to good-faith negotiation or mediation where appropriate, the courts of Kenya shall have exclusive jurisdiction over disputes arising from these Terms or use of the website.",
    ],
  },
  {
    title: "15. General Provisions",
    items: [
      "If any provision of these Terms is held invalid or unenforceable, the remaining provisions will continue in effect.",
      "Failure by ISKCON Nairobi to enforce a provision does not constitute a waiver of that provision.",
      "These Terms, together with the Privacy Policy and any transaction-specific terms shown at the point of booking, donation, registration, or purchase, form the agreement between you and ISKCON Nairobi regarding the website.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms"
        titleAccent="& Conditions"
        subtitle="Use of This Site"
        image="/images/placeholders/hare-krishna-harinam.jpg"
        height="sm"
      />

      <section className="py-section bg-temple-bg">
        <div className="content-width section-padding">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 border border-gold/20 bg-white p-6 shadow-sm">
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.22em] text-gold">Last Updated</p>
              <p className="mt-2 font-playfair text-2xl text-ink">{lastUpdated}</p>
              <p className="mt-4 font-inter text-sm leading-relaxed text-ink/60">
                These Terms apply to the ISKCON Nairobi website and related digital services. Please also read our{" "}
                <a href="/privacy" className="text-primary underline">Privacy Policy</a>.
              </p>
            </div>

            <article className="space-y-9">
              {termsSections.map((section) => (
                <section key={section.title} className="border-b border-temple-sand pb-8 last:border-b-0">
                  <h2 className="font-playfair text-2xl font-semibold text-ink">{section.title}</h2>
                  <div className="mt-4 space-y-3 font-inter text-sm leading-relaxed text-ink/70">
                    {section.items.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </section>
              ))}
            </article>

            <div className="mt-10 border border-temple-sand bg-temple-cream p-6">
              <h2 className="font-playfair text-xl font-semibold text-ink">Contact</h2>
              <p className="mt-3 font-inter text-sm leading-relaxed text-ink/70">
                Questions about these Terms should be directed to{" "}
                <a href={`mailto:${templeInfo.email}`} className="text-primary underline">{templeInfo.email}</a>,{" "}
                <a href={`tel:${templeInfo.phoneHref}`} className="text-primary underline">{templeInfo.phoneDisplay}</a>, or {templeAddress}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
