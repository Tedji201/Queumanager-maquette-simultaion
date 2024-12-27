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
  // Simuler les données dynamiques pour la démonstration
  const currentPosition = 5; // Position actuelle de l'utilisateur
  const averageTime = "10 minutes"; // Temps moyen d'attente
  const totalClients = 25; // Nombre total de clients
  const clientsServed = 20; // Clients servis aujourd'hui

  // Mettre à jour la position
  document.getElementById("current-position").textContent = currentPosition;

  // Mettre à jour les statistiques
  document.getElementById("average-time").textContent = averageTime;
  document.getElementById("total-clients").textContent = totalClients;
  document.getElementById("clients-served").textContent = clientsServed;
});
