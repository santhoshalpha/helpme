// Smooth scroll to sections when clicked on the navigation links
var navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    var target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});
