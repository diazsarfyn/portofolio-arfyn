/* ==========================================================================
   PORTFOLIO INTERACTIVITY SCRIPT (VANILLA JAVASCRIPT)
   Arfyn Diazs Aryada - Mahasiswa TI UNPER Tasikmalaya
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. MOBILE MENU TOGGLE (NAVBAR RESPONSIVE UNTUK HP)
  // --------------------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileMenuBtn && navLinks) {
    // Membuka / menutup menu saat tombol hamburger (☰) ditekan
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show-mobile');
    });

    // Otomatis menutup menu mobile saat salah satu item menu diklik
    document.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show-mobile');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 2. FADE-IN ON SCROLL ANIMATION (INTERSECTION OBSERVER)
  // Membuat elemen muncul dengan efek transisi halus saat halaman di-scroll
  // --------------------------------------------------------------------------
  const fadeElements = document.querySelectorAll('.fade-up');

  const observerOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px"
  };

  const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Sekali elemen muncul, hentikan observasi agar hemat performa browser
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(element => {
    fadeObserver.observe(element);
  });

  // --------------------------------------------------------------------------
  // 3. HIGHLIGHT NAVIGASI AKTIF SESUAI POSISI SCROLL
  // Menandai menu mana yang sedang aktif saat layar berada di bagian tersebut
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section, footer');
  const navItems = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${currentSectionId}`) {
        item.classList.add('active');
      }
    });
  });
});
