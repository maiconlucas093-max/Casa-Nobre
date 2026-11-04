
// CASA NOBRE — FUNCIONALIDADES

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

// Abrir e fechar o menu mobile
if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const menuAberto = navigation.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", menuAberto);
    menuToggle.setAttribute(
      "aria-label",
      menuAberto ? "Fechar menu" : "Abrir menu"
    );
  });

  // Fechar o menu após selecionar uma opção
  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu");
    });
  });
}

// Atualizar automaticamente o ano do rodapé
const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
