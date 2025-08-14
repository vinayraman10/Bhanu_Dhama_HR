// // Form validation for email
// const emailInput = document.getElementById("email");
// const errorText = document.getElementById("emailError");
// const form = document.querySelector("#contact form");

// function setBorderColor(isValid) {
//   emailInput.classList.remove(
//     "border-red-500", "focus:ring-red-500", "focus:border-red-500",
//     "border-green-500", "focus:ring-green-500", "focus:border-green-500"
//   );
//   errorText.classList.add("hidden");

//   if (isValid) {
//     emailInput.classList.add("border-green-500", "focus:ring-green-500", "focus:border-green-500");
//   } else {
//     emailInput.classList.add("border-red-500", "focus:ring-red-500", "focus:border-red-500");
//     errorText.classList.remove("hidden");
//   }
// }

// emailInput.addEventListener("input", () => {
//   const value = emailInput.value.trim();
//   const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
//   if (value.length === 0) {
//     emailInput.classList.remove(
//       "border-red-500", "focus:ring-red-500", "focus:border-red-500",
//       "border-green-500", "focus:ring-green-500", "focus:border-green-500"
//     );
//     errorText.classList.add("hidden");
//   } else {
//     setBorderColor(isValid);
//   }
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
//   if (!isValid) {
//     setBorderColor(false);
//     emailInput.focus();
//     return;
//   }
//   form.reset();
//   emailInput.classList.remove(
//     "border-green-500", "focus:ring-green-500", "focus:border-green-500"
//   );
//   errorText.classList.add("hidden");
//   alert("Your message has been sent!");
// });

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Navbar hamburger menu toggle
const toggleBtn = document.getElementById('menu-toggle');
const navMenu = document.getElementById('menu');
toggleBtn?.addEventListener('click', () => {
  navMenu?.classList.toggle('hidden');
});

// Mobile horizontal scroll dots for #skills-scroll
document.addEventListener('DOMContentLoaded', function () {
  const scrollEl = document.getElementById('skills-scroll');
  const dotsEl = document.getElementById('skills-dots');
  if (!scrollEl || !dotsEl) return;

  scrollEl.style.scrollbarWidth = 'none';
  scrollEl.style.msOverflowStyle = 'none';
  scrollEl.style.overflow = 'auto';
  scrollEl.style.overflowY = 'hidden';
  scrollEl.style.overflowX = 'auto';
  scrollEl.classList.add('hide-scrollbar');

  const isMobile = () => window.innerWidth < 640;
  const cards = Array.from(scrollEl.children);
  const count = cards.length;

  function renderDots(activeIdx = 0) {
    dotsEl.innerHTML = '';
    for (let i = 0; i < count; i++) {
      let dot = document.createElement('button');
      dot.type = 'button';
      dot.className =
        'w-2.5 h-2.5 rounded-full transition-all duration-200 ' +
        (i === activeIdx
          ? 'bg-green-700 dark:bg-green-300 scale-125'
          : 'bg-green-200 dark:bg-green-700 opacity-60');
      dot.setAttribute('aria-label', `Go to skill card ${i + 1}`);
      dot.addEventListener('click', () => {
        cards[i].scrollIntoView({ behavior: 'smooth', inline: 'center' });
      });
      dotsEl.appendChild(dot);
    }
  }

  function getActiveCardIdx() {
    let scrollLeft = scrollEl.scrollLeft;
    let cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);
    return Math.round(scrollLeft / cardWidth);
  }

  function updateDots() {
    if (!isMobile()) {
      dotsEl.style.display = 'none';
      return;
    }
    dotsEl.style.display = 'flex';
    renderDots(getActiveCardIdx());
  }

  scrollEl.addEventListener('scroll', () => {
    if (isMobile()) renderDots(getActiveCardIdx());
  });

  window.addEventListener('resize', updateDots);
  updateDots();

  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.from(scrollEl, {
      scrollTrigger: {
        trigger: scrollEl,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power2.out"
    });
  }
});

// Initialize Lucide icons if available
if (typeof lucide !== "undefined") {
  lucide.createIcons();
}

// // emailjs.init('NwfdvgsZ5LJsaUotj'); // Your public key

// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.querySelector("#form");

//   form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     emailjs
//       .sendForm("service_b2mm2gv", "template_5yw072z", this, "NwfdvgsZ5LJsaUotj")
//       .then(() => {
//         alert("Message sent successfully!");
//         form.reset();
//       }, (error) => {
//         console.error("EmailJS error:", error);
//         alert("Failed to send message. Please try again.");
//       });
//   });
// });
