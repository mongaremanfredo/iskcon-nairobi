export const templeInfo = {
  name: "ISKCON Nairobi",
  legalName: "Sri Sri Radha Bankebihari Temple",
  tagline: "Faith. Community. Service.",
  addressLines: [
    "Hare Krishna Close",
    "Parklands / West Ngara",
    "Nairobi, Kenya",
  ],
  shortAddress: "Hare Krishna Close, Parklands / West Ngara, Nairobi",
  phoneDisplay: "+254 722 815 039",
  phoneHref: "+254722815039",
  email: "iskconnairobi@gmail.com",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=ISKCON%20Nairobi%20Hare%20Krishna%20Close%20Nairobi%20Kenya",
  hours: "Daily: 4:30 AM - 9:00 PM",
  note: "Programme timings can vary on festival days. Contact the temple before travelling for major celebrations.",
};

export const socialLinks = [
  { label: "FB", name: "Facebook", href: "https://www.facebook.com/ISKCONNairobi/" },
  { label: "IG", name: "Instagram", href: "https://www.instagram.com/iskcon_nairobi/" },
  { label: "YT", name: "YouTube", href: "https://www.youtube.com/results?search_query=ISKCON+Nairobi" },
  { label: "WA", name: "WhatsApp", href: `https://wa.me/${templeInfo.phoneHref.replace("+", "")}` },
];

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Founder", href: "/srila-prabhupada" },
  { label: "Visit", href: "/visit" },
  { label: "Learn", href: "/learn" },
  { label: "Projects", href: "/projects" },
  { label: "Festivals", href: "/festivals" },
  { label: "Guest House", href: "/guest-house" },
  { label: "Media", href: "/media" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 1000, suffix: "+", label: "Students & Youth", description: "Learning through temple classes, retreats, and outreach" },
  { value: 10000, suffix: "+", label: "Meals Monthly", description: "Prasadam served through Food For Life and temple programmes" },
  { value: 200, suffix: "+", label: "Protected Cows", description: "Cow protection and natural farming at Thika" },
  { value: 1000, suffix: "+", label: "Festival Guests", description: "Gathering for Ratha Yatra, Janmashtami, and Kirtan Safari" },
];

export const projects = [
  {
    id: "hktc-nairobi",
    title: "HKTC Nairobi",
    subtitle: "Hare Krishna Training Centre",
    description: "A Vaishnava education initiative connected to ISKCON Nairobi, offering serious study of Bhagavad-gita, Srimad-Bhagavatam, kirtan, and devotional practice.",
    image: "/images/iskcon-nairobi-aerial.jpg",
    href: "/projects/hktc-nairobi",
    tag: "Education",
  },
  {
    id: "hktc-juja",
    title: "HKTC Juja",
    subtitle: "Student & Youth Outreach",
    description: "A growing devotional outreach serving students and families around Juja with classes, kirtan, prasadam, and spiritual mentorship.",
    image: "/images/placeholders/hare-krishna-harinam.jpg",
    href: "/projects/hktc-juja",
    tag: "Education",
  },
  {
    id: "thika-farm",
    title: "Thika Farm & Goshala",
    subtitle: "Organic Farming & Cow Protection",
    description: "Sacred land where cow protection, natural farming, and devotional community life come together outside Nairobi.",
    image: "/images/placeholders/cows-pasture-pixabay.jpg",
    href: "/projects/thika-farm",
    tag: "Agriculture",
  },
  {
    id: "food-for-life",
    title: "Food For Life",
    subtitle: "Prasadam Distribution",
    description: "Freshly prepared sanctified vegetarian meals served through temple programmes, student outreach, and community care across Nairobi.",
    image: "/images/placeholders/iskcon-food-for-life.jpg",
    href: "/projects/food-for-life",
    tag: "Community Service",
  },
];

