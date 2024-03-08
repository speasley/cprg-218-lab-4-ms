// Correct the JavaScript for accordion functionality, if necessary
document.querySelectorAll("details.accordion").forEach((accordion) => {
    accordion.querySelector("summary").addEventListener("click", function() {
      this.parentElement.classList.toggle("active");
      // Toggle icons or additional styles if needed
    });
  });
  
  // Update the footer year
  document.getElementById("footer-year").textContent = new Date().getFullYear();
  