const sr = ScrollReveal();

// Item 1: Fade in from the left with a delay
sr.reveal('.item-1', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  delay: 300,
  easing: 'ease-in-out',
  opacity: 0
});

// Item 2: Fade in from the bottom with a longer delay
sr.reveal('.item-2', {
  origin: 'bottom',
  distance: '50px',
  duration: 1200,
  delay: 600,
  easing: 'ease-in-out',
  opacity: 0
});

// Item 3: Fade in from the right with a faster duration
sr.reveal('.item-3', {
  origin: 'right',
  distance: '50px',
  duration: 800,
  delay: 900,
  easing: 'ease-in-out',
  opacity: 0
});

// Item 4: Scale up from the center
sr.reveal('.item-4', {
  scale: 0.85,
  duration: 1000,
  delay: 1200,
  easing: 'ease-in-out',
  opacity: 0
});
