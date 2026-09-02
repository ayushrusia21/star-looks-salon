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
  phone: "+91 92920 02244",
  whatsapp: "919292002244",       // digits only, with country code
  address: "3rd Floor, HIG-A-30, opp. DLF Road, above Apollo Pharmacy, APHB Colony, Housing Board Colony, Gachibowli, Hyderabad, Telangana 500032",
  maps: "https://maps.app.goo.gl/WUWhNJvNdNTcUv1aA",
  instagram: "https://www.instagram.com/starlooks_unisex_salon_dlf?igsh=MTk1aHgyMTBzb24wdQ==",
  nearbuy: "https://www.nearbuy.com/hyderabad/star-looks-beauty-salon-gachibowli?merchantId=344385#deals",
  openingHours: "7:00 AM – 10:30 PM, Everyday"
};

/* =========================================================
   2. CONTENT CONFIGURATION
   -----------------------------------------------------------
   No service/offer material was supplied with this build, so
   these are placeholders. Replace name/description/price
   values with the salon's real information. Prices left as
   "PRICE TO BE UPDATED" must not be invented.
========================================================= */
const serviceCategories = [
  // ===================== WOMEN'S SERVICES =====================
  {
    gender: "women",
    name: "Threading",
    items: ["Eyebrows", "Forehead", "Chin", "Upper Lips", "Full Face Threading"]
  },
  {
    gender: "women",
    name: "Waxing - Normal (Silk)",
    items: ["Upper Lips Waxing", "Full Face Waxing", "Full Hand Waxing", "Half Leg Waxing", "Full Leg Waxing", "Full Body Waxing", "Stomach Waxing", "Back Waxing", "Under Arms + Chin Wax", "Chin Wax"]
  },
  {
    gender: "women",
    name: "Waxing - Rica",
    items: ["Hand Wax", "Under Arms Wax", "Half Legs Wax", "Full Legs Wax", "Back Wax", "Stomach Wax", "Upper Lip Wax", "Chin Wax", "Full Body Waxing", "Rica Full Face", "Side Locks Waxing"]
  },
  {
    gender: "women",
    name: "Waxing - Chocolate",
    items: ["Upper Lips", "Full Face", "Under Arms", "Full Hand Waxing", "Half Leg Waxing", "Full Leg Waxing", "Full Body Waxing", "Stomach Waxing", "Back Waxing", "Chin Waxing"]
  },
  {
    gender: "women",
    name: "Bleaching",
    items: ["Upper Lips Bleach", "Full Face Bleach", "Face Bleach", "Hands Bleach", "Feet Bleach"]
  },
  {
    gender: "women",
    name: "Facials",
    items: ["Fruit Facial", "Fresh Fruit Facial", "Banana Facial", "Herbal Facial", "Pearl Facial", "Silver Facial", "Diamond Facial", "Gold Facial", "Chocolate Facial", "Glow Facial", "Moisturize Fruit Facial", "VLCC Insta Glow Facial"]
  },
  {
    gender: "women",
    name: "Tan Pack",
    items: ["Full Hand Tan", "Full Face Tan", "Feet Tan", "Back Tan", "Full Body Tan", "Hand Tan"]
  },
  {
    gender: "women",
    name: "Clean Up",
    items: ["Fruit Cleanup", "Silver Cleanup", "Pearl Cleanup", "Gold Cleanup", "Diamond Cleanup", "Herbal Cleanup", "Moisturize Clean Up", "VLCC Insta Clean Up"]
  },
  {
    gender: "women",
    name: "Hair Cut & Styling",
    items: ["Straight Hair Cut", "U Cut", "Advance Hair Cut", "Advance Hair Cut & Hair Wash", "Straightening Permanent", "One Highlighting", "Baby Hair Cut", "Hair Setting Curls", "Blow Dry Straightening", "Temporary Straightening", "Heavy Curly"]
  },
  {
    gender: "women",
    name: "Hair Colour",
    items: ["Matrix Hair Colour Roots Touch Up", "Loreal Hair Colour Roots Touch Up", "Matrix Full Colour", "Loreal Full Colour", "Henna Full Colour", "Henna Black Full"]
  },
  {
    gender: "women",
    name: "Hair Spa",
    items: ["Matrix Hair Spa", "Loreal Hair Spa", "Hair Setting"]
  },
  {
    gender: "women",
    name: "Manicure",
    items: ["Regular Manicure", "Aroma Manicure", "Spa Manicure"]
  },
  {
    gender: "women",
    name: "Pedicure",
    items: ["Regular Pedicure", "Tan Pedicure", "Spa Pedicure", "Crystal Pedicure", "Rose Pedicure"]
  },
  {
    gender: "women",
    name: "Head Massage",
    items: ["Head Massage - 10 Min", "Head Massage - 20 Min", "Hair Wash"]
  },
  {
    gender: "women",
    name: "Body Massage",
    items: ["Swedish Massage", "Back Massage", "Body Scrub Massage", "Nail Polish", "Cream Massage"]
  },
  {
    gender: "women",
    name: "Bridal Makeup",
    items: ["Bridal Make Up", "Light Make Up", "Eyebrows Make Up"]
  },
  {
    gender: "women",
    name: "Bridal Package",
    items: ["Manicure", "Pedicure", "Eyebrows", "Hand Waxing", "Leg Waxing", "Face Tan Pack", "Under Arms", "Gold Facial", "Hand Tan Pack"]
  },

  // ===================== MEN'S SERVICES =====================
  {
    gender: "men",
    name: "Hair Services",
    items: ["Hair Cut", "Hair Wash", "Hair Wash & Conditioning", "Boy Hair Cut", "Side Locks", "Shaving", "Trimming", "Style Trimming and Shave"]
  },
  {
    gender: "men",
    name: "Hair Colours",
    items: ["Global Colour", "Highlighting", "Fashion Colour", "Loreal Colour", "Matrix Colour", "Henna"]
  },
  {
    gender: "men",
    name: "Rebonding & Treatments",
    items: ["Rebonding", "Straightening", "Smoothening & Relaxing", "Dandruff Treatment", "Hair Spa"]
  },
  {
    gender: "men",
    name: "Bleaching",
    items: ["Anti Tan Pack", "Anti Bleaching", "Gold Bleach", "Fruit Bleach", "Herbal Bleach", "Bleach", "Full Hands Tan", "Full Body Bleach", "Full Body Anti Bleach"]
  },
  {
    gender: "men",
    name: "Facials",
    items: ["Clean Up", "Fruit Facial", "Banana Facial", "Pearl Facial", "Silver Facial", "Diamond Facial", "Gold Facial", "Skin Lightening Facial", "Wine Facial"]
  },
  {
    gender: "men",
    name: "Head Massage",
    items: ["Regular Oil Massage", "Aroma Oil Massage", "Head Massage & Hair Wash"]
  },
  {
    gender: "men",
    name: "Manicure & Pedicure",
    items: ["Regular Manicure", "Aroma Manicure", "Spa Manicure", "Regular Pedicure", "Aroma Pedicure", "Spa Pedicure"]
  },
  {
    gender: "men",
    name: "Body Massage",
    items: ["Swedish Massage", "Deep Tissue Massage", "Aroma Therapy Massage", "Back Massage", "Foot Massage (20 Min)", "Scrub Massage", "Cream Massage"]
  }
];

