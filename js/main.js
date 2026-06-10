// tyler.johnson — portfolio. vanilla js, no dependencies.
document.documentElement.classList.add("js");

(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealTargets = document.querySelectorAll("[data-reveal]");

  // --- reveal on scroll ---
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    revealTargets.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  // --- scroll-spy nav ---
  var navLinks = document.querySelectorAll(".nav-links a[href^='#']");
  var sections = [];
  navLinks.forEach(function (link) {
    var section = document.querySelector(link.getAttribute("href"));
    if (section) sections.push(section);
  });

  if ("IntersectionObserver" in window && sections.length) {
    var spyObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          navLinks.forEach(function (link) {
            if (link.getAttribute("href") === "#" + entry.target.id) {
              link.setAttribute("aria-current", "true");
            } else {
              link.removeAttribute("aria-current");
            }
          });
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(function (section) {
      spyObserver.observe(section);
    });
  }

  // --- footer year ---
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
