"use client";

import { useState } from "react";

type Language = "english" | "hindi" | "gujarati";

const languages: { id: Language; label: string; nativeLabel: string }[] = [
  { id: "english", label: "English", nativeLabel: "English" },
  { id: "hindi", label: "Hindi", nativeLabel: "हिन्दी" },
  { id: "gujarati", label: "Gujarati", nativeLabel: "ગુજરાતી" },
];

const verses = [
  {
    roman: "I",
    original: "nānā dravya āyojana, kari kare nimantraṇa,\nkṛpā kari kara āgamana |",
    translations: {
      english:
        "Having collected and arranged all kinds of articles and invited everyone, I pray you mercifully come.",
      hindi:
        "विविध सामग्रियों को एकत्र और व्यवस्थित करके सभी को आमंत्रित किया है। मेरी प्रार्थना है कि कृपा करके पधारें।",
      gujarati:
        "વિવિધ સામગ્રીઓ એકત્ર કરી અને ગોઠવીને સૌને આમંત્રણ આપ્યું છે. મારી પ્રાર્થના છે કે કૃપા કરીને પધારો.",
    },
  },
  {
    roman: "II",
    original: "tomāra vaiṣṇava gaṇa, mora ei nivedana,\ndṛṣṭi kari kara samāpana ||",
    translations: {
      english:
        "You are all Vaishnava devotees of the Lord - I humbly pray that you complete this ceremony with your merciful glance.",
      hindi:
        "आप सभी भगवान के वैष्णव भक्त हैं। मेरी विनम्र प्रार्थना है कि अपनी कृपादृष्टि से इस समारोह को पूर्ण करें।",
      gujarati:
        "આપ સૌ ભગવાનના વૈષ્ણવ ભક્તો છો. મારી નમ્ર પ્રાર્થના છે કે આપની કૃપાદૃષ્ટિથી આ વિધિને પૂર્ણ કરો.",
    },
  },
  {
    roman: "III",
    original: "kari ata nivedana, ānilā mahanta-gaṇa,\nkīrtanera kare adhivāsa |",
    translations: {
      english:
        "Thus humbly praying, having brought the assembled mahanta devotees, we hold the adhivasa of the congregational chanting of the holy names.",
      hindi:
        "इस प्रकार विनम्र प्रार्थना करके और महन्त भक्तों को एकत्र करके हम पवित्र नामों के सामूहिक संकीर्तन का अधिवास करते हैं।",
      gujarati:
        "આ રીતે નમ્ર પ્રાર્થના કરીને અને મહંત ભક્તોને એકત્ર કરીને અમે પવિત્ર નામોના સામૂહિક સંકીર્તનનો અધિવાસ કરીએ છીએ.",
    },
  },
  {
    roman: "IV",
    original: "aneka bhāgyera phale, vaiṣṇava, āsiyā mile,\nkāli habe mahotsava vilāsa ||",
    translations: {
      english:
        "Only by great fortune does one get the association of such an assembly of Vaishnavas - tomorrow there will be a great festival.",
      hindi:
        "महान सौभाग्य से ही वैष्णवों की ऐसी सभा का संग प्राप्त होता है। कल एक महान उत्सव होगा।",
      gujarati:
        "મહાન સૌભાગ્યથી જ વૈષ્ણવોની આવી સભાનો સંગ પ્રાપ્ત થાય છે. આવતીકાલે મહાન ઉત્સવ થશે.",
    },
  },
  {
    roman: "V",
    original: "Śrī kṛṣṇera līlā-gaṇa, karibena āsvādana,\npūribe sabāra abhilāṣa |",
    translations: {
      english:
        "There you will all relish the sweet pastimes of Sri Krishna, and all your desires will be fulfilled.",
      hindi:
        "वहाँ आप सभी श्रीकृष्ण की मधुर लीलाओं का आस्वादन करेंगे और आप सबकी अभिलाषाएँ पूर्ण होंगी।",
      gujarati:
        "ત્યાં આપ સૌ શ્રીકૃષ્ણની મધુર લીલાઓનો આસ્વાદ કરશો અને આપ સૌની અભિલાષાઓ પૂર્ણ થશે.",
    },
  },
  {
    roman: "VI",
    original: "Śrī Kṛṣṇa Caitanya Candra, sakala bhakata-vṛnda,\nguṇa gāya Vṛndāvana dāsa ||",
    translations: {
      english:
        "Thus Vrindavana Dasa glorifies the moonlike Lord Sri Krishna Chaitanya and all His devotees.",
      hindi:
        "इस प्रकार वृन्दावन दास चन्द्रमा के समान भगवान श्रीकृष्ण चैतन्य और उनके समस्त भक्तों के गुणों का गान करते हैं।",
      gujarati:
        "આ રીતે વૃંદાવન દાસ ચંદ્ર સમાન ભગવાન શ્રીકૃષ્ણ ચૈતન્ય અને તેમના સર્વ ભક્તોના ગુણગાન કરે છે.",
    },
  },
];

