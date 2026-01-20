function setLang(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    el.style.display = el.dataset.lang === lang ? "block" : "none";
  });

  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.classList.remove("active");
  });

  document.getElementById(lang).classList.add("active");
}

window.onload = () => setLang("en");
