document.addEventListener("DOMContentLoaded", function() {
    const sideNav = document.querySelector(".side-nav");
    const firstSection = document.querySelector("#anschlagen");
    const sideNavToggleOffset = firstSection.scrollHeight; // Höhe der ersten Abschnitt offsetHeight
    
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > sideNavToggleOffset) {
        sideNav.classList.add("show");
      } else {
        sideNav.classList.remove("show");
      }
    });
  });
  