function VerseCard({
  roman,
  original,
  translation,
  language,
}: {
  roman: string;
  original: string;
  translation: string;
  language: Language;
}) {
  const languageLabel = languages.find((item) => item.id === language)?.label;

  return (
    <div className="flex gap-4">
      <div className="flex shrink-0 items-start pt-1">
        <span className="flex h-8 w-8 items-center justify-center border border-gold/40 font-inter text-[0.68rem] font-semibold text-gold">
          {roman}
        </span>
      </div>
      <div className="grid flex-1 gap-0 overflow-hidden border border-temple-sand bg-white shadow-card sm:grid-cols-2">
        <div className="whitespace-pre-line border-b border-dashed border-temple-sand p-5 font-playfair text-[1.05rem] italic leading-relaxed text-ink sm:border-b-0 sm:border-r sm:p-6">
          {original}
        </div>
        <div className="bg-temple-cream/50 p-5 sm:p-6">
          <p className="font-inter text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-ink/40">
            {languageLabel} translation
          </p>
          <p
            lang={language === "hindi" ? "hi" : language === "gujarati" ? "gu" : "en"}
            className="mt-2 font-inter text-sm leading-relaxed text-ink/68"
          >
            {translation}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AdhivasaLyrics() {
  const [language, setLanguage] = useState<Language>("english");

  const renderVerse = (verse: (typeof verses)[number]) => (
    <VerseCard
      key={verse.roman}
      roman={verse.roman}
      original={verse.original}
      translation={verse.translations[language]}
      language={language}
    />
  );

  return (
    <div className="mt-12">
      <div className="mb-6 border border-gold/25 bg-white p-4 shadow-card sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-5">
        <div>
          <p className="font-inter text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-gold">
            Lyrics and translation
          </p>
          <p className="mt-1 font-playfair text-lg font-semibold text-ink">
            Choose your reading language
          </p>
        </div>
        <div
          role="tablist"
          aria-label="Choose translation language"
          className="mt-4 grid grid-cols-3 border border-temple-sand bg-temple-cream/60 p-1 sm:mt-0 sm:min-w-[19rem]"
        >
          {languages.map((item) => {
            const isActive = language === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setLanguage(item.id)}
                className={`min-h-11 px-3 font-inter text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                  isActive
                    ? "bg-dusk text-white shadow-sm"
                    : "text-ink/65 hover:bg-white hover:text-ink"
                }`}
              >
                {item.nativeLabel}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-5">
        {verses.slice(0, 3).map(renderVerse)}

        <div className="my-8 border border-gold/30 bg-dusk px-6 py-8 text-center sm:px-10">
          <p className="font-playfair text-xl italic leading-snug text-white sm:text-2xl">
            &ldquo;kāli habe mahotsava vilāsa&rdquo;
          </p>
          <p className="mt-3 font-inter text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold">
            Tomorrow, the festival begins
          </p>
        </div>

        {verses.slice(3).map(renderVerse)}
      </div>
    </div>
  );
}
