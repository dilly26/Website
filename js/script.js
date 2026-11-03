/* ============ EDIT: YOUR LINKS ============
   Icons in "Find me online" appear only for links you fill in, so the page never shows a dead link.
   Keep a link as "" to hide its icon. */
const LINKS = {
  github: "https://github.com/dilly26",   // dilly26 (Dilip Mahato)
  scholar: "",        // e.g. "https://scholar.google.com/citations?user=XXXXXXXX"
  researchgate: "",   // e.g. "https://www.researchgate.net/profile/Your-Name"
  medium: "",         // e.g. "https://medium.com/@yourname"
  whatsapp: "https://wa.me/9779844457726",   // opens a WhatsApp chat (this number is public)
  phone: ""           // e.g. "tel:+91XXXXXXXXXX"          (makes your number public)
};

/* ============ EDIT: BLOG POSTS ============
   Leave empty and the Blog section stays hidden. Example entry:
   { title: "My first post", date: "12 Jan 2027", summary: "One or two lines.", url: "https://..." } */
const BLOG_POSTS = [];

/* ============ EDIT: CONTACT FORM SETUP ============
   1. Create a free account at https://formspree.io and make a new form.
   2. Paste the form ID (e.g. "xyzabcde") below. Messages then arrive in your inbox.
   Until then the form only shows a short notice. No email address appears on this page. */
const FORMSPREE_ID = "YOUR_FORM_ID";

/* ---------- Hero: letter-by-letter name ---------- */
(function () {
  const h1 = document.getElementById("heroName");
  const text = h1.textContent.trim();
  h1.textContent = "";
  let i = 0;
  text.split(" ").forEach(w => {
    const word = document.createElement("span");
    word.className = "word";
    word.setAttribute("aria-hidden", "true");
    [...w].forEach(c => {
      const ch = document.createElement("span");
      ch.className = "ch";
      ch.style.setProperty("--i", i++);
      ch.textContent = c;
      word.appendChild(ch);
    });
    h1.appendChild(word);
    i++;
  });
})();

/* ---------- Hero: typed focus line ---------- */
(function () {
  const el = document.getElementById("typed");
  const words = ["pedestrian safety", "road-user behavior", "safer urban mobility"];
  let w = 0, c = 0, del = false;
  function tick() {
    const word = words[w];
    el.textContent = word.slice(0, c);
    if (!del && c < word.length) { c++; setTimeout(tick, 70); }
    else if (!del) { del = true; setTimeout(tick, 1500); }
    else if (c > 0) { c--; setTimeout(tick, 35); }
    else { del = false; w = (w + 1) % words.length; setTimeout(tick, 300); }
  }
  setTimeout(tick, 2300);
})();

/* ---------- Connect icons (only links that are set) ---------- */
(function () {
  const wrap = document.getElementById("connectIcons");
  const defs = [
    ["whatsapp", "WhatsApp", "ico-whatsapp"], ["phone", "Phone", "ico-phone"],
    ["github", "GitHub", "ico-github"], ["scholar", "Scholar", "ico-scholar"],
    ["researchgate", "ResearchGate", "ico-rg"], ["medium", "Medium", "ico-medium"]
  ];
  const title = { github: "dilly26 (Dilip Mahato) on GitHub", whatsapp: "Chat on WhatsApp" };
  defs.forEach(([key, label, icon]) => {
    const url = (LINKS[key] || "").trim();
    if (!url) return;
    const a = document.createElement("a");
    a.className = "connect-icon"; a.href = url; a.setAttribute("aria-label", label); if (title[key]) a.title = title[key];
    if (/^https?:/i.test(url)) { a.target = "_blank"; a.rel = "noopener"; }
    a.innerHTML = '<span class="ic brand"><svg aria-hidden="true"><use href="#' + icon + '"/></svg></span><em>' + label + '</em>';
    wrap.appendChild(a);
  });
})();

/* ---------- Blog (hidden until BLOG_POSTS has entries) ---------- */
(function () {
  if (!BLOG_POSTS.length) return;
  const list = document.getElementById("blogList");
  BLOG_POSTS.forEach(p => {
    const art = document.createElement("article");
    art.className = "card";
    const d = document.createElement("span"); d.className = "date"; d.textContent = p.date || "";
    const h = document.createElement("h3"); h.textContent = p.title; h.style.marginTop = "6px";
    const s = document.createElement("p"); s.textContent = p.summary || "";
    art.append(d, h, s);
    if (p.url) { const a = document.createElement("a"); a.className = "read-more"; a.href = p.url; a.target = "_blank"; a.rel = "noopener"; a.textContent = "Read more →"; art.appendChild(a); }
    list.appendChild(art);
  });
  document.getElementById("blog").hidden = false;
  document.getElementById("navBlog").hidden = false;
})();

