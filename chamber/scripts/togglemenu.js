function toggleMenu() {
    var menu = document.querySelector("nav"); 
    var hamburger = document.querySelector(".hamburger"); 

    if (menu.style.display === "block") {
        menu.style.display = "none";
        hamburger.innerHTML = "☰";
    } else {
        menu.style.display = "block";
        hamburger.innerHTML = "✕";
    }
}


window.addEventListener('resize', function() {
    var w = window.innerWidth;
    var menu = document.querySelector("nav");
    var hamburger = document.querySelector(".hamburger");

    if (w > 768 && menu.style.display === "none") {
        menu.style.display = "block";
        hamburger.innerHTML = "☰";
    } else if (w <= 768 && menu.style.display === "block") {
        menu.style.display = "none";
        hamburger.innerHTML = "☰";
    }
});
const modeButton = document.querySelector(".mode");
const main = document.querySelector("main");
const section = document.querySelectorAll("section");
const body = document.querySelector("body");
const h2 = document.querySelector("h2");
const p = document.querySelectorAll("p");
modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
        body.style.background = "#fff";
        h2.style.color = "#fff";
        section.forEach(section => {
            section.style.background = "#333";
            section.style.color = 'white';
          });
        p.forEach(p => {
            p.style.color = 'white';
          });
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#ddd";
        body.style.background = "#ddd";
		main.style.color = "#000";
        h2.style.color = "#000";
		section.forEach(section => {
            section.style.background = "#fff";
            section.style.color = 'black';
          });
        p.forEach(p => {
            p.style.color = 'black';
          });
        modeButton.textContent = "🕶️";
	}
});

