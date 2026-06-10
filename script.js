/* -------------------------------------------------------------
   THEME TOGGLING (Dark/Light Mode)
   ------------------------------------------------------------- */
const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

// Check stored theme preference or user system default
const savedTheme = localStorage.getItem('portfolio-theme');
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

if (savedTheme === 'light' || (!savedTheme && prefersLight)) {
  bodyElement.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', () => {
  bodyElement.classList.toggle('light-theme');
  
  // Save preference
  if (bodyElement.classList.contains('light-theme')) {
    localStorage.setItem('portfolio-theme', 'light');
  } else {
    localStorage.setItem('portfolio-theme', 'dark');
  }
});

/* -------------------------------------------------------------
   INTERACTIVE EXPERIENCE TIMELINE (Expand/Collapse)
   ------------------------------------------------------------- */
const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach(item => {
  const content = item.querySelector('.timeline-content');
  const indicator = item.querySelector('.expand-indicator span');
  
  content.addEventListener('click', (e) => {
    // Prevent toggle if clicking on a link directly
    if (e.target.tagName === 'A' || e.target.closest('a')) {
      return;
    }
    
    const isExpanded = item.classList.contains('expanded');
    
    // Toggle class
    item.classList.toggle('expanded');
    
    // Update indicator text
    if (indicator) {
      indicator.textContent = isExpanded ? 'View Details' : 'Hide Details';
    }
  });
});

/* -------------------------------------------------------------
   ACTIVE NAVBAR SECTION LINK HIGHLIGHTING
   ------------------------------------------------------------- */
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let currentActive = '';
  const scrollPosition = window.scrollY + 120; // offset for nav bar

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      currentActive = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentActive}`) {
      link.classList.add('active');
    }
  });
});
