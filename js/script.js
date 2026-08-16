/* ===================================================================
   STAR LOOKS UNISEX SALON — script.js
   =================================================================== */

/* =========================================================
   1. SALON CONFIGURATION
   -----------------------------------------------------------
   This is the ONLY section you need to edit to update the
   salon's real business details. Replace every UPDATE_* value.
========================================================= */
const salonConfig = {
  name: "Star Looks Unisex Salon",
  phone: "UPDATE_PHONE",          // e.g. "+919876543210"
  whatsapp: "UPDATE_WHATSAPP",    // digits only, with country code, e.g. "919876543210"
  address: "UPDATE_ADDRESS",
  maps: "UPDATE_GOOGLE_MAPS",     // full Google Maps share link
  instagram: "UPDATE_INSTAGRAM",  // full profile URL
  facebook: "UPDATE_FACEBOOK",    // full page URL
  openingHours: "UPDATE_OPENING_HOURS"
};

/* =========================================================
   2. CONTENT CONFIGURATION
   -----------------------------------------------------------
   No service/offer material was supplied with this build, so
   these are placeholders. Replace name/description/price
   values with the salon's real information. Prices left as
   "PRICE TO BE UPDATED" must not be invented.
========================================================= */
const services = [
  { number: "01", name: "Hair", description: "Cut, style, colour and treatments." },
  { number: "02", name: "Beauty", description: "Skin, waxing and beauty essentials." },
  { number: "03", name: "Grooming", description: "Grooming for every look, every day." }
];

const offers = [
  {
    name: "Honey Waxing",
    description: "Full Arms + Underarms + Full Legs",
    originalPrice: "PRICE TO BE UPDATED",
    offerPrice: "PRICE TO BE UPDATED"
  },
  {
    name: "Hair Spa",
    description: "Deep conditioning hair spa treatment",
    originalPrice: "PRICE TO BE UPDATED",
    offerPrice: "PRICE TO BE UPDATED"
  },
  {
    name: "Grooming Package",
    description: "Haircut + Beard + Facial",
    originalPrice: "PRICE TO BE UPDATED",
    offerPrice: "PRICE TO BE UPDATED"
  }
];

const galleryImages = [
  { src: "assets/images/gallery-01.webp", alt: "Star Looks Unisex Salon interior", className: "gallery-item--a" },
  { src: "assets/images/gallery-02.webp", alt: "Hair styling at Star Looks", className: "gallery-item--b" },
  { src: "assets/images/gallery-03.webp", alt: "Beauty treatment station", className: "gallery-item--c" },
  { src: "assets/images/gallery-04.webp", alt: "Grooming chair setup", className: "gallery-item--d" },
  { src: "assets/images/gallery-05.webp", alt: "Salon reception area", className: "gallery-item--e" }
];

/* =========================================================
   3. HELPERS
========================================================= */
function buildWhatsappUrl(message) {
  const digits = salonConfig.whatsapp.replace(/[^0-9]/g, "");
  const base = digits ? `https://wa.me/${digits}` : "#";
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

function buildTelUrl() {
  return salonConfig.phone && salonConfig.phone !== "UPDATE_PHONE"
    ? `tel:${salonConfig.phone.replace(/[^0-9+]/g, "")}`
    : "#";
}

/* =========================================================
   4. RENDER CONTENT FROM CONFIG
========================================================= */
function renderServices() {
  const list = document.getElementById("serviceList");
  if (!list) return;
  list.innerHTML = services
    .map(
      (s) => `
      <li class="service-item">
        <span class="service-number">${s.number}</span>
        <div class="service-body">
          <h3 class="service-name">${s.name}</h3>
          <p class="service-desc">${s.description}</p>
        </div>
        <span class="service-arrow" aria-hidden="true">&rarr;</span>
      </li>`
    )
    .join("");
}

function renderOffers() {
  const grid = document.getElementById("offerGrid");
  if (!grid) return;
  grid.innerHTML = offers
    .map(
      (o) => `
      <div class="offer-card">
        <p class="offer-label">Special Offer</p>
        <h3 class="offer-name">${o.name}</h3>
        <p class="offer-desc">${o.description}</p>
        <div class="offer-prices">
          <span class="offer-price-original">${o.originalPrice}</span>
          <span class="offer-price-current">${o.offerPrice}</span>
        </div>
        <a href="${buildWhatsappUrl("Hi! I'd like to book: " + o.name)}" target="_blank" rel="noopener" class="offer-cta">
          Book Now <span class="offer-cta-arrow" aria-hidden="true">&rarr;</span>
        </a>
      </div>`
    )
    .join("");
}

function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;
  grid.innerHTML = galleryImages
    .map(
      (g, i) => `
      <div class="gallery-item ${g.className || ""}" data-index="${i}">
        <img src="${g.src}" alt="${g.alt}" loading="lazy" decoding="async" width="800" height="800">
        <span class="gallery-view" aria-hidden="true">View &nearr;</span>
      </div>`
    )
    .join("");
}

