// Sélection des éléments du DOM
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close-btn");

// Fonction pour ouvrir le modal avec les informations
document.querySelectorAll(".experience-box").forEach(box => {
    box.addEventListener("click", function () {
        modalTitle.textContent = this.querySelector("h3").textContent;
        modalText.textContent = this.querySelector("p").textContent;
        modal.style.display = "flex";
    });
});

// Fermer le modal en cliquant sur le bouton de fermeture
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fermer le modal en cliquant en dehors du contenu
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