export const festivals = [
  {
    title: "Kirtan Safari Festival",
    date: "28-30 August 2026",
    location: "Hare Krishna Temple",
    description: "A kirtan journey through Jarikhand Forest with kirtan, Harinam, Abhishek, prasadam, and devotional community.",
    image: "/images/kirtan-safari-2026-poster-thumb.jpg",
    href: "/festivals/kirtan-safari",
    featured: true,
  },
  {
    title: "Ratha Yatra",
    date: "Annual procession",
    location: "Nairobi",
    description: "The Festival of Chariots, a public celebration of Lord Jagannath with kirtan, procession, dance, and prasadam distribution.",
    image: "/images/placeholders/iskcon-ratha-yatra.jpg",
    href: "/festivals/rath-yatra",
    featured: false,
  },
  {
    title: "Janmashtami",
    date: "Annual appearance day",
    location: templeInfo.legalName,
    description: "An all-day and evening celebration marking the divine appearance of Lord Krishna, with kirtan, abhishek, drama, offerings, and prasadam.",
    image: "/images/placeholders/iskcon-temple-bangalore.jpg",
    href: "/festivals/janmashtami",
    featured: false,
  },
  {
    title: "Gaura Purnima",
    date: "Annual appearance day",
    location: templeInfo.legalName,
    description: "The appearance day of Sri Chaitanya Mahaprabhu, celebrated with kirtan, fasting, abhishek, class, and evening feast.",
    image: "/images/placeholders/iskcon-temple-bangalore.jpg",
    href: "/festivals/gaura-purnima",
    featured: false,
  },
];

export const homepageFestivalPreview = [
  {
    title: "Kirtan Safari Festival",
    date: "28-30 August 2026",
    month: "Aug",
    day: "28",
    location: "Hare Krishna Temple, Nairobi",
    description: "Three days of kirtan, Harinam, prasadam, and devotional community through the Jarikhand Forest theme.",
    image: "/images/kirtan-safari-2026-poster-thumb.jpg",
    href: "/festivals/kirtan-safari",
    tag: "Featured",
  },
  {
    title: "Sri Krishna Janmashtami",
    date: "4 September 2026",
    month: "Sep",
    day: "04",
    location: templeInfo.legalName,
    description: "The appearance day of Lord Krishna, observed with fasting until midnight, kirtan, abhishek, offerings, and prasadam.",
    image: "/images/placeholders/iskcon-temple-bangalore.jpg",
    href: "/festivals/janmashtami",
    tag: "Major Festival",
  },
  {
    title: "Radhashtami",
    date: "19 September 2026",
    month: "Sep",
    day: "19",
    location: templeInfo.legalName,
    description: "Appearance of Srimati Radharani, celebrated with kirtan, class, worship, and special temple programmes.",
    image: "/images/placeholders/iskcon-temple-bangalore.jpg",
    href: "/festivals",
    tag: "Temple Festival",
  },
];

