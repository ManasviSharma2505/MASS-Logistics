
// Get the hamburger button and navigation menu

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


// Open and close the mobile menu

menuToggle.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("show");

    menuToggle.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});


// Close menu after clicking a navigation link

navLinks.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});


// Close menu when Escape is pressed

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        navLinks.classList.remove("show");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }

});

// PHILOSOPHY SECTION SCROLL ANIMATION

const philosophySection = document.querySelector(".philosophy-section");

if (philosophySection) {
    const philosophyObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    philosophySection.classList.add("is-visible");
                    observer.unobserve(philosophySection);
                }
            });
        },
        {
            threshold: 0.3
        }
    );

    philosophyObserver.observe(philosophySection);
}


// SERVICES SECTION SCROLL ANIMATION

const servicesSection = document.querySelector(".services-section");

if (servicesSection) {
    const servicesObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    servicesSection.classList.add("is-visible");
                    observer.unobserve(servicesSection);
                }
            });
        },
        {
            threshold: 0.3
        }
    );

    servicesObserver.observe(servicesSection);
}
