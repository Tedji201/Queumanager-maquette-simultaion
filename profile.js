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


// Gestion des boutons
document.getElementById("editProfile").addEventListener("click", function () {
  alert("La fonctionnalité de modification de profil sera bientôt disponible.");
});

document.getElementById("logout").addEventListener("click", function () {
  if (confirm("Êtes-vous sûr de vouloir vous déconnecter ?")) {
    // Redirection vers la page de déconnexion ou action
    window.location.href = "login.html";
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