/* ---------- Quotes: split into words for the word-by-word reveal ---------- */
document.querySelectorAll(".words p").forEach(p => {
  const words = p.textContent.trim().split(/\s+/);
  p.setAttribute("aria-label", p.textContent.trim());
  p.textContent = "";
  words.forEach((w, i) => {
    const s = document.createElement("span");
    s.className = "w"; s.style.setProperty("--d", i); s.setAttribute("aria-hidden", "true");
    s.textContent = w;
    p.append(s, i < words.length - 1 ? " " : "");
  });
});

/* ---------- Photo motion: scroll parallax + pointer tilt (skipped when reduced motion is on) ---------- */
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const layers = [...document.querySelectorAll("[data-px]")];
  let ticking = false;
  function update() {
    ticking = false;
    const vh = window.innerHeight;
    layers.forEach(el => {
      const r = el.parentElement.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) return;
      const p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2)));
      el.style.setProperty("--py", (p * -parseFloat(el.dataset.px)).toFixed(1) + "px");
    });
  }
  function request() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  if (layers.length) { window.addEventListener("scroll", request, { passive: true }); window.addEventListener("resize", request); update(); }

  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.querySelectorAll(".tilt").forEach(el => {
      el.addEventListener("pointermove", e => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--ry", (((e.clientX - r.left) / r.width - 0.5) * 10).toFixed(1) + "deg");
        el.style.setProperty("--rx", ((0.5 - (e.clientY - r.top) / r.height) * 8).toFixed(1) + "deg");
      });
      el.addEventListener("pointerleave", () => { el.style.removeProperty("--rx"); el.style.removeProperty("--ry"); });
    });
  }
})();

/* ---------- Mobile menu ---------- */
const navLinks = document.getElementById("navLinks");
const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () => menuBtn.setAttribute("aria-expanded", navLinks.classList.toggle("open")));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { navLinks.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }));

/* ---------- Scroll reveal (sections, quotes, photos) ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("show");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.18 });
document.querySelectorAll(".reveal, .words, .rise").forEach(el => io.observe(el));
// a fully clipped element never counts as visible, so the mirror photo is revealed when its section scrolls in
const mio = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.querySelector(".mirror").classList.add("show"); mio.unobserve(e.target); } });
}, { threshold: 0.25 });
document.querySelectorAll(".mirror-sec").forEach(el => mio.observe(el));

/* ---------- Active nav link + back to top ---------- */
const sections = [...document.querySelectorAll("section[id]")].filter(s => !s.hidden);
const links = [...navLinks.querySelectorAll("a:not(.nav-cta)")];
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  const y = window.scrollY + 120;
  let current = "";
  sections.forEach(s => { if (y >= s.offsetTop) current = s.id; });
  links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
  toTop.style.display = window.scrollY > 600 ? "block" : "none";
});
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ---------- Contact form ---------- */
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");
const sendBtn = document.getElementById("sendBtn");
function setStatus(msg, ok) { statusEl.textContent = msg; statusEl.className = ok ? "ok" : "err"; }

form.addEventListener("submit", async e => {
  e.preventDefault();
  const data = new FormData(form);
  if (data.get("_gotcha")) return;
  const name = (data.get("name") || "").trim();
  const email = (data.get("email") || "").trim();
  const message = (data.get("message") || "").trim();
  if (!name || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    setStatus("Please enter your name, a valid email and a message.", false);
    return;
  }
  if (FORMSPREE_ID === "YOUR_FORM_ID") {
    // No form service connected yet: hand the message to WhatsApp instead
    const wa = (LINKS.whatsapp || "").trim();
    if (!wa) { setStatus("Please reach me on LinkedIn for now.", false); return; }
    const text = "Hello Dilip, I'm " + name + " (" + email + ").\nTopic: " + (data.get("topic") || "") + "\n\n" + message;
    window.open(wa + "?text=" + encodeURIComponent(text), "_blank", "noopener");
    setStatus("WhatsApp is opening with your message. Press send there to reach me.", true);
    form.reset();
    return;
  }
  sendBtn.disabled = true; sendBtn.textContent = "Sending...";
  try {
    const res = await fetch("https://formspree.io/f/" + FORMSPREE_ID, { method: "POST", body: data, headers: { Accept: "application/json" } });
    if (res.ok) { setStatus("Thanks! Your message has been sent.", true); form.reset(); }
    else { setStatus("Something went wrong. Please try again or reach me on LinkedIn.", false); }
  } catch (err) {
    setStatus("Network error. Please try again or reach me on LinkedIn.", false);
  }
  sendBtn.disabled = false; sendBtn.textContent = "Send message";
});

document.getElementById("year").textContent = new Date().getFullYear();
