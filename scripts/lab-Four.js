let accordions = document.querySelectorAll("button.accordion");

accordions.forEach((acco) => {
  acco.onclick = () => {
    acco.classList.toggle("active");
    acco.nextElementSibling.classList.toggle("active-panel");
    acco.getElementsByClassName("fa-solid")[0].classList.toggle("fa-chevron-up");
    acco.getElementsByClassName("fa-solid")[0].classList.toggle("fa-chevron-down")
  };
});

document.getElementById("footer-year").textContent = new Date().getFullYear();