export const vaishnavaCalendar2026 = [
  {
    month: "January",
    events: [
      { date: "Jan 3", day: "Sat", event: "Shri Krishna Pushya Abhisheka" },
      { date: "Jan 14", day: "Wed", event: "Shat Tila Ekadashi", type: "Ekadashi" },
      { date: "Jan 15", day: "Thu", event: "Ganga Sagara Mela / Makara Sankranti" },
      { date: "Jan 23", day: "Fri", event: "Vasanta Panchami / Saraswati Puja" },
      { date: "Jan 26", day: "Mon", event: "Bhishmashtami" },
      { date: "Jan 29", day: "Thu", event: "Bhaimi Ekadashi", type: "Ekadashi" },
      { date: "Jan 30", day: "Fri", event: "Varaha Dwadashi - Lord Varahadeva appearance" },
      { date: "Jan 31", day: "Sat", event: "Nityananda Trayodashi - Nityananda Prabhu appearance", type: "Major" },
    ],
  },
  {
    month: "February",
    events: [
      { date: "Feb 1", day: "Sun", event: "Shri Krishna Madhura Utsava" },
      { date: "Feb 6", day: "Fri", event: "Bhaktisiddhanta Sarasvati Thakura - Appearance" },
      { date: "Feb 13", day: "Fri", event: "Vijaya Ekadashi", type: "Ekadashi" },
      { date: "Feb 16", day: "Mon", event: "Shiva Ratri" },
      { date: "Feb 27", day: "Fri", event: "Amalaki Ekadashi", type: "Ekadashi" },
    ],
  },
  {
    month: "March",
    events: [
      { date: "Mar 3", day: "Tue", event: "Gaura Purnima - Appearance of Sri Chaitanya Mahaprabhu", type: "Major" },
      { date: "Mar 4", day: "Wed", event: "Festival of Jagannatha Mishra" },
      { date: "Mar 15", day: "Sun", event: "Papamochani Ekadashi", type: "Ekadashi" },
      { date: "Mar 27", day: "Fri", event: "Rama Navami - Appearance of Lord Ramachandra", type: "Major" },
      { date: "Mar 29", day: "Sun", event: "Kamada Ekadashi", type: "Ekadashi" },
      { date: "Mar 30", day: "Mon", event: "Damanakaropana Dwadashi" },
    ],
  },
  {
    month: "April",
    events: [
      { date: "Apr 2", day: "Thu", event: "Shri Balarama Rasayatra / Krishna Vasanta Rasa" },
      { date: "Apr 13", day: "Mon", event: "Varuthini Ekadashi", type: "Ekadashi" },
      { date: "Apr 14", day: "Tue", event: "Beginning of Tulasi Jala Dan" },
      { date: "Apr 20", day: "Mon", event: "Akshaya Tritiya / Chandana Yatra begins", type: "Major" },
      { date: "Apr 27", day: "Mon", event: "Mohini Ekadashi", type: "Ekadashi" },
      { date: "Apr 28", day: "Tue", event: "Rukmini Dwadashi" },
      { date: "Apr 30", day: "Thu", event: "Narasimha Chaturdashi - Appearance of Lord Narasimhadeva", type: "Major" },
    ],
  },
  {
    month: "May",
    events: [
      { date: "May 1", day: "Fri", event: "Krishna Phula Dola, Salila Vihara" },
      { date: "May 13", day: "Wed", event: "Apara Ekadashi", type: "Ekadashi" },
      { date: "May 14", day: "Thu", event: "End of Tulasi Jala Dan" },
      { date: "May 27", day: "Wed", event: "Padmini Ekadashi", type: "Ekadashi" },
    ],
  },
  {
    month: "June",
    events: [
      { date: "Jun 11", day: "Thu", event: "Parama Ekadashi", type: "Ekadashi" },
      { date: "Jun 24", day: "Wed", event: "Ganga Puja" },
      { date: "Jun 26", day: "Fri", event: "Pandava Nirjala Ekadashi - strictest fast of the year", type: "Ekadashi" },
      { date: "Jun 27", day: "Sat", event: "Panihati Chida Dahi Utsava" },
      { date: "Jun 29", day: "Mon", event: "Snana Yatra" },
    ],
  },
  {
    month: "July",
    events: [
      { date: "Jul 11", day: "Sat", event: "Yogini Ekadashi", type: "Ekadashi" },
      { date: "Jul 15", day: "Wed", event: "Gundica Marjana" },
      { date: "Jul 16", day: "Thu", event: "Ratha Yatra - Chariot festival of Jagannath, Baladeva, Subhadra", type: "Major" },
      { date: "Jul 20", day: "Mon", event: "Hera Panchami" },
      { date: "Jul 24", day: "Fri", event: "Return Ratha Yatra" },
      { date: "Jul 25", day: "Sat", event: "Sayana Ekadashi", type: "Ekadashi" },
      { date: "Jul 29", day: "Wed", event: "Guru Purnima / 1st Chaturmasya begins", type: "Major" },
    ],
  },
  {
    month: "August",
    events: [
      { date: "Aug 7", day: "Fri", event: "Incorporation of ISKCON in New York (1966)" },
      { date: "Aug 9", day: "Sun", event: "Kamika Ekadashi", type: "Ekadashi" },
      { date: "Aug 23", day: "Sun", event: "Radha Govinda Jhulana Yatra begins" },
      { date: "Aug 24", day: "Mon", event: "Pavitropana Ekadashi", type: "Ekadashi" },
      { date: "Aug 27", day: "Thu", event: "Last day of 1st Chaturmasya" },
      { date: "Aug 28", day: "Fri", event: "Lord Balarama Appearance / Kirtan Safari begins", type: "Major" },
      { date: "Aug 29", day: "Sat", event: "Srila Prabhupada's Departure for the USA / Kirtan Safari" },
      { date: "Aug 30", day: "Sun", event: "Kirtan Safari closing day", type: "Major" },
    ],
  },
  {
    month: "September",
    events: [
      { date: "Sep 4", day: "Fri", event: "Sri Krishna Janmashtami - Appearance of Lord Krishna", type: "Major" },
      { date: "Sep 5", day: "Sat", event: "Nandotsava / Srila Prabhupada Appearance day", type: "Major" },
      { date: "Sep 7", day: "Mon", event: "Annada Ekadashi", type: "Ekadashi" },
      { date: "Sep 19", day: "Sat", event: "Radhashtami - Appearance of Srimati Radharani", type: "Major" },
      { date: "Sep 22", day: "Tue", event: "Parshva Ekadashi", type: "Ekadashi" },
      { date: "Sep 25", day: "Fri", event: "Ananta Chaturdashi / Last day of 2nd Chaturmasya" },
      { date: "Sep 26", day: "Sat", event: "Shri Vishwarupa Mahotsava / 3rd Chaturmasya begins" },
    ],
  },
  {
    month: "October",
    events: [
      { date: "Oct 3", day: "Sat", event: "Srila Prabhupada's Arrival in the USA" },
      { date: "Oct 6", day: "Tue", event: "Indira Ekadashi", type: "Ekadashi" },
      { date: "Oct 18", day: "Sun", event: "Durga Puja" },
      { date: "Oct 21", day: "Wed", event: "Ramachandra Vijayotsava" },
      { date: "Oct 22", day: "Thu", event: "Pashankusha Ekadashi", type: "Ekadashi" },
      { date: "Oct 25", day: "Sun", event: "Last day of 3rd Chaturmasya" },
      { date: "Oct 26", day: "Mon", event: "Shri Krishna Sharadiya Rasayatra / Lakshmi Puja" },
    ],
  },
  {
    month: "November",
    events: [
      { date: "Nov 2", day: "Mon", event: "Appearance of Radha Kunda / Bahulashtami" },
      { date: "Nov 5", day: "Thu", event: "Rama Ekadashi", type: "Ekadashi" },
      { date: "Nov 9", day: "Mon", event: "Dipa Dana, Dipavali, Kali Puja" },
      { date: "Nov 10", day: "Tue", event: "Go Puja, Govardhana Puja", type: "Major" },
      { date: "Nov 13", day: "Fri", event: "Srila Prabhupada Disappearance day", type: "Major" },
      { date: "Nov 17", day: "Tue", event: "Gopashtami, Gosthashtami" },
      { date: "Nov 21", day: "Sat", event: "Utthana Ekadashi / end of Chaturmasya observance", type: "Ekadashi" },
      { date: "Nov 24", day: "Tue", event: "Shri Krishna Rasayatra / Tulasi-Saligrama Vivaha" },
      { date: "Nov 25", day: "Wed", event: "Katyayani Vrata begins" },
    ],
  },
  {
    month: "December",
    events: [
      { date: "Dec 5", day: "Sat", event: "Utpanna Ekadashi", type: "Ekadashi" },
      { date: "Dec 15", day: "Tue", event: "Odana Shashthi" },
      { date: "Dec 20", day: "Sun", event: "Mokshada Ekadashi / Gita Jayanti", type: "Major" },
      { date: "Dec 24", day: "Thu", event: "Katyayani Vrata ends" },
      { date: "Dec 27", day: "Sun", event: "Bhaktisiddhanta Sarasvati Thakura - Disappearance" },
    ],
  },
];