const offers = [
  // ===== WOMEN'S COMBO OFFERS =====
  {
    category: "women",
    name: "Honey Waxing",
    description: "Full Arms + Underarms + Full Legs",
    originalPrice: "₹900",
    offerPrice: "₹599"
  },
  {
    category: "women",
    name: "Rica Waxing",
    description: "Full Arms + Underarms + Full Legs",
    originalPrice: "₹1400",
    offerPrice: "₹999"
  },
  {
    category: "women",
    name: "Honey Waxing",
    description: "Full Arms + Underarms + Half Legs",
    originalPrice: "₹750",
    offerPrice: "₹555"
  },
  {
    category: "women",
    name: "Chocolate Waxing",
    description: "Full Arms + Underarms + Half Legs",
    originalPrice: "₹800",
    offerPrice: "₹699"
  },
  {
    category: "women",
    name: "Loreal Global Hair Colour",
    description: "Upto Shoulder Length",
    originalPrice: "₹1800",
    offerPrice: "₹1155"
  },
  {
    category: "women",
    name: "Loreal Hair Spa",
    description: "Any Length",
    originalPrice: "₹2000",
    offerPrice: "₹1499"
  },
  {
    category: "women",
    name: "Face D-Tan + Clean Up + Honey Waxing",
    description: "Full Arms / Half Legs + Underarms",
    originalPrice: "₹1500",
    offerPrice: "₹999"
  },
  {
    category: "women",
    name: "Face D-Tan + Fruit Facial + Chocolate Waxing",
    description: "Full Arms + Half Legs + Underarms",
    originalPrice: "₹1800",
    offerPrice: "₹1199"
  },
  {
    category: "women",
    name: "Rica Waxing + Threading",
    description: "Full Arms + Underarms + Half Legs + Eyebrows + Upper Lips",
    originalPrice: "₹1180",
    offerPrice: "₹799"
  },
  {
    category: "women",
    name: "O3 Shine & Glow Facial",
    description: "Brightening and glow facial treatment",
    originalPrice: "₹2999",
    offerPrice: "₹1999"
  },
  {
    category: "women",
    name: "Rica Waxing",
    description: "Full Arms + Underarms + Half Legs",
    originalPrice: "₹1370",
    offerPrice: "₹1099"
  },
  {
    category: "women",
    name: "Hair Cut + Wash + Blow Dry",
    description: "Haircut with wash and blow dry finish",
    originalPrice: "₹900",
    offerPrice: "₹655"
  },
  {
    category: "women",
    name: "Advance Hair Cut Package",
    description: "Hair Wash + Conditioner + Blow Dry Setting + Eyebrows + Upper Lips",
    originalPrice: "₹1000",
    offerPrice: "₹699"
  },
  {
    category: "women",
    name: "Root Touch Up",
    description: "Ammonia Free Colour",
    originalPrice: "₹1200",
    offerPrice: "₹899"
  },

  // ===== MEN'S COMBO OFFERS =====
  {
    category: "men",
    name: "Classic Grooming Combo",
    description: "Hair Cut + Beard Trim + Shave + De-Tan + Hair Wash + Blow Dry",
    originalPrice: "₹820",
    offerPrice: "₹599"
  },
  {
    category: "men",
    name: "Relax Combo",
    description: "Hair Cut + Beard Trim/Shave + Head Massage (10 min) + Hair Wash + Blow Dry",
    originalPrice: "₹620",
    offerPrice: "₹450"
  },
  {
    category: "men",
    name: "Anti Dandruff Combo",
    description: "Hair Cut + Beard Trim/Shave + Anti Dandruff Treatment + Hair Wash + Blow Dry",
    originalPrice: "₹1120",
    offerPrice: "₹849"
  },
  {
    category: "men",
    name: "Matrix Hair Spa Combo",
    description: "Hair Cut + Beard Trim/Shave + Matrix Hair Spa + De-Tan + Hair Wash + Blow Dry",
    originalPrice: "₹1470",
    offerPrice: "₹1099"
  },
  {
    category: "men",
    name: "Loreal Hair Spa Combo",
    description: "Hair Cut + Beard Trim/Shave + Loreal Hair Spa + De-Tan + Hair Wash + Blow Dry",
    originalPrice: "₹1570",
    offerPrice: "₹1199"
  },
  {
    category: "men",
    name: "Fruit Vinegar Henna Combo",
    description: "Hair Cut + Beard Trim/Shave + Fruit Vinegar/Henna + Hair Wash + Blow Dry",
    originalPrice: "₹870",
    offerPrice: "₹655"
  },
  {
    category: "men",
    name: "Fruit Facial Combo",
    description: "Hair Cut + Beard Trim/Shave + Fruit Facial + D-Tan + Hair Wash + Blow Dry",
    originalPrice: "₹1320",
    offerPrice: "₹990"
  },
  {
    category: "men",
    name: "Colour Combo",
    description: "Hair Cut + Beard Trim/Shave + Matrix/Loreal Colour + Beard Colour + Hair Wash + Blow Dry",
    originalPrice: "₹1370",
    offerPrice: "₹1099"
  },
  {
    category: "men",
    name: "Ammonia-Free Colour + Wine Facial Combo",
    description: "Hair Cut + Beard Trim/Shave + Loreal Ammonia Free Colour + Wine Facial + Hair Wash + Blow Dry",
    originalPrice: "₹2420",
    offerPrice: "₹1699"
  },
  {
    category: "men",
    name: "Anti Dandruff Spa + Pedicure Combo",
    description: "Anti Dandruff Hair Spa + D-Tan Face & Neck + Pedicure",
    originalPrice: "₹2050",
    offerPrice: "₹1499"
  },
  {
    category: "men",
    name: "Gold Facial Combo",
    description: "Gold Facial + D-Tan Face & Neck + Hair Wash + Blow Dry",
    originalPrice: "₹2600",
    offerPrice: "₹1799"
  }
];

