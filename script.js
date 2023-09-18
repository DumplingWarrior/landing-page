// Include the GSAP library in your HTML file
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>

// Animation using GSAP
gsap.to('.animation-container', {
    x: 200, // Move 200 pixels to the right
    duration: 2, // Animation duration (2 seconds)
    ease: 'bounce', // Easing function
    repeat: -1, // Repeat indefinitely
    yoyo: true, // Yoyo effect (back and forth)
});

// Animation using GSAP
gsap.fromTo(
    '.animation-container',
    {
        y: -100, // Start 100 pixels above the original position
        opacity: 0, // Start with opacity 0 (invisible)
    },
    {
        y: 0, // End at the original position
        opacity: 1, // End with opacity 1 (fully visible)
        duration: 1.5, // Animation duration (1.5 seconds)
        ease: 'elastic.out(1, 0.3)', // Bouncing easing effect
        repeat: -1, // Repeat indefinitely
        yoyo: true, // Yoyo effect (back and forth)
    }
);
