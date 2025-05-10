document.addEventListener("DOMContentLoaded", function() {
  const songBlocks = document.querySelectorAll('.song-download-block');

  const appearOptions = {
    threshold: 0.3,
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        const buttons = entry.target.querySelectorAll('.download-button');
        buttons.forEach((button, index) => {
          setTimeout(() => {
            button.classList.add('visible');
          }, index * 150);
        });
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  songBlocks.forEach(block => {
    appearOnScroll.observe(block);
  });
});// JavaScript Document