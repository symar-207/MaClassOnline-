function enregistrerUtilisateur(event) {
  event.preventDefault();

  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  const motdepasse = document.getElementById("motdepasse").value;

  const user = {
    nom: nom,
    email: email,
    motdepasse: motdepasse
  };
  localStorage.setItem("utilisateur", JSON.stringify(user));

// Vide le contenu de la page
document.getElementById("contenu").innerHTML = "";

// Affiche une alerte

// Message personnalisé avec le nom
document.getElementById("contenu").innerHTML =
  "<p>Chargement des vidéos pour <strong>" + user.nom + "</strong>...</p>";

// Redirection après 2 secondes
setTimeout(() => {
  window.location.href = "https://www.youtube.com/user/KhanAcademyFrancais";
}, 3000);} 

 



