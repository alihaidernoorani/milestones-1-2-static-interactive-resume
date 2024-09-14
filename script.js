"use strict";
const button = (document.getElementById("toggleSkills"));
button.addEventListener("click", () => {
    const skillsElement = (document.getElementById("skills"));
    const currentDisplay = skillsElement.style.display;
    skillsElement.style.display = currentDisplay === "none" ? "block" : "none";
});
