const button = (document.getElementById("toggleSkills")) as HTMLButtonElement;

button.addEventListener("click",() => {
    const skillsElement = (document.getElementById("skills")) as HTMLElement;
    const currentDisplay = skillsElement.style.display;

    skillsElement.style.display = currentDisplay === "none" ? "block" : "none";
})