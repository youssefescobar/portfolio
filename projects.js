// Shared project data + helpers.
const SOCIALS = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/youssef-hussain-salem/", icon: "linkedin" },
  { name: "GitHub", url: "https://github.com/youssefescobar", icon: "github" },
  { name: "WhatsApp", url: "https://wa.me/201115771844", icon: "whatsapp" },
  { name: "Email", url: "mailto:youssef.hussain9000@gmail.com", icon: "mail" },
];

const PROJECTS = [
  {
    slug: "munawwara-care", name: "Munawwara Care", kind: "Hajj and Umrah app", year: 2026, hue: 170,
    logo: "shots/mc-icon.png", role: "Full-stack and mobile", duration: "2026", status: "On Google Play",
    links: [{ label: "Get it on Google Play", url: "https://play.google.com/store/apps/details?id=com.munawwaracare.android&hl=en" }],
    summary: "A mobile app that keeps Hajj and Umrah groups together. Group leaders see every pilgrim on a live map, get SOS alerts the moment they're sent, and call or message anyone in the group.",
    stack: ["Flutter", "Node.js", "React", "Next.js"],
    shots: [],
    features: [
      { i: "map", t: "Live group map", d: "Every pilgrim on one map, live. Leaders never lose anyone in the crowd, and pilgrims always see where their leader is." },
      { i: "sos", t: "One-tap SOS", d: "Lost or unwell? One tap alerts the leader with your location." },
      { i: "call", t: "Calls that ring", d: "In-app voice calls that ring like a normal call, even when the app is closed." },
      { i: "chat", t: "Group and private chat", d: "Text, voice notes and photos. Translate any message with a tap." },
      { i: "qr", t: "Join by QR", d: "Scan the leader's code and you're in. No sign-up." },
      { i: "mic", t: "Live translate", d: "Speak, and the app translates on the spot." },
      { i: "moon", t: "Islamic corner", d: "Prayer times, azkar, duaa and the 99 names of Allah." },
      { i: "bus", t: "Trip logistics", d: "Hotels, buses, attendance, meeting points and group reminders." },
      { i: "chart", t: "Leader dashboards", d: "Manage groups, pilgrims and alerts from the web." },
    ],
    story: [
      { art: "spark", title: "One leader, a whole group", text: "Group leaders guide pilgrims through some of the most crowded places on earth. Until now, they did it with WhatsApp groups and phone calls." },
      { art: "phone", title: "One app, two roles", text: "Pilgrims and leaders use the same app. Your role decides what you see. Pilgrims join by scanning their leader's QR code." },
      { art: "map", title: "Everyone on one map", text: "The leader sees the whole group live. If someone sends an SOS, it shows up the moment it's sent." },
      { art: "chat", title: "Calls that ring through", text: "Voice calls work like normal phone calls, and still ring when the phone is locked." },
      { art: "code", title: "Talk to anyone", text: "Pilgrims come from everywhere, so messages and speech translate on the spot." },
    ],
    timeline: [
      { date: "Phase 1", title: "Groups and calls", text: "Groups, meeting points on the map, notifications and voice calls." },
      { date: "Phase 2", title: "Translation", text: "Messages and notifications translated for every pilgrim." },
      { date: "Phase 3", title: "Safety", text: "QR joining, live locations and one-tap SOS." },
      { date: "Phase 4", title: "Dashboards", text: "Web dashboards for leaders and admins, plus the Islamic corner and trip logistics." },
      { date: "Today", title: "On Google Play", text: "Available to pilgrim groups on Google Play." },
    ],
    metrics: [{ value: 1, suffix: " tap", label: "To send an SOS" }, { value: 2, suffix: "", label: "Roles in one app" }, { value: 5, suffix: "", label: "Ways to reach the group" }],
  },
  {
    slug: "durrah", name: "Durrah Al Munawwara", kind: "Transport website and AI chatbot", year: 2026, hue: 22,
    logo: "logos/durrah.svg", role: "Full-stack developer", duration: "2026", status: "Live",
    links: [{ label: "munawwara.com", url: "https://www.munawwara.com" }],
    summary: "A website and AI assistant for a Saudi transport company. Durra, the chatbot, answers customers around the clock, takes complaints and job applications, and hands the chat to a real person when needed.",
    stack: ["Next.js", "React", "Node.js", "GSAP"],
    shots: [
      { src: "shots/durrah-2.jpg", alt: "munawwara.com home page", kind: "desktop", url: "munawwara.com" },
      { src: "shots/durrah-4.jpg", alt: "Durra, the AI assistant", kind: "desktop", url: "munawwara.com" },
      { src: "shots/durrah-3.jpg", alt: "Quote request wizard", kind: "desktop", url: "munawwara.com/en/quote" },
      { src: "shots/durrah-m.jpg", alt: "munawwara.com on a phone", kind: "phone" },
    ],
    features: [
      { i: "bot", t: "Durra, the AI assistant", d: "Answers customers day and night from the company's own information, and never makes up a price or a schedule.", img: "shots/durrah-4.jpg" },
      { i: "form", t: "Forms inside the chat", d: "Complaints with photos and job applications with CVs, each with a reference number." },
      { i: "handoff", t: "Hands over to a person", d: "When it matters, a staff member joins the same chat and replies live." },
      { i: "bolt", t: "Never goes silent", d: "Quick topics keep answering even if the AI is offline." },
      { i: "wizard", t: "Quote in six steps", d: "Customers request a quote without picking up the phone." },
      { i: "film", t: "Cinematic story", d: "The company's story told as a scroll film." },
      { i: "chart", t: "Staff console", d: "Quotes, live chats and complaints in one app, with alerts." },
    ],
    story: [
      { art: "chat", title: "The same questions, all day", text: "Staff answered the same questions about routes, buses and prices by phone and WhatsApp, over and over." },
      { img: "shots/durrah-2.jpg", title: "A front door that works", text: "A website with the fleet, the group's companies and the company story told as a scroll film." },
      { img: "shots/durrah-4.jpg", title: "Meet Durra", text: "An AI assistant that answers from the company's own information, day and night." },
      { img: "shots/durrah-3.jpg", title: "Quotes without a phone call", text: "A six-step wizard collects who, where and when, and shows the request as you go." },
      { art: "flow", title: "A person when it matters", text: "When Durra hands over, a staff member picks up the same chat. The customer never starts again." },
    ],
    timeline: [
      { date: "Step 1", title: "Website", text: "The fleet, the companies and the scroll story." },
      { date: "Step 2", title: "Durra", text: "The AI assistant, its forms and the handover to staff." },
      { date: "Step 3", title: "Staff console", text: "One place for quotes, chats, complaints and Durra's answers." },
      { date: "Today", title: "Live", text: "Running on munawwara.com." },
    ],
    metrics: [{ value: 24, suffix: "/7", label: "Answers" }, { value: 14, suffix: "", label: "Quick topics" }, { value: 6, suffix: "", label: "Steps to a quote" }],
  },
  {
    slug: "areen-stay", name: "Areen Stay", kind: "Hotel website and AI concierge", year: 2026, hue: 42,
    logo: "logos/areen.png", role: "Full-stack developer", duration: "2026", status: "Live",
    links: [{ label: "areenstay.com", url: "https://www.areenstay.com" }],
    summary: "A website for Areen Albasateen Hotel in Jeddah. Reen, the AI concierge, answers guests, shows rooms and takes booking requests. Staff manage everything from an app on their phones.",
    stack: ["Next.js", "React", "TypeScript", "Node.js"],
    shots: [
      { src: "shots/areen-1.jpg", alt: "areenstay.com with Reen, the AI concierge", kind: "desktop", url: "areenstay.com" },
      { src: "shots/areen-2.jpg", alt: "Rooms and prices", kind: "desktop", url: "areenstay.com/en" },
      { src: "shots/areen-m.jpg", alt: "areenstay.com on a phone", kind: "phone" },
    ],
    features: [
      { i: "bot", t: "Reen, the AI concierge", d: "Answers guests instantly, using only what the hotel has taught it. When it doesn't know, it points guests to WhatsApp or the front desk.", img: "shots/areen-1.jpg" },
      { i: "bed", t: "Book from the chat", d: "Swipeable room cards, dates and guests, sent to the hotel as a booking request." },
      { i: "bell", t: "Staff get alerted", d: "When Reen is stuck, staff get a phone alert and take over." },
      { i: "phone", t: "Staff app", d: "Teach Reen, read live chats, handle bookings and update rooms." },
      { i: "layers", t: "Always up to date", d: "Prices, photos and fully booked rooms change the moment staff update them." },
    ],
    story: [
      { art: "spark", title: "A hotel without a front door online", text: "Guests had no website to check rooms or ask questions, only a phone number." },
      { img: "shots/areen-1.jpg", title: "A front door online", text: "Rooms, dining, offers and Umrah stays, with Reen ready in the corner." },
      { img: "shots/areen-2.jpg", title: "Rooms you can browse", text: "Staff manage rooms, prices and photos themselves, and the site stays up to date." },
      { art: "chat", title: "Ask Reen", text: "Reen answers instantly, shows rooms and turns a chat into a booking request." },
      { art: "phone", title: "Staff in their pocket", text: "Staff get alerted when Reen needs help and call the guest back from the bookings page." },
    ],
    timeline: [
      { date: "Step 1", title: "Website", text: "Rooms, dining, offers and Umrah stays." },
      { date: "Step 2", title: "Reen", text: "The AI concierge, room cards and booking requests." },
      { date: "Step 3", title: "Staff app", text: "Installable app for chats, bookings, rooms and alerts." },
      { date: "Today", title: "Live", text: "Running on areenstay.com." },
    ],
    metrics: [{ value: 24, suffix: "/7", label: "Concierge" }, { value: 1, suffix: " chat", label: "From question to booking" }, { value: 3, suffix: " wk", label: "From start to live" }],
  },
  {
    slug: "yosr-offscript", name: "Yosr OffScript", kind: "Film portfolio", year: 2026, hue: 320,
    logo: "logos/yosr.svg", role: "Developer", duration: "2026", status: "Live",
    links: [{ label: "yosroffscript.me", url: "https://yosroffscript.me" }],
    summary: "A cinematic portfolio for the videographer Yosr. Every film plays smoothly in any browser on any phone, including footage shot in iPhone HDR.",
    stack: ["JavaScript", "GSAP", "Vite"],
    shots: [
      { src: "shots/yosr-2.jpg", alt: "Film categories on yosroffscript.me", kind: "desktop", url: "yosroffscript.me" },
      { src: "shots/yosr-1.jpg", alt: "Intro screen", kind: "desktop", url: "yosroffscript.me" },
      { src: "shots/yosr-m.jpg", alt: "yosroffscript.me on a phone", kind: "phone" },
    ],
    features: [
      { i: "play", t: "Plays everywhere", d: "iPhone footage that many browsers can't play is converted, so every film works on every device.", img: "shots/yosr-2.jpg" },
      { i: "color", t: "True colors", d: "HDR clips are corrected so they look right on normal screens." },
      { i: "bolt", t: "Instant previews", d: "A short silent loop plays on hover, before you even click." },
      { i: "cloud", t: "Starts fast", d: "Films load from servers close to the viewer." },
      { i: "layers", t: "Vertical and wide", d: "Reels and widescreen films both show in full, never cropped." },
      { i: "film", t: "One command per film", d: "Convert, upload, done." },
    ],
    story: [
      { art: "spark", title: "Films that wouldn't play", text: "Yosr shoots on iPhone. The films looked great on a Mac and showed nothing in many other browsers." },
      { art: "flow", title: "Fixed at the source", text: "Every film is converted, color-corrected and given a short preview loop automatically." },
      { img: "shots/yosr-1.jpg", title: "An entrance", text: "The site opens on a title card, like the start of a film." },
      { img: "shots/yosr-2.jpg", title: "Four reels", text: "Fashion, behind the scenes, events and film, each playing straight away." },
    ],
    timeline: [
      { date: "Step 1", title: "Design", text: "Intro, category grid, film viewer and about panel." },
      { date: "Step 2", title: "The films", text: "19 films converted and color-corrected to play everywhere." },
      { date: "Today", title: "Live", text: "Running on yosroffscript.me." },
    ],
    metrics: [{ value: 19, suffix: "", label: "Films" }, { value: 4, suffix: "", label: "Categories" }, { value: 100, suffix: "%", label: "Of devices play them" }],
  },
  {
    slug: "dmtc", name: "DMTC Bus Movement", kind: "Bus yard operations app", year: 2026, hue: 205,
    logo: "logos/durrah.svg", role: "Developer", duration: "2026", status: "In development",
    links: [],
    summary: "An app that replaces paper at a Saudi bus yard: buses and drivers, job orders, inspections, QR gates for every exit and return, trip bonuses, violations and driver pay.",
    stack: ["Next.js", "React", "TypeScript"],
    shots: [],
    features: [
      { i: "qr", t: "QR gates", d: "Guards scan every bus out and back in with their phone camera. No clipboards, no guesswork about who left when." },
      { i: "shield", t: "No double counting", d: "A bus can't leave twice, and pay is never counted twice." },
      { i: "bus", t: "Safety built in", d: "Trips over 400 km need a second driver." },
      { i: "user", t: "Right driver, every time", d: "Fines go to whoever was actually driving." },
      { i: "money", t: "Driver pay", d: "Trips, bonuses and deductions add up to net pay." },
      { i: "history", t: "Full history", d: "Every scan and change records who, when and where." },
    ],
    story: [
      { art: "spark", title: "Clipboards at the gate", text: "Every bus in and out was written down by hand, and pay was worked out from paper." },
      { art: "sketch", title: "Designed with the yard", text: "Full requirements and 72 screen designs came before any code." },
      { art: "phone", title: "Built for the guard's phone", text: "An installable app that scans QR codes at the gate." },
    ],
    timeline: [
      { date: "Step 1", title: "Requirements", text: "Full requirements, the system flow and 72 screen designs." },
      { date: "Now", title: "Building", text: "The core rules and the first screens." },
      { date: "Next", title: "Buses and drivers", text: "The registry of buses and drivers, then the gates." },
    ],
    metrics: [{ value: 72, suffix: "", label: "Screens designed" }, { value: 400, suffix: " km", label: "Second-driver rule" }, { value: 0, suffix: "", label: "Paper forms left" }],
  },
];