export const testimonials = [
  {
    quote: "The first thing I felt at the temple was welcome. The kirtan, prasadam, and classes gave me a spiritual home in Nairobi.",
    name: "Temple visitor",
    role: "Sunday Feast guest",
    origin: "Nairobi, Kenya",
    image: "https://source.unsplash.com/400x400/?african,woman,portrait,smile&sig=iskcon-testimonial-1",
  },
  {
    quote: "Serving prasadam changes the whole mood of the day. People come for food, but they leave with dignity and joy.",
    name: "Food For Life volunteer",
    role: "Community outreach",
    origin: "Nairobi, Kenya",
    image: "https://source.unsplash.com/400x400/?african,man,portrait,smile&sig=iskcon-testimonial-2",
  },
  {
    quote: "The farm helped me understand simple living in a practical way: caring for cows, working with the land, and chanting together.",
    name: "Farm participant",
    role: "Thika Farm service",
    origin: "Kenya",
    image: "https://source.unsplash.com/400x400/?indian,man,portrait,smile&sig=iskcon-testimonial-3",
  },
  {
    quote: "Ratha Yatra brought the whole city into celebration. I had never seen devotion expressed so publicly and joyfully.",
    name: "Festival volunteer",
    role: "Ratha Yatra service",
    origin: "Kiambu, Kenya",
    image: "https://source.unsplash.com/400x400/?kenyan,student,portrait,graduation&sig=iskcon-testimonial-4",
  },
];

