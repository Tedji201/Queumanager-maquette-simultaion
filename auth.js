// Gestion des transitions entre les formulaires
document.getElementById("show-login").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("signup-form").classList.add("hidden");
    document.getElementById("login-form").classList.remove("hidden");
  });
  
  document.getElementById("show-signup").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("signup-form").classList.remove("hidden");
  });
  
  // Gestion de l'inscription
  document.querySelector("#signup-form form").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const username = document.getElementById("signup-username").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
  
    if (username && email && password) {
      // Stockage des données utilisateur
      localStorage.setItem("user", JSON.stringify({ username, email, password }));
      alert("Inscription réussie ! Vous pouvez maintenant vous connecter.");
      document.getElementById("show-login").click(); // Redirige vers la connexion
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  });
  
  // Gestion de la connexion
  document.querySelector("#login-form form").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
  
    const user = JSON.parse(localStorage.getItem("user"));
  
    if (user && user.email === email && user.password === password) {
      alert(`Bienvenue, ${user.username} !`);
      // Stocker une session pour l'utilisateur connecté
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      window.location.href = "index1.html"; // Redirige vers la page d'accueil
    } else {
      alert("Email ou mot de passe incorrect.");
    }
  });
  