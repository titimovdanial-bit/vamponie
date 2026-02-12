const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const questionBox = document.getElementById("questionBox");
const answerBox = document.getElementById("answerBox");

// Убегающая кнопка (tap)
noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("mouseover", moveButton);

function moveButton() {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// Да
yesBtn.addEventListener("click", () => {
    questionBox.classList.add("hidden");
    answerBox.classList.remove("hidden");
});

// Сердечки
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 12) + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}, 350);
