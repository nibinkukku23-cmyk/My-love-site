const nameText = document.getElementById("name");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const timerText = document.getElementById("timer");
const bgMusic = document.getElementById("bgMusic");

/* ------------------------ */
/* 1️⃣ Name typing animation */
const herName = "Navami ❤️";
let i = 0;

function typeName() {
    if (i < herName.length) {
        nameText.innerHTML += herName.charAt(i);
        i++;
        setTimeout(typeName, 120);
    }
}
typeName();

/* ------------------------ */
/* 2️⃣ Countdown timer */
let time = 15;
const countdown = setInterval(() => {
    timerText.innerText = `Answer before: ${time}s ⏳`;
    time--;
    if (time < 0) {
        clearInterval(countdown);
        timerText.innerText = "My heart is still waiting ❤️";
    }
}, 1000);

/* ------------------------ */
/* 3️⃣ Play music on first tap */
document.body.addEventListener("click", () => {
    bgMusic.play();
}, { once: true });

/* ------------------------ */
/* 4️⃣ NO button runs away and angry texts */
let noCount = 0;
const angryTexts = [
    "😠 Navami! Think again!",
    "😤 Why would you say no?",
    "😡 I'm getting angry now!",
    "💔 That hurts...",
    "😠 It's Your Last chance!"
];

function moveButton() {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 80 - 40;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("click", () => {
    if (noCount < angryTexts.length) {
        message.innerHTML = `<p>${angryTexts[noCount]}</p>`;
        noCount++;
    } else {
        message.innerHTML = `<p>😤 You have no option now!</p>`;
    }
});

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

/* ------------------------ */
/* 5️⃣ YES button action */
yesBtn.addEventListener("click", () => {
    message.innerHTML = `
        <h2>❤️ I knew it! ❤️</h2>
        <img src="https://imgur.com/a/AY9rAsi.jpg" alt="Cute Couple">
        <p>
            "Distance means so little when someone means so much.<br>
          
            Happy 1st Anniversary and Happy Valentine's Day Dear💕"
        </p>
        <p>
            You are my favorite notification, my safe place,
            and my forever. 🌍❤️
        </p>
    `;
    timerText.innerText = "";
});