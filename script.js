const button = document.querySelector(".cookie-banner button");
const banner = document.querySelector(".cookie-banner");

if (localStorage.getItem("cookieAccepted") === "true") {
    banner.style.display = "none";
}

button.addEventListener("click", function() {

    console.log("Cookie accepted");
    localStorage.setItem("cookieAccepted", "true");
    banner.style.display = "none";
});