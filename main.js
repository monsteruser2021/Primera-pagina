// MAIN PAGINA PRINCIPAL 18.06.2023

//SCROLL REVEAL

document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.articulos-principales', { delay: 500});
ScrollReveal().reveal('.showcase-2', { delay: 500});
