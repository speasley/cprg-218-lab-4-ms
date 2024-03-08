
document.querySelectorAll("details.accordion").forEach((accordion) => {
    accordion.querySelector("summary").addEventListener("click", function() {
      this.parentElement.classList.toggle("active");

    });
  });

  document.getElementById("footer-year").textContent = new Date().getFullYear();