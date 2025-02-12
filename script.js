function openModal(imgElement) {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("modalImg").src = imgElement.src;
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
