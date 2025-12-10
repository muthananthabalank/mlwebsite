// Initialize Lucide Icons
// @ts-ignore
declare const lucide: any;
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}

// Year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}

// Navigation Logic
const navLinks = document.querySelectorAll('.nav-link');
const navLinksMobile = document.querySelectorAll('.nav-link-mobile');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const sections = document.querySelectorAll('.app-section');

// Function to set active route
function setActiveRoute(route: string) {
  // Update Active State in Nav
  navLinks.forEach(link => {
    if (link.getAttribute('data-target') === route) {
      link.classList.add('nav-active', 'text-brand-yellow');
      link.classList.remove('text-gray-300');
    } else {
      link.classList.remove('nav-active', 'text-brand-yellow');
      link.classList.add('text-gray-300');
    }
  });

  // Mobile nav active state
  navLinksMobile.forEach(link => {
    if (link.getAttribute('data-target') === route) {
      link.classList.add('text-brand-blue', 'bg-brand-yellow');
      link.classList.remove('text-gray-300');
    } else {
      link.classList.remove('text-brand-blue', 'bg-brand-yellow');
      link.classList.add('text-gray-300');
    }
  });

  // Show/Hide Sections logic based on "Router" behavior
  // 'home' -> Show All
  // 'services' -> Show Services Only
  // 'about' -> Show About Only
  // 'contact' -> Show Contact Only
  
  if (route === 'home') {
    sections.forEach(section => {
      section.classList.remove('hidden-section');
    });
    // Scroll to top
    window.scrollTo(0, 0);
  } else {
    sections.forEach(section => {
      if (section.id === route) {
        section.classList.remove('hidden-section');
      } else {
        section.classList.add('hidden-section');
      }
    });
    window.scrollTo(0, 0);
  }
}

// Event Listeners for Nav
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const target = link.getAttribute('data-target');
    if (target) setActiveRoute(target);
  });
});

navLinksMobile.forEach(link => {
  link.addEventListener('click', () => {
    const target = link.getAttribute('data-target');
    if (target) {
      setActiveRoute(target);
      // Close mobile menu
      if (mobileMenu) mobileMenu.classList.add('hidden');
    }
  });
});

// Mobile Menu Toggle
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Initialize Home
setActiveRoute('home');

// Contact Form Handler
const contactForm = document.getElementById('contact-form') as HTMLFormElement;
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const service = formData.get('service');
    const message = formData.get('message');
    
    const subject = `Inquiry via Website: ${service}`;
    const body = `Name: ${name}
Phone: ${phone}
Email: ${email}
Service Required: ${service}

Message:
${message}`;

    const mailtoLink = `mailto:deepamtradeunion@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  });
}
