document.addEventListener("DOMContentLoaded", () => {
    const roses = document.querySelectorAll(".rose");
    roses.forEach((rose, index) => {
        // Atrasa o movimento de cada rosa
        rose.style.animationDelay = `${index * 1}s`;
    });
});