export const leadership = [
  {
    name: "Temple Council",
    title: "Community Stewardship",
    description: "ISKCON Nairobi is guided by senior devotees and service leaders who coordinate worship, education, outreach, festivals, and community care.",
    image: "/images/placeholders/iskcon-temple-bangalore.jpg",
  },
  {
    name: "Education Team",
    title: "Scriptural Study & Youth Programmes",
    description: "Teachers and mentors support Bhagavad-gita study, kirtan training, youth outreach, and the Hare Krishna Training Centre initiatives.",
    image: "/images/placeholders/hare-krishna-harinam.jpg",
  },
  {
    name: "Outreach Volunteers",
    title: "Food, Festivals & Service",
    description: "A wide volunteer network supports prasadam distribution, Ratha Yatra, Kirtan Safari, guest care, and day-to-day temple service.",
    image: "/images/placeholders/iskcon-food-for-life.jpg",
  },
];

export const donationPaths = [
  {
    title: "Temple Worship",
    description: "Support daily worship at Sri Sri Radha Bankebihari Temple: flowers, lamps, offerings, maintenance, and festival worship.",
    image: "/images/placeholders/iskcon-temple-bangalore.jpg",
    icon: "🪔",
    href: "/donate/temple",
  },
  {
    title: "Food For Life",
    description: "Help prepare and distribute sanctified vegetarian meals for temple guests, students, and communities in need.",
    image: "/images/placeholders/iskcon-food-for-life.jpg",
    icon: "🍛",
    href: "/donate/food",
  },
  {
    title: "Cow Protection",
    description: "Support feed, veterinary care, shelter, and daily service for protected cows at the Thika farm and goshala.",
    image: "/images/placeholders/cows-pasture-pixabay.jpg",
    icon: "🐄",
    href: "/donate/cows",
  },
  {
    title: "Student Sponsorship",
    description: "Sponsor study materials, prasadam, retreats, and mentorship for youth and students learning Krishna consciousness.",
    image: "/images/placeholders/hare-krishna-harinam.jpg",
    icon: "📚",
    href: "/donate/students",
  },
  {
    title: "Festival Support",
    description: "Help make Ratha Yatra, Janmashtami, Gaura Purnima, and Kirtan Safari accessible with kirtan, prasadam, and public outreach.",
    image: "/images/placeholders/iskcon-ratha-yatra-moscow.jpg",
    icon: "🎺",
    href: "/donate/festivals",
  },
];

export const guestRooms = [
  {
    name: "Temple View Room",
    description: "A simple, peaceful room for visitors joining temple programmes and retreats.",
    price: "Enquire",
    priceUSD: "",
    capacity: "1-2 guests",
    image: "/images/placeholders/iskcon-temple-bangalore.jpg",
    amenities: ["Temple access", "Desk", "Quiet stay", "Vegetarian meals nearby"],
  },
  {
    name: "Sadhana Suite",
    description: "A longer-stay option for retreat guests, visiting devotees, and spiritual study visits.",
    price: "Enquire",
    priceUSD: "",
    capacity: "1-2 guests",
    image: "/images/placeholders/iskcon-temple-bangalore.jpg",
    amenities: ["Private space", "Study area", "Temple schedule", "Laundry access"],
  },
  {
    name: "Family Quarters",
    description: "A practical family accommodation option for festival weekends and extended visits.",
    price: "Enquire",
    priceUSD: "",
    capacity: "Up to 4 guests",
    image: "/images/placeholders/iskcon-temple-bangalore.jpg",
    amenities: ["Family room", "Shared living", "Retreat friendly", "Advance booking"],
  },
];

export const templeSchedule = [
  { time: "4:30 AM", event: "Mangala Arati" },
  { time: "7:15 AM", event: "Guru Puja & Bhagavatam Class" },
  { time: "8:30 AM", event: "Breakfast Prasadam" },
  { time: "12:00 PM", event: "Raja Bhoga Arati" },
  { time: "4:30 PM", event: "Utthapana Arati" },
  { time: "6:30 PM", event: "Sandhya Arati" },
  { time: "8:00 PM", event: "Sayana Arati" },
];
