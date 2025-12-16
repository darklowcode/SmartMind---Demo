const questionEl = document.getElementById("questionText");
const answersEl = document.getElementById("answers");
const scoreEl = document.getElementById("score");
const streakEl = document.getElementById("streak");
const hintEl = document.getElementById("hint");

// SOUND
const sfxCorrect = document.getElementById("sfxCorrect");
const sfxWrong = document.getElementById("sfxWrong");

let score = 0;
let streak = 0;

// statistik
let correctCount = 0;
let wrongCount = 0;

// pool soal biar tidak terulang
let pool = [...questions];
shuffle(pool);

renderHUD();
startNextQuestion();

function startNextQuestion() {
  // selesai jika soal habis
  if (pool.length === 0) {
    showEndScreen();
    return;
  }

  answersEl.classList.add("hidden");
  answersEl.innerHTML = "";
  hintEl.textContent = "Jawaban akan muncul setelah soal selesai “diketik”.";

  const q = pool.pop();

  typeText(q.question, 25, () => {
    showAnswers(q);
    answersEl.classList.remove("hidden");
    hintEl.textContent = "Pilih jawabanmu!";
  });
}

function showAnswers(q) {
  q.choices.forEach((choice, idx) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = choice;

    btn.addEventListener("click", () => {
      // disable semua tombol setelah klik
      [...answersEl.querySelectorAll("button")].forEach((b) => (b.disabled = true));

      const isCorrect = idx === q.answer;

      if (isCorrect) {
        playSFX(sfxCorrect);
        correctCount++;

        streak += 1;
        const mult = Math.pow(2, streak - 1); // 1x,2x,4x,...
        score += 10 * mult;
      } else {
        playSFX(sfxWrong);
        wrongCount++;

        score -= 20;
        streak = 0;
      }

      renderHUD();
      setTimeout(startNextQuestion, 500);
    });

    answersEl.appendChild(btn);
  });
}

function showEndScreen() {
  // HIDE kolom soal
  const questionBox = document.getElementById("questionBox");
  if (questionBox) questionBox.style.display = "none";

  // HIDE HUD kanan atas
  const hud = document.getElementById("hud");
  if (hud) hud.style.display = "none";

  // HIDE kolom soal
  if (questionBox) questionBox.style.display = "none";

  // Bersihkan teks hint 
  hintEl.textContent = "";

  // Tampilkan layout end screen
  answersEl.classList.remove("hidden");
  answersEl.classList.add("end-clean"); // class khusus end screen

  answersEl.innerHTML = `
    <div class="end-wrap">
      <h2 class="end-heading">GAME SELESAI</h2>

      <div class="end-grid">
        <!-- KIRI: SCORE -->
        <div class="end-card">
          <div class="end-card-title">SCORE TOTAL</div>
          <div id="finalScore" class="end-score-number">0</div>
        </div>

        <!-- KANAN: BENAR / SALAH -->
        <div class="end-card">
          <div class="end-card-title">STATISTIK</div>
          <div class="end-stats-vertical">
            <div class="stat-row">✅ Benar: <span id="finalCorrect">0</span></div>
            <div class="stat-row">❌ Salah: <span id="finalWrong">0</span></div>
          </div>
        </div>
      </div>

      <!-- Tombol vertical -->
      <div class="end-actions-vertical">
        <button class="answer-btn" id="btnMenu">Kembali ke Menu</button>
        <button class="answer-btn" id="btnRestart">Main Lagi</button>
      </div>
    </div>
  `;

  // Animasi angka
  animateCountTo(document.getElementById("finalCorrect"), correctCount, 500);
  animateCountTo(document.getElementById("finalWrong"), wrongCount, 500);
  animateRollingScore(document.getElementById("finalScore"), score, 1400);

  // Tombol
  document.getElementById("btnMenu").addEventListener("click", () => {
    window.location.href = "../index.html"; // sesuaikan kalau beda folder
  });

  document.getElementById("btnRestart").addEventListener("click", () => {
    location.reload();
  });
}

function renderHUD() {
  scoreEl.textContent = score;
  streakEl.textContent = streak;
}

// efek mengetik
function typeText(text, speedMs, done) {
  questionEl.textContent = "";
  let i = 0;

  const tick = () => {
    questionEl.textContent += text[i];
    i++;
    if (i < text.length) {
      setTimeout(tick, speedMs);
    } else {
      done?.();
    }
  };

  tick();
}

// shuffle Fisher–Yates
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// helper play sound
function playSFX(audioEl) {
  if (!audioEl) return;
  audioEl.currentTime = 0;
  audioEl.play().catch(() => {});
}

function animateRollingScore(el, target, durationMs = 1200) {
  if (!el) return;

  const start = 0;
  const end = Math.floor(target);
  const startTime = performance.now();

  // efek "random/slot" di awal
  const scrambleTime = Math.min(450, durationMs * 0.35);
  let scrambleTimer = null;

  scrambleTimer = setInterval(() => {
    el.textContent = String(randomInt(-999, 9999));
  }, 40);

  const step = (now) => {
    const t = now - startTime;

    if (t >= scrambleTime && scrambleTimer) {
      clearInterval(scrambleTimer);
      scrambleTimer = null;
    }

    const progress = Math.min(1, t / durationMs);
    const eased = easeOutCubic(progress);
    const value = Math.floor(start + (end - start) * eased);

    // tampilkan nilai yang "naik" cepat
    el.textContent = String(value);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = String(end);
    }
  };

  requestAnimationFrame(step);
}

function animateCountTo(el, target, durationMs = 500) {
  if (!el) return;

  const start = 0;
  const end = Math.max(0, Math.floor(target));
  const startTime = performance.now();

  const step = (now) => {
    const progress = Math.min(1, (now - startTime) / durationMs);
    const eased = easeOutCubic(progress);
    el.textContent = String(Math.floor(start + (end - start) * eased));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

function easeOutCubic(x) {
  return 1 - Math.pow(1 - x, 3);
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
