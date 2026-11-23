
// QA Portfolio - Dark / Light Mode

const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

// Restore the previously selected theme
let savedTheme = "dark";

try {
    savedTheme = localStorage.getItem("portfolio-theme") === "light"
        ? "light"
        : "dark";
} catch (error) {
    // Use the default theme if storage is unavailable
}

function applyTheme(theme) {
    root.setAttribute("data-theme", theme);

    themeToggle.textContent =
        theme === "dark" ? "☀ Light" : "☾ Dark";

    themeToggle.setAttribute(
        "aria-label",
        theme === "dark"
            ? "Switch to light mode"
            : "Switch to dark mode"
    );
}

applyTheme(savedTheme);

// Switch between dark and light themes
themeToggle.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    applyTheme(newTheme);

    try {
        localStorage.setItem("portfolio-theme", newTheme);
    } catch (error) {
        // Theme switching remains available without storage
    }
});
