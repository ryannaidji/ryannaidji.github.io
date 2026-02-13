/* ========================================
   RYAN_N Portfolio — Shared JavaScript
   ======================================== */

document.addEventListener("DOMContentLoaded", function () {

  // --- Progress Bar ---
  const progressBar = document.getElementById("progress-bar");
  if (progressBar) {
    function updateProgress() {
      const scrollTop = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = progress + "%";
    }
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();
  }

  // --- Hamburger Menu ---
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener("click", function () {
      hamburgerBtn.classList.toggle("active");
      mobileMenu.classList.toggle("open");
    });

    // Close on link click
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        hamburgerBtn.classList.remove("active");
        mobileMenu.classList.remove("open");
      });
    });

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
        hamburgerBtn.classList.remove("active");
        mobileMenu.classList.remove("open");
      }
    });

    // Close on outside click
    document.addEventListener("click", function (e) {
      if (!hamburgerBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburgerBtn.classList.remove("active");
        mobileMenu.classList.remove("open");
      }
    });
  }

  // --- Active Navigation ---
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(function (link) {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });
});