const galleryImages = [
  { src: "assets/images/gallery-01.webp", alt: "Star Looks Unisex Salon interior", className: "gallery-item--a" }
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
  const container = document.getElementById("serviceCategories");
  if (!container) return;
  const filtered = serviceCategories.filter((cat) => cat.gender === activeServiceGender);
  container.innerHTML = filtered
    .map(
      (cat, i) => `
      <details class="service-category">
        <summary>
          <span class="service-category-name">${cat.name}</span>
          <span class="service-category-count">${cat.items.length} services</span>
          <span class="service-category-icon" aria-hidden="true">&plus;</span>
        </summary>
        <ul class="service-category-items">
          ${cat.items.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </details>`
    )
    .join("");
}

let activeServiceGender = "women";

function initServiceTabs() {
  const tabs = document.querySelectorAll(".service-tab");
  if (!tabs.length) return;
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activeServiceGender = tab.dataset.gender;
      tabs.forEach((t) => t.classList.toggle("is-active", t === tab));
      renderServices();
    });
  });
}

let activeOfferCategory = "women";

function renderOffers() {
  const grid = document.getElementById("offerGrid");
  if (!grid) return;
  const filtered = offers.filter((o) => o.category === activeOfferCategory);
  grid.innerHTML = filtered
    .map(
      (o) => `
      <div class="offer-card">
        <p class="offer-label">Limited-Time Offer</p>
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

function initOfferTabs() {
  const tabs = document.querySelectorAll(".offer-tab");
  if (!tabs.length) return;
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activeOfferCategory = tab.dataset.category;
      tabs.forEach((t) => t.classList.toggle("is-active", t === tab));
      renderOffers();
    });
  });
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

  const mapFrame = document.getElementById("footerMap");
  if (mapFrame) {
    mapFrame.src = `https://www.google.com/maps?q=${encodeURIComponent(salonConfig.address)}&output=embed`;
  }

  const instagram = document.getElementById("footerInstagram");
  if (instagram) instagram.href = salonConfig.instagram !== "UPDATE_INSTAGRAM" ? salonConfig.instagram : "#";

  const nearbuyLinks = [document.getElementById("footerNearbuy"), document.getElementById("nearbuyLink")];
  nearbuyLinks.forEach((el) => {
    if (el) el.href = salonConfig.nearbuy !== "UPDATE_NEARBUY" ? salonConfig.nearbuy : "#";
  });

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
   9. SCISSOR ANIMATION (services divider, runs once)
========================================================= */
function initScissorAnimation() {
  const icon = document.getElementById("scissorIcon");
  const divider = icon ? icon.closest(".scissor-divider") : null;
  if (!icon) return;

  const activate = () => {
    icon.classList.add("is-active");
    if (divider) divider.classList.add("is-active");
  };

  if (!("IntersectionObserver" in window)) {
    activate();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activate();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(icon);
}

/* =========================================================
   10. IMAGE SCISSOR-CUT ACCENT (hero on load, about on scroll)
========================================================= */
function initImageScissors() {
  const targets = [document.querySelector(".hero-media"), document.querySelector(".about-media")].filter(Boolean);
  if (!targets.length) return;

  // Replays the cut animation every time an element re-enters view:
  // remove the class on exit (resets to hidden), force a reflow, then
  // re-add it on entry so the CSS animation restarts from 0%.
  const replay = (el) => {
    el.classList.remove("is-cutting");
    void el.offsetWidth; // force reflow so the next class add restarts the animation
    el.classList.add("is-cutting");
  };

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-cutting"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          replay(entry.target);
        } else {
          entry.target.classList.remove("is-cutting");
        }
      });
    },
    { threshold: 0.35 }
  );

  targets.forEach((el) => observer.observe(el));
}

/* =========================================================
   11. SCROLL SPY - highlight current section in nav
========================================================= */
function initScrollSpy() {
  const sectionIds = ["home", "services", "offers", "contact"];
  const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
  if (!sections.length || !navLinks.length || !("IntersectionObserver" in window)) return;

  const setActive = (id) => {
    navLinks.forEach((link) => {
      const isMatch = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-active", isMatch);
      if (isMatch) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/* =========================================================
   12. INIT
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const steps = [
    renderServices,
    renderOffers,
    initOfferTabs,
    initServiceTabs,
    applyConfigToLinks,
    initStickyHeader,
    initMobileMenu,
    initRevealAnimations,
    initScissorAnimation,
    initImageScissors,
    initScrollSpy
  ];
  steps.forEach((fn) => {
    try {
      fn();
    } catch (err) {
      console.error(`${fn.name} failed:`, err);
    }
  });
});