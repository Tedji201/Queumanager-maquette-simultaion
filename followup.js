// Gestion du dropdown pour S'inscrire/Se connecter
const authButton = document.getElementById("authButton");
const authOptions = document.getElementById("authOptions");

authButton.addEventListener("click", () => {
  const isDisplayed = authOptions.style.display === "block";
  authOptions.style.display = isDisplayed ? "none" : "block";
});

// Masquer le dropdown si on clique ailleurs
document.addEventListener("click", (event) => {
  if (!authButton.contains(event.target) && !authOptions.contains(event.target)) {
    authOptions.style.display = "none";
  }
});


// Gestion du bouton Support
document.getElementById("supportBtn").addEventListener("click", () => {
  alert("Le support client sera bientôt disponible !");
});

// Carrousel d'annonces
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

// Change de slide toutes les 5 secondes
setInterval(showNextSlide, 5000);


// Gestion des notifications
const notificationCount = document.getElementById("notificationCount");
notificationCount.textContent = 3; // Exemple de notifications non lues

document.getElementById("notification").addEventListener("click", () => {
  alert("Vous avez 3 notifications !");
  notificationCount.textContent = 0; // Remet le compteur à 0
});

const menuIcon = document.getElementById("menuIcon");
const sidebar = document.getElementById("sidebar");

menuIcon.addEventListener("click", () => {
  // Vérifie si la barre est masquée ou affichée
  if (sidebar.style.left === "-250px") {
    sidebar.style.left = "0"; // Affiche la barre
    menuIcon.classList.add("active"); // Change l'icône en croix
  } else {
    sidebar.style.left = "-250px"; // Masque la barre
    menuIcon.classList.remove("active"); // Remet l'icône en hamburger
  }
});




document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");
  const modal = document.getElementById("ticket-modal");
  const modalDetails = document.getElementById("modal-details");
  const closeModal = document.querySelector(".close-modal");

  // Gestion des onglets
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Activer l'onglet cliqué
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // Afficher le contenu correspondant
      tabContents.forEach(content => content.classList.remove("active"));
      tabContents[index].classList.add("active");
    });
  });

  // Gestion des boutons "Voir Détails"
  document.querySelectorAll(".view-ticket").forEach(button => {
    button.addEventListener("click", (e) => {
      const card = e.target.closest(".ticket-card");
      const details = Array.from(card.querySelectorAll("p"))
        .map(p => p.textContent)
        .join("\n");
      modalDetails.textContent = details;
      modal.style.display = "flex";
    });
  });

  // Fermer le modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
