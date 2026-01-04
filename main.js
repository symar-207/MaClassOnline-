document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  const motdepasse = document.getElementById("motdepasse").value;

  const user = {
    nom: nom,
    email: email,
    motdepasse: motdepasse
  };

  localStorage.setItem("utilisateur", JSON.stringify(user));
alert("formulaire soumis!")
  // Redirection vers ton site de formation
  window.location.href = "https://www.youtube.com/user/KhanAcademyFrancais "; // remplace par le lien réel
});
