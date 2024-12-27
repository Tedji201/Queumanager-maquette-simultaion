// JavaScript global pour la navigation
const links = document.querySelectorAll('#sidebar a');

// Marquer le lien actif
links.forEach(link => {
  if (link.href === window.location.href) {
    link.style.fontWeight = 'bold';
    link.style.textDecoration = 'underline';
  }
});
