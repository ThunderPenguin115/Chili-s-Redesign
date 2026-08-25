function theme() {
    const root = document.documentElement;

    if (root.classList.contains("dark-theme")) {
        // Switch to light
        root.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");
    } else {
        // Switch to dark
        root.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
    }
}

document.addEventListener("DOMContentLoaded", function () {

    const themeButton = document.getElementById("themeSwitch");

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.documentElement.classList.add("dark-theme");
    }

    // Make button work
    if (themeButton) {
        themeButton.addEventListener("click", theme);
    }

});
