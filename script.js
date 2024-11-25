// MOBILE NAV
    document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarUl = document.querySelector('.navbar ul');
    const menuIcon = document.querySelector('.menu-toggle img.menu-icon');
    const closeIcon = document.querySelector('.menu-toggle img.close-icon');
    const dropdowns = document.querySelectorAll('.dropdown');

    menuToggle.addEventListener('click', function() {
        navbarUl.classList.toggle('open'); // Toggle-Klasse für das Öffnen und Schließen des Menüs
        
        if (menuIcon.classList.contains('hidden')) {
            menuIcon.src = 'images/menu.png';
            closeIcon.src = 'images/cancel.png';
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        } else {
            menuIcon.src = 'images/cancel.png';
            closeIcon.src = 'images/menu.png';
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        }

        menuIcon.classList.toggle('rotate');
        closeIcon.classList.toggle('rotate');

        // Schließe alle Dropdowns, wenn das Menü geöffnet oder geschlossen wird
        dropdowns.forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    });

    // Event Listener für Klicks auf die Hauptlinks "Sicherheitsschulungen" und "ISO-Zertifizierungen"
    const mainLinks = document.querySelectorAll('.navbar ul > li > a:not(.dropdown)');
    mainLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Schließe alle Dropdowns, wenn auf einen Hauptlink geklickt wird
            dropdowns.forEach(dropdown => {
                dropdown.style.display = 'none';
            });
        });
    });

    // Event Listener für Mouseenter und Mouseleave für Hauptlinks und Dropdown-Links
    const navLinks = document.querySelectorAll('.navbar ul > li > a');
    function changeColorToLogorot() {
        navLinks.forEach(link => {
            if (link.classList.contains('active')) {
                link.style.color = 'var(--logorot)';
            } else {
                link.style.color = 'var(--logoblau)';
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            link.classList.add('active');
            changeColorToLogorot();
        });

        link.addEventListener('mouseleave', function() {
            link.classList.remove('active');
            changeColorToLogorot();
        });

        const dropdown = link.nextElementSibling;
        if (dropdown && dropdown.classList.contains('dropdown')) {
            dropdown.addEventListener('mouseenter', function() {
                link.classList.add('active');
                changeColorToLogorot();
            });
            dropdown.addEventListener('mouseleave', function() {
                link.classList.remove('active');
                changeColorToLogorot();
            });
        }
    });

    changeColorToLogorot(); // Setze die Farbe der Hauptlinks beim Laden der Seite
});


// NAVIGATION HOVER
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navbar ul > li > a");
    const dropdowns = document.querySelectorAll(".dropdown");

    // Funktion zum Ändern der Farbe der Hauptlinks
    function changeColorToLogorot() {
        navLinks.forEach(link => {
            if (link.classList.contains("active")) {
                link.style.color = "var(--logorot)";
            } else {
                link.style.color = "var(--logoblau)";
            }
        });
    }
    // Event Listener für Mouseenter und Mouseleave für Hauptlinks und Dropdown-Links
    navLinks.forEach(link => {
        link.addEventListener("mouseenter", function() {
            link.classList.add("active");
            changeColorToLogorot();
        });

        link.addEventListener("mouseleave", function() {
            link.classList.remove("active");
            changeColorToLogorot();
        });
        // Event Listener für Dropdown-Links
        const dropdown = link.nextElementSibling;
        if (dropdown && dropdown.classList.contains("dropdown")) {
            dropdown.addEventListener("mouseenter", function() {
                link.classList.add("active");
                changeColorToLogorot();
            });
            dropdown.addEventListener("mouseleave", function() {
                link.classList.remove("active");
                changeColorToLogorot();
            });
        }
    });
    // Setze die Farbe der Hauptlinks beim Laden der Seite
    changeColorToLogorot();
});


// FORMULAR SENDEN
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Verhindert das automatische Absenden des Formulars

        const formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                form.reset(); // Leert das Formular
                alert('Vielen Dank für die Übermittlung des Formulars. Wir werden uns sobald wie möglich bei Ihnen melden.');
            } else {
                alert('Es gab ein Problem beim Senden des Formulars. Bitte versuchen Sie es erneut.');
            }
        }).catch(error => {
            alert('Es gab ein Problem beim Senden des Formulars. Bitte versuchen Sie es erneut.');
        });
    });
});
