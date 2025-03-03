document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-links");

    // Active le menu burger sur mobile
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Met à jour l'élément actif en fonction du scroll
    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });

    // Ferme le menu burger après un clic sur un lien
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll(".skill");
    const profileWrapper = document.querySelector(".profile-wrapper");

    // Récupère la position centrale de l'image
    const centerX = profileWrapper.offsetLeft + profileWrapper.offsetWidth -500;// 🟢 Placé à droite
    const centerY = profileWrapper.offsetTop + profileWrapper.offsetHeight / 2 -160 ;
    const radius = 150; 

    skills.forEach((skill) => {
        let angle = skill.getAttribute("data-angle");
        let radian = (angle * Math.PI) / 180;

        let x = centerX + radius * Math.cos(radian) - skill.offsetWidth -200 ;
        let y = centerY + radius * Math.sin(radian) - skill.offsetHeight -300;

        skill.style.left = `${x}px`;
        skill.style.top = `${y}px`;

        // Remplissage progressif des cercles
        let circle = skill.querySelector(".fg-circle");
        let percentage = skill.getAttribute("data-percentage");
        let circumference = 2 * Math.PI * 40;
        let offset = circumference - (percentage / 100) * circumference;

        circle.style.strokeDashoffset = offset;
        circle.style.stroke = ["#00bcd4", "#e91e63", "#f4a900", "#0073e6"][Math.floor(Math.random() * 4)];
    });
});
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".progress-bar div").forEach(bar => {
        let progress = bar.getAttribute("data-progress");
        bar.style.width = progress + "%";
    });
});




