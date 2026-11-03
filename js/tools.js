/* CV Builder landing page: menu, scroll reveal, back to top, footer year */
const navLinks = document.getElementById("navLinks");
const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () => menuBtn.setAttribute("aria-expanded", navLinks.classList.toggle("open")));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { navLinks.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }));

const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => { toTop.style.display = window.scrollY > 600 ? "block" : "none"; }, { passive: true });
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

document.getElementById("year").textContent = new Date().getFullYear();
