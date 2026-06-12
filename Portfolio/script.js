/* =========================
   TYPEWRITER EFFECT
========================= */

const text =
"interested in Web Development | UI/UX Design | Programming";

let index = 0;

function typeWriter() {

    if (index < text.length) {

        document.getElementById("typing")
            .innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 100);
    }
}

typeWriter();


/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const hiddenElements =
document.querySelectorAll("section");

const observer =
new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},
{
    threshold: 0.15
});

hiddenElements.forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});


/* =========================
   CONTACT FORM
========================= */

const form =
document.querySelector("form");

form.addEventListener("submit",
function (e) {

    e.preventDefault();

    alert(
        "Thank you! Your message has been sent successfully."
    );

    form.reset();

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (scrollY >= sectionTop) {

            current =
                section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");
        }
    });
});


/* =========================
   HERO FADE-IN
========================= */

window.addEventListener("load", () => {

    document.querySelector(".hero")
        .classList.add("show");

});