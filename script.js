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
            menuIcon.src = 'https://certwerk.ch/images/menu.png';
            closeIcon.src = 'https://certwerk.ch/images/cancel.png';
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        } else {
            menuIcon.src = 'https://certwerk.ch/images/cancel.png';
            closeIcon.src = 'https://certwerk.ch/images/menu.png';
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

// TAB-PROBLEM VON IMPORTANT-INPUTS ÃœBERSPRINGEN
document.addEventListener("DOMContentLoaded", function() {
    // Setze das tabindex fÃ¼r Honeypot-Felder auf -1, damit sie beim Tabben Ã¼bersprungen werden.
    document.getElementById("user_address").setAttribute("tabindex", "-1");
    document.getElementById("confirm_email").setAttribute("tabindex", "-1");
    document.getElementById("company_name").setAttribute("tabindex", "-1");
    document.getElementById("feedback_notes").setAttribute("tabindex", "-1");
    document.getElementById("referral_code").setAttribute("tabindex", "-1");

    // Verhindere das Hochscrollen bei Umschalt-Taste (Shift) + Tab
    document.addEventListener("keydown", function(event) {
        if (event.shiftKey && event.key === "Tab") {
            let focusableElements = document.querySelectorAll("input:not([tabindex='-1']), textarea:not([tabindex='-1'])");
            let currentIndex = Array.from(focusableElements).indexOf(document.activeElement);
            if (currentIndex > 0) {
                // Wenn Shift + Tab gedrÃ¼ckt wird, gehe zum vorherigen Nicht-Honeypot-Element
                focusableElements[currentIndex - 1].focus();
                event.preventDefault();
            }
        }
    });
});