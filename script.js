function openModal(title, description) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;
    document.getElementById("productModal").style.display = "block";
}

function closeModal() {
    document.getElementById("productModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("productModal");

    if (event.target === modal) {
        modal.style.display = "none";
    }
}