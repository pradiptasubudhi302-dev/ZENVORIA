const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", () => {
    alert("Welcome to ZENVORIA! 🚀");
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});
