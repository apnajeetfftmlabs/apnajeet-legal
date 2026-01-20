function setLang(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    el.style.display = el.dataset.lang === lang ? "block" : "none";
  });

  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.classList.remove("active");
  });

  document.getElementById(lang).classList.add("active");
}

/* Auto highlight current page */
function setActiveNav() {
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-links a").forEach(link => {
    const linkPage = link.getAttribute("href");
    if (
      linkPage === currentPage ||
      (currentPage === "" && linkPage === "index.html")
    ) {
      link.classList.add("active");
    }
  });
}

window.onload = () => {
  setLang("en");
  setActiveNav();
};
