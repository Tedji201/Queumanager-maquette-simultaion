// Chargement des informations utilisateur
document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (user) {
    // Affichage du nom d'utilisateur sur la page
    const profileName = document.getElementById("profileName");
    if (profileName) {
      profileName.textContent = user.username;
    }

    // Autres éléments (exemple pour email)
    const profileEmail = document.getElementById("profileEmail");
    if (profileEmail) {
      profileEmail.textContent = user.email;
    }
  } else {
    alert("Veuillez vous connecter pour accéder à cette page.");
    window.location.href = "index.html"; // Redirige vers la page de connexion
  }
});


// Gestion de la barre de recherche
const searchButton = document.getElementById("searchButton");
const serviceSearch = document.getElementById("serviceSearch");

searchButton.addEventListener("click", () => {
  const query = serviceSearch.value.trim();
  if (query) {
    alert(`Recherche pour le service : "${query}"`);
  } else {
    alert("Veuillez entrer un service à rechercher.");
  }
});

// Navigation depuis le bouton "Prendre un ticket"
const takeTicketButton = document.getElementById("takeTicketButton");

takeTicketButton.addEventListener("click", () => {
  // Redirige l'utilisateur vers la page de réservation
  window.location.href = "reservation.html";
});


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

