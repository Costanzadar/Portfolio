// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('#portfolio li');
    projects.forEach(project => {
        project.addEventListener('click', function() {
            alert(`You clicked on ${project.textContent}! Implement functionality to display photos or more info here.`);
        });
    });
});

// freccia
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.querySelector(".scroll-to-top");

    if (!scrollToTopButton) return; // Evita errori se il bottone non esiste

    // Controllo iniziale per nasconderlo subito se necessario
    scrollToTopButton.style.display = "none";

    // Mostra il pulsante quando si scorre verso il basso
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = "flex"; // Mostra il pulsante
        } else {
            scrollToTopButton.style.display = "none"; // Nasconde il pulsante
        }
    });

    // Scorri verso l'alto quando il pulsante viene cliccato
    scrollToTopButton.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


// typing
document.addEventListener("DOMContentLoaded", function () {
    var options = {
        strings: [
            "Human-Computer Interaction",
            "UX Design",
            "AI Research",
        ],
        typeSpeed: 50,         // Più fluido
        backSpeed: 30,         // Meno brusco
        backDelay: 2500,       // Più tempo prima di cancellare
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: "_",
        autoInsertCss: true,
    };

    requestAnimationFrame(() => {
        new Typed("#typed-output", options);
    });
});
