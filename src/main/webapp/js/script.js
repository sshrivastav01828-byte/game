/* ============================================================
   script.js  -  Love Game
   Features:
     Page 1: Moving NO button, YES button grows, floating hearts
     Page 2: Falling confetti hearts, big heart animation
   ============================================================ */

/* ── Detect which page we are on ────────────────────────── */
var isYesPage      = document.body.classList.contains('page-yes');
var isQuestionPage = document.body.classList.contains('page-question');

/* ============================================================
   PAGE 1 — QUESTION PAGE
   ============================================================ */
if (isQuestionPage) {

  var noBtn       = document.getElementById('btn-no');
  var yesBtn      = document.getElementById('btn-yes');
  var escapeMsg   = document.getElementById('escape-msg');
  var hintText    = document.getElementById('hint-text');
  var noEscapes   = 0;
  var yesFontSize = 18; // px — grows every time NO escapes

  /* ── Messages shown after NO runs away ─────────────────── */
  var escapeMsgs = [
    "Haha, nice try! 😄",
    "The NO button doesn't want to be clicked! 😏",
    "Are you sure about that? 🤭",
    "It's like it KNOWS you shouldn't click it 😂",
    "Just click YES already! 🥺",
    "The NO button is scared of you! 😆",
    "Okay this is getting funny 😂",
    "Just say YES, you know you want to! 💕",
    "The NO button has trust issues 😅",
    "Okay I'll take that as a YES 🥰"
  ];

  /* ── Hint texts that update as YES grows ────────────────── */
  var hintMsgs = [
    "Choose wisely 😏",
    "YES is looking better already! 😉",
    "The YES button is growing with love 💕",
    "I think you like YES more 🥺",
    "YES is basically screaming at you now 😂",
    "Just. Click. YES. 🎉"
  ];

  /* ── Move NO button to a random screen position ─────────── */
  function moveNoButton() {
    /* Switch to fixed positioning so it can move anywhere */
    noBtn.style.position = 'fixed';
    noBtn.style.transition = 'left 0.15s, top 0.15s';

    var btnW = noBtn.offsetWidth  || 120;
    var btnH = noBtn.offsetHeight || 50;

    /* Pick a random spot that is NOT near the current position */
    var maxX = window.innerWidth  - btnW - 20;
    var maxY = window.innerHeight - btnH - 20;

    var newX, newY, attempts = 0;
    do {
      newX = Math.random() * maxX + 10;
      newY = Math.random() * maxY + 10;
      attempts++;
    } while (
      attempts < 20 &&
      Math.abs(newX - parseInt(noBtn.style.left || 0)) < 150 &&
      Math.abs(newY - parseInt(noBtn.style.top  || 0)) < 150
    );

    noBtn.style.left = newX + 'px';
    noBtn.style.top  = newY + 'px';

    /* Count escapes and update messages */
    noEscapes++;

    /* Update escape message */
    var msgIndex = Math.min(noEscapes - 1, escapeMsgs.length - 1);
    escapeMsg.textContent = escapeMsgs[msgIndex];

    /* Grow YES button */
    yesFontSize = Math.min(yesFontSize + 4, 42);
    yesBtn.style.fontSize = yesFontSize + 'px';
    yesBtn.style.padding  = Math.min(14 + noEscapes * 2, 28) + 'px ' +
                            Math.min(36 + noEscapes * 4, 70) + 'px';

    /* Update hint text */
    var hintIndex = Math.min(Math.floor(noEscapes / 2), hintMsgs.length - 1);
    hintText.textContent = hintMsgs[hintIndex];
  }

  /* ── Trigger on mouse enter (desktop) ───────────────────── */
  noBtn.addEventListener('mouseenter', function () {
    moveNoButton();
  });

  /* ── Trigger on touch start (mobile) ────────────────────── */
  noBtn.addEventListener('touchstart', function (e) {
    e.preventDefault();
    moveNoButton();
  });

  /* ── If somehow clicked (very hard to do!) ──────────────── */
  function noClicked() {
    escapeMsg.textContent = "Haha nope! Try again 😂";
    moveNoButton();
  }

  /* ── Floating hearts background animation ───────────────── */
  var heartsBg  = document.getElementById('hearts-bg');
  var heartEmojis = ['❤️', '💕', '💖', '💗', '💝', '💓', '🌸', '✨'];

  function createFloatingHeart() {
    var heart       = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

    var size     = Math.random() * 20 + 14;
    var startX   = Math.random() * 100;
    var duration = Math.random() * 6 + 5;
    var delay    = Math.random() * 3;

    heart.style.fontSize        = size + 'px';
    heart.style.left            = startX + 'vw';
    heart.style.animationDuration = duration + 's';
    heart.style.animationDelay    = delay + 's';

    heartsBg.appendChild(heart);

    /* Remove after animation completes */
    setTimeout(function () {
      if (heart.parentNode) heart.parentNode.removeChild(heart);
    }, (duration + delay) * 1000);
  }

  /* Create hearts periodically */
  setInterval(createFloatingHeart, 600);

  /* Create a burst of hearts on load */
  for (var i = 0; i < 8; i++) {
    setTimeout(createFloatingHeart, i * 200);
  }
}

/* ============================================================
   PAGE 2 — YES / CELEBRATION PAGE
   ============================================================ */
if (isYesPage) {

  var confettiContainer = document.getElementById('confetti');
  var confettiEmojis    = ['❤️', '💕', '💖', '💗', '💝', '💓', '🌸', '🎉', '✨', '💫', '🥰', '😍'];

  /* ── Create falling confetti hearts ─────────────────────── */
  function createConfettiHeart() {
    var heart       = document.createElement('div');
    heart.className = 'confetti-heart';
    heart.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];

    var size     = Math.random() * 22 + 16;
    var startX   = Math.random() * 100;
    var duration = Math.random() * 4 + 4;
    var delay    = Math.random() * 2;

    heart.style.fontSize           = size + 'px';
    heart.style.left               = startX + 'vw';
    heart.style.animationDuration  = duration + 's';
    heart.style.animationDelay     = delay + 's';

    confettiContainer.appendChild(heart);

    /* Remove after animation */
    setTimeout(function () {
      if (heart.parentNode) heart.parentNode.removeChild(heart);
    }, (duration + delay) * 1000);
  }

  /* ── Burst on page load then continuous ─────────────────── */
  for (var j = 0; j < 20; j++) {
    setTimeout(createConfettiHeart, j * 150);
  }
  setInterval(createConfettiHeart, 400);

  /* ── Big heart size pulse on click ──────────────────────── */
  var bigHeart = document.getElementById('big-heart');
  if (bigHeart) {
    bigHeart.addEventListener('click', function () {
      bigHeart.style.transform = 'scale(1.6)';
      setTimeout(function () {
        bigHeart.style.transform = 'scale(1)';
      }, 300);
    });
  }
}
