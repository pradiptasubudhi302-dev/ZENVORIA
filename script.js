const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", () => {
    alert("Welcome to ZENVORIA! 🚀");
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});
