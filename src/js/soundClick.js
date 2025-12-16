const btn = document.getElementById("playBtn");
const sound = document.getElementById("clickSound");

btn.addEventListener("click", (e) => {
    e.preventDefault(); // STOP pindah halaman dulu

    sound.currentTime = 0;
    sound.play();

    setTimeout(() => {
        window.location.href = "page/game.html";
    }, 150);
});