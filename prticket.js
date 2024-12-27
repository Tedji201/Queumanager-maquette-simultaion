

// Gestion du dropdown pour S'inscrire/Se connecter
const authOptions = document.getElementById("authOptions");

authButton.addEventListener("click", () => {
  const isDisplayed = authOptions.style.display === "block";
  authOptions.style.display = isDisplayed ? "none" : "block";
});

// Masquer le dropdown si on clique ailleurs
document.addEventListener("*click", (event) => {
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

// QR Code interactif
document.getElementById('ticket-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  document.getElementById('ticket-service').textContent = service;
  document.getElementById('ticket-date').textContent = date;
  document.getElementById('ticket-time').textContent = time;
  document.getElementById('ticket-display').classList.remove('hidden');
});







// Récupérer les éléments nécessaires
const ticketForm = document.getElementById("ticket-form");
const ticketModal = document.getElementById("ticketModal");
const closeModalBtn = document.getElementById("closeModal");

const modalUserName = document.getElementById("ticketUsername");
const modalTicketNumber = document.getElementById("modalTicketNumber");
const modalService = document.getElementById("modalService");
const modalDate = document.getElementById("modalDate");
const modalTime = document.getElementById("modalTime");
const modalEmail = document.getElementById("ticketEmail");

const serviceInput = document.getElementById("service");
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");

// Simuler des données utilisateur récupérées après connexion
const currentUser = {
  name: "",
  email: "",
};

// Charger les informations utilisateur dès la connexion
window.onload = function () {
  document.getElementById("userName").textContent = currentUser.name;
  document.getElementById("profileIcon").alt = currentUser.name;
};

// Gestion de la soumission du formulaire
ticketForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!serviceInput.value || !dateInput.value || !timeInput.value) {
    alert("Veuillez remplir tous les champs !");
    return;
  }

  // Remplir les informations dans le modal
  modalUserName.textContent = currentUser.name;
  modalTicketNumber.textContent = `#${Math.floor(Math.random() * 100000)}`;
  modalService.textContent = serviceInput.options[serviceInput.selectedIndex].text;
  modalDate.textContent = dateInput.value;
  modalTime.textContent = timeInput.value;
  modalEmail.textContent = currentUser.email;

  // Générer un QR code
  const qrCode = document.getElementById("qr-code");
  qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?data=Service:${serviceInput.value},Date:${dateInput.value},Heure:${timeInput.value}&size=150x150`;

  // Afficher le modal
  ticketModal.style.display = "flex";
});

// Fermer le modal
closeModalBtn.addEventListener("click", () => {
  ticketModal.style.display = "none";
});


// Annuler le ticket
cancelButton.addEventListener("click", () => {
  const confirmCancel = confirm("Êtes-vous sûr de vouloir annuler ce ticket ?");
  if (confirmCancel) {
    alert("Votre ticket a été annulé.");
    ticketModal.style.display = "none"; // Fermer le modal
  }
});

// Modifier le ticket
modifyButton.addEventListener("click", () => {
  alert("Vous pouvez maintenant modifier votre ticket.");
  ticketModal.style.display = "none"; // Fermer le modal
  // Optionnel : Revenir au formulaire si nécessaire
  serviceInput.focus();
});


