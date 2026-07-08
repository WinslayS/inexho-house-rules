const LANGUAGE_META = [
  ["en", "🇬🇧 English"],
  ["pl", "🇵🇱 Polski"],
  ["ro", "🇷🇴 Română"],
  ["uk", "🇺🇦 Українська"],
  ["lt", "🇱🇹 Lietuvių"],
  ["sk", "🇸🇰 Slovenčina"],
  ["bg", "🇧🇬 Български"],
  ["hu", "🇭🇺 Magyar"],
];
const ICONS = ["🚭", "🔇", "🚫", "🤝", "🧹", "🛠️", "🔥", "🚗"];
const WASTE_ICONS = ["♻️", "🌿", "📄", "🗑️"];
const FINE_ICONS = ["🚭", "💳", "💳", "🗑️", "🧽", "🔑"];
const EMERGENCY_ICONS = ["⚠️", "➕", "🔥"];

function t() {
  return TRANSLATIONS[currentLang] || TRANSLATIONS.en;
}
let currentLang = localStorage.getItem("inexhoLang") || "en";
if (!TRANSLATIONS[currentLang]) currentLang = "en";

function setText() {
  const data = t();
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (data[key]) el.textContent = data[key];
  });
}
function renderLanguages() {
  const wrap = document.getElementById("languageButtons");
  wrap.innerHTML = "";
  LANGUAGE_META.forEach(([code, label]) => {
    const btn = document.createElement("button");
    btn.className = "lang-btn" + (code === currentLang ? " active" : "");
    btn.type = "button";
    btn.textContent = label;
    btn.onclick = () => {
      currentLang = code;
      localStorage.setItem("inexhoLang", code);
      renderAll();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    wrap.appendChild(btn);
  });
}
function renderQuickRules() {
  const wrap = document.getElementById("quickRules");
  wrap.innerHTML = "";
  t().quickRules.forEach((item, i) => {
    wrap.insertAdjacentHTML(
      "beforeend",
      `<article class="rule-card"><div class="icon">${ICONS[i] || "✓"}</div><h3>${item.title}</h3><p>${item.text}</p></article>`,
    );
  });
}
function renderGroups() {
  const wrap = document.getElementById("ruleGroups");
  wrap.innerHTML = "";
  t().groups.forEach((group) => {
    wrap.insertAdjacentHTML(
      "beforeend",
      `<article class="group-card"><h3>${group.title}</h3><ul>${group.items.map((x) => `<li>${x}</li>`).join("")}</ul></article>`,
    );
  });
}
function renderWaste() {
  const wrap = document.getElementById("wasteItems");
  wrap.innerHTML = "";
  t().waste.forEach((item, i) => {
    wrap.insertAdjacentHTML(
      "beforeend",
      `<article class="waste-card"><div class="icon">${WASTE_ICONS[i]}</div><h3>${item.title}</h3><p>${item.text}</p></article>`,
    );
  });
}
function renderFines() {
  const wrap = document.getElementById("fineItems");
  wrap.innerHTML = "";
  t().fines.forEach((item, i) => {
    wrap.insertAdjacentHTML(
      "beforeend",
      `<article class="fine-card"><div class="icon">${FINE_ICONS[i]}</div><h3>${item.title}</h3><p>${item.text}</p><strong>${item.penalty}</strong></article>`,
    );
  });
}
function renderEmergency() {
  const wrap = document.getElementById("emergencyItems");
  wrap.innerHTML = "";
  t().emergency.forEach((item, i) => {
    wrap.insertAdjacentHTML(
      "beforeend",
      `<article class="emergency-card"><div class="icon">${EMERGENCY_ICONS[i]}</div><h3>${item.title}</h3><ul>${item.items.map((x) => `<li>${x}</li>`).join("")}</ul></article>`,
    );
  });
}
function setupReveal() {
  const items = document.querySelectorAll(".notice, .section, .footer");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
  );
  items.forEach((el) => observer.observe(el));
}
function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(value);
  }
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  return Promise.resolve();
}
function showCopyToast() {
  const toast = document.getElementById("copyToast");
  if (!toast) return;
  toast.textContent = t().copiedText || "Copied";
  toast.classList.add("show");
  clearTimeout(showCopyToast.timer);
  showCopyToast.timer = setTimeout(() => toast.classList.remove("show"), 1400);
}
function setupCopyButtons() {
  document.querySelectorAll(".copy-contact").forEach((btn) => {
    if (btn.dataset.copyReady) return;
    btn.dataset.copyReady = "1";
    btn.addEventListener("click", () => {
      copyText(btn.dataset.copy || "").then(showCopyToast);
    });
  });
}
function renderAll() {
  setText();
  renderLanguages();
  renderQuickRules();
  renderGroups();
  renderWaste();
  renderFines();
  renderEmergency();
  setupReveal();
  setupCopyButtons();
}
document.addEventListener("DOMContentLoaded", renderAll);

window.addEventListener("beforeprint", () => {
  document.body.classList.add("print-rules-mode");

  document.querySelectorAll("*").forEach((el) => {
    el.style.animation = "none";
    el.style.transition = "none";
    el.style.opacity = "1";
    el.style.transform = "none";
    el.style.visibility = "visible";
  });
  document
    .querySelectorAll(".toast, .copy-toast, #toast, [data-toast]")
    .forEach((el) => {
      el.classList.remove("show", "visible", "active");
      el.style.display = "none";
    });
});

window.addEventListener("afterprint", () => {
  document.body.classList.remove("print-rules-mode");

  document.querySelectorAll("*").forEach((el) => {
    el.style.animation = "";
    el.style.transition = "";
    el.style.opacity = "";
    el.style.transform = "";
    el.style.visibility = "";
  });
});
