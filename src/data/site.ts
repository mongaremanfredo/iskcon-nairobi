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
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&q=80",
    href: "/projects/hktc-juja",
    tag: "Education",
  },
  {
    id: "thika-farm",
    title: "Thika Farm & Goshala",
    subtitle: "Organic Farming & Cow Protection",
    description: "Sacred land where cow protection, natural farming, and devotional community life come together outside Nairobi.",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80",
    href: "/projects/thika-farm",
    tag: "Agriculture",
  },
  {
    id: "food-for-life",
    title: "Food For Life",
    subtitle: "Prasadam Distribution",
    description: "Freshly prepared sanctified vegetarian meals served through temple programmes, student outreach, and community care across Nairobi.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1561361058-c24e5b4e5a9d?w=800&q=80",
    href: "/festivals/rath-yatra",
    featured: false,
  },
  {
    title: "Janmashtami",
    date: "Annual appearance day",
    location: templeInfo.legalName,
    description: "An all-day and evening celebration marking the divine appearance of Lord Krishna, with kirtan, abhishek, drama, offerings, and prasadam.",
    image: "https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=800&q=80",
    href: "/festivals/janmashtami",
    featured: false,
  },
  {
    title: "Gaura Purnima",
    date: "Annual appearance day",
    location: templeInfo.legalName,
    description: "The appearance day of Sri Chaitanya Mahaprabhu, celebrated with kirtan, fasting, abhishek, class, and evening feast.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80",
    href: "/festivals/gaura-purnima",
    featured: false,
  },
];

export const testimonials = [
  {
    quote: "The first thing I felt at the temple was welcome. The kirtan, prasadam, and classes gave me a spiritual home in Nairobi.",
    name: "Temple visitor",
    role: "Sunday Feast guest",
    origin: "Nairobi, Kenya",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    quote: "Serving prasadam changes the whole mood of the day. People come for food, but they leave with dignity and joy.",
    name: "Food For Life volunteer",
    role: "Community outreach",
    origin: "Nairobi, Kenya",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    quote: "The farm helped me understand simple living in a practical way: caring for cows, working with the land, and chanting together.",
    name: "Farm participant",
    role: "Thika Farm service",
    origin: "Kenya",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    quote: "Ratha Yatra brought the whole city into celebration. I had never seen devotion expressed so publicly and joyfully.",
    name: "Festival volunteer",
    role: "Ratha Yatra service",
    origin: "Kiambu, Kenya",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b193?w=200&q=80",
  },
];

export const leadership = [
  {
    name: "Temple Council",
    title: "Community Stewardship",
    description: "ISKCON Nairobi is guided by senior devotees and service leaders who coordinate worship, education, outreach, festivals, and community care.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Education Team",
    title: "Scriptural Study & Youth Programmes",
    description: "Teachers and mentors support Bhagavad-gita study, kirtan training, youth outreach, and the Hare Krishna Training Centre initiatives.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
  },
  {
    name: "Outreach Volunteers",
    title: "Food, Festivals & Service",
    description: "A wide volunteer network supports prasadam distribution, Ratha Yatra, Kirtan Safari, guest care, and day-to-day temple service.",
    image: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=400&q=80",
  },
];

export const donationPaths = [
  {
    title: "Temple Worship",
    description: "Support daily worship at Sri Sri Radha Bankebihari Temple: flowers, lamps, offerings, maintenance, and festival worship.",
    image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=600&q=80",
    icon: "🪔",
    href: "/donate/temple",
  },
  {
    title: "Food For Life",
    description: "Help prepare and distribute sanctified vegetarian meals for temple guests, students, and communities in need.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80",
    icon: "🍛",
    href: "/donate/food",
  },
  {
    title: "Cow Protection",
    description: "Support feed, veterinary care, shelter, and daily service for protected cows at the Thika farm and goshala.",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&q=80",
    icon: "🐄",
    href: "/donate/cows",
  },
  {
    title: "Student Sponsorship",
    description: "Sponsor study materials, prasadam, retreats, and mentorship for youth and students learning Krishna consciousness.",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=600&q=80",
    icon: "📚",
    href: "/donate/students",
  },
  {
    title: "Festival Support",
    description: "Help make Ratha Yatra, Janmashtami, Gaura Purnima, and Kirtan Safari accessible with kirtan, prasadam, and public outreach.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
    amenities: ["Temple access", "Desk", "Quiet stay", "Vegetarian meals nearby"],
  },
  {
    name: "Sadhana Suite",
    description: "A longer-stay option for retreat guests, visiting devotees, and spiritual study visits.",
    price: "Enquire",
    priceUSD: "",
    capacity: "1-2 guests",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80",
    amenities: ["Private space", "Study area", "Temple schedule", "Laundry access"],
  },
  {
    name: "Family Quarters",
    description: "A practical family accommodation option for festival weekends and extended visits.",
    price: "Enquire",
    priceUSD: "",
    capacity: "Up to 4 guests",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=80",
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