/* =========================================================
   5. APPLY CONFIG TO LINKS
========================================================= */
function applyConfigToLinks() {
  const whatsappLinks = [
    document.getElementById("whatsappCta"),
    document.getElementById("footerWhatsapp"),
    document.getElementById("floatingWhatsapp")
  ];
  whatsappLinks.forEach((el) => {
    if (el) el.href = buildWhatsappUrl("Hi! I'd like to book an appointment at Star Looks Unisex Salon.");
  });

  const callLinks = [document.getElementById("callCta"), document.getElementById("footerPhone")];
  callLinks.forEach((el) => {
    if (el) {
      el.href = buildTelUrl();
      if (el.id === "footerPhone") el.textContent = salonConfig.phone;
    }
  });

  const address = document.getElementById("footerAddress");
  if (address) address.textContent = salonConfig.address;

  const hours = document.getElementById("footerHours");
  if (hours) hours.textContent = salonConfig.openingHours;

  const directions = document.getElementById("footerDirections");
  if (directions) directions.href = salonConfig.maps !== "UPDATE_GOOGLE_MAPS" ? salonConfig.maps : "#";

  const instagram = document.getElementById("footerInstagram");
  if (instagram) instagram.href = salonConfig.instagram !== "UPDATE_INSTAGRAM" ? salonConfig.instagram : "#";

  const facebook = document.getElementById("footerFacebook");
  if (facebook) facebook.href = salonConfig.facebook !== "UPDATE_FACEBOOK" ? salonConfig.facebook : "#";

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

/* =========================================================
   6. STICKY HEADER
========================================================= */
function initStickyHeader() {
  const header = document.getElementById("siteHeader");
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* =========================================================
   7. MOBILE MENU
========================================================= */
function initMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const closeBtn = document.getElementById("menuClose");
  const menu = document.getElementById("mobileMenu");
  if (!toggle || !menu || !closeBtn) return;

  const openMenu = () => {
    menu.hidden = false;
    requestAnimationFrame(() => menu.setAttribute("data-open", "true"));
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll");
  };

  const closeMenu = () => {
    menu.setAttribute("data-open", "false");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
    setTimeout(() => {
      if (menu.getAttribute("data-open") === "false") menu.hidden = true;
    }, 320);
  };

  toggle.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);

  menu.querySelectorAll(".mobile-nav-link, .mobile-menu-cta").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.getAttribute("data-open") === "true") closeMenu();
  });
}

/* =========================================================
   8. REVEAL ANIMATIONS
========================================================= */
function initRevealAnimations() {
  const targets = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
  if (!targets.length) return;

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
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
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  targets.forEach((el) => observer.observe(el));
}

/* =========================================================
   9. SCISSOR ANIMATION (runs once)
========================================================= */
function initScissorAnimation() {
  const icon = document.getElementById("scissorIcon");
  if (!icon || !("IntersectionObserver" in window)) {
    if (icon) icon.classList.add("is-active");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          icon.classList.add("is-active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(icon);
}

/* =========================================================
   10. INIT
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderOffers();
  renderGallery();
  applyConfigToLinks();
  initStickyHeader();
  initMobileMenu();
  initRevealAnimations();
  initScissorAnimation();
});