// Line icons (24px, stroke) for features and socials.
const ICONS = {
  map: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14"/>',
  sos: '<circle cx="12" cy="12" r="9"/><path d="M12 7v6M12 16.5v.5"/>',
  call: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
  chat: '<path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"/><path d="M8.5 12h.01M12 12h.01M15.5 12h.01"/>',
  qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M21 14v.01M14 21h7v-4"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
  moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
  bus: '<rect x="4" y="3" width="16" height="15" rx="3"/><path d="M4 11h16M8 21v-3M16 21v-3M8 15h.01M16 15h.01"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  bot: '<rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 8V4M9 14h.01M15 14h.01M2 13v3M22 13v3"/>',
  form: '<path d="M7 3h8l4 4v14H7z"/><path d="M15 3v4h4M10 12h6M10 16h6"/>',
  handoff: '<circle cx="8" cy="8" r="3"/><circle cx="17" cy="10" r="3"/><path d="M2 20a6 6 0 0 1 12 0M12 20a5 5 0 0 1 10 0"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  wizard: '<path d="M4 6h16M4 12h10M4 18h6"/><circle cx="19" cy="17" r="3"/>',
  film: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/>',
  bed: '<path d="M3 18V6M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5"/><circle cx="7" cy="11" r="2"/>',
  bell: '<path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4zM10 21h4"/>',
  phone: '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  play: '<circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4z"/>',
  color: '<circle cx="12" cy="12" r="9"/><path d="M12 3v18M12 3a9 9 0 0 1 0 18" fill="currentColor"/>',
  cloud: '<path d="M7 18a5 5 0 0 1-.5-10A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z"/>',
  shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  money: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 10v4M18 10v4"/>',
  history: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
};
// Brand marks (filled, 24px).
const BRANDS = {
  linkedin: '<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>',
  github: '<path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57l-.02-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3"/>',
  whatsapp: '<path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88a9.82 9.82 0 0 1 9.88 9.89c0 5.45-4.43 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9a11.82 11.82 0 0 0-3.48-8.4"/>',
};
const icon = n => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n] || ICONS.bolt}</svg>`;
const brand = n => BRANDS[n] ? `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${BRANDS[n]}</svg>` : icon(n);

// Fill every [data-socials] slot with icon links.
document.querySelectorAll("[data-socials]").forEach(el => {
  el.innerHTML = SOCIALS.map(s => `<a class="social" href="${s.url}" ${s.url.startsWith("http") ? 'target="_blank" rel="noopener"' : ""} aria-label="${s.name}" title="${s.name}" data-magnet>${brand(s.icon)}</a>`).join("");
});

// Abstract scene art for storyboard frames. `.d` paths draw in, `.f` shapes fade in.
function art(kind, h) {
  const c = `hsl(${h} 95% 68%)`, c2 = `hsl(${h + 60} 95% 72%)`, dim = `hsl(${h} 40% 30%)`;
  const s = `fill="none" stroke="${c}" stroke-width="1.5" pathLength="1" class="d"`;
  const scenes = {
    spark: `${Array.from({ length: 28 }, (_, i) => `<circle class="f" cx="${(i * 97) % 300 + 10}" cy="${(i * 53) % 180 + 10}" r="${1 + (i % 3)}" fill="${dim}"/>`).join("")}
      <circle cx="160" cy="100" r="34" ${s}/><circle cx="160" cy="100" r="8" fill="${c2}" class="f"/><path d="M160 40v18M160 142v18M100 100h18M202 100h18" ${s}/>`,
    sketch: `<rect x="30" y="30" width="120" height="140" rx="6" ${s} stroke-dasharray="1"/><rect x="170" y="30" width="120" height="64" rx="6" ${s}/><rect x="170" y="106" width="120" height="64" rx="6" ${s}/>
      <path d="M46 60h80M46 76h60M46 92h70" ${s}/><circle cx="230" cy="62" r="14" fill="${c2}" class="f" opacity=".8"/>`,
    phone: `<rect x="115" y="14" width="90" height="172" rx="16" ${s}/><path d="M145 26h30" ${s}/>
      <rect class="f" x="127" y="44" width="66" height="26" rx="5" fill="${c}" opacity=".85"/><rect class="f" x="127" y="78" width="66" height="14" rx="4" fill="${dim}"/><rect class="f" x="127" y="98" width="46" height="14" rx="4" fill="${dim}"/><rect class="f" x="127" y="150" width="66" height="20" rx="10" fill="${c2}"/>`,
    code: `${[[30, 120], [50, 160], [50, 90], [70, 140], [70, 60], [50, 180], [30, 70], [30, 110]].map(([x, w], i) => `<path d="M${x} ${34 + i * 19}h${w}" ${s} stroke-width="6" stroke-linecap="round" stroke="${i % 3 ? c : c2}"/>`).join("")}
      <path d="M250 70l-20 30 20 30M270 70l20 30-20 30" ${s}/>`,
    chat: `<path d="M30 40h150a12 12 0 0 1 12 12v40a12 12 0 0 1-12 12H70l-20 18v-18H42a12 12 0 0 1-12-12V52a12 12 0 0 1 12-12z" ${s}/>
      <path d="M290 100H140a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h110l20 18v-18h8a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12z" ${s} stroke="${c2}"/>
      <path class="f" d="M52 64h100M52 80h70" stroke="${dim}" stroke-width="6" stroke-linecap="round"/><path class="f" d="M150 124h110M150 140h80" stroke="${dim}" stroke-width="6" stroke-linecap="round"/>`,
    chart: `<path d="M30 170h260M30 170V30" ${s}/>${[60, 95, 75, 125, 110, 150].map((v, i) => `<rect class="f" x="${52 + i * 38}" y="${170 - v}" width="22" height="${v}" rx="3" fill="${i === 5 ? c2 : c}" opacity="${0.35 + i * 0.12}" style="transition-delay:${0.4 + i * 0.1}s"/>`).join("")}
      <path d="M63 105L101 70L139 90L177 42L215 58L253 18" ${s} stroke="${c2}"/>`,
    flow: `${[[50, 100], [130, 50], [130, 150], [210, 100], [280, 100]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="16" ${s} stroke="${i === 4 ? c2 : c}"/><circle class="f" cx="${x}" cy="${y}" r="5" fill="${i === 4 ? c2 : c}"/>`).join("")}
      <path d="M64 92l52-34M64 108l52 34M144 58l52 34M144 142l52-34M226 100h38" ${s}/>`,
    map: `${[40, 80, 120, 160].map(y => `<path class="f" d="M0 ${y}h320" stroke="${dim}" stroke-width=".6"/>`).join("")}${[64, 128, 192, 256].map(x => `<path class="f" d="M${x} 0v200" stroke="${dim}" stroke-width=".6"/>`).join("")}
      <path d="M40 160C90 150 80 90 140 96S210 60 270 44" ${s} stroke-dasharray="1"/>
      ${[[70, 130], [112, 104], [150, 118], [196, 82], [228, 120], [96, 62]].map(([x, y]) => `<circle class="f" cx="${x}" cy="${y}" r="4" fill="${c}"/>`).join("")}
      <circle cx="270" cy="44" r="16" ${s} stroke="${c2}"/><circle class="f" cx="270" cy="44" r="6" fill="${c2}"/>`,
    orbit: `<ellipse cx="160" cy="110" rx="130" ry="40" ${s} transform="rotate(-12 160 110)"/><ellipse cx="160" cy="110" rx="90" ry="26" ${s} stroke="${dim}" transform="rotate(-12 160 110)"/>
      <circle cx="160" cy="110" r="30" fill="${c}" class="f" opacity=".9"/><circle cx="160" cy="110" r="30" fill="url(#g${h})" class="f"/><circle cx="282" cy="72" r="7" fill="${c2}" class="f"/>
      <defs><radialGradient id="g${h}" cx=".3" cy=".3"><stop offset="0" stop-color="#fff" stop-opacity=".7"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>`,
  };
  return `<svg class="art" viewBox="0 0 320 200" aria-hidden="true">${scenes[kind] || scenes.spark}</svg>`;
}

// Cursor ring, magnetic buttons, scroll progress bar. Shared by both pages.
(() => {
  const fine = matchMedia("(pointer: fine)").matches;
  const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const bar = document.querySelector(".progress");
  if (bar) addEventListener("scroll", () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  }, { passive: true });
  if (!fine || calm) return;

  const dot = Object.assign(document.createElement("div"), { className: "cursor" });
  const ring = Object.assign(document.createElement("div"), { className: "cursor-ring" });
  document.body.append(dot, ring);
  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
  addEventListener("pointermove", e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px,${my}px)`;
    ring.classList.toggle("hot", !!e.target.closest("a,button"));
  });
  (function loop() {
    rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    requestAnimationFrame(loop);
  })();

  document.querySelectorAll("[data-magnet]").forEach(el => {
    el.style.transition = "transform .4s cubic-bezier(.2,.8,.2,1)";
    el.addEventListener("pointermove", e => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.3}px,${(e.clientY - r.top - r.height / 2) * 0.4}px)`;
    });
    el.addEventListener("pointerleave", () => (el.style.transform = ""));
  });
})();
