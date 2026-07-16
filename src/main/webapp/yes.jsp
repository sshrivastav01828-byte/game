<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>💕 Yay! I Knew It!</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body class="page-yes">

  <!-- Confetti hearts rain -->
  <div class="confetti-container" id="confetti"></div>

  <!-- Main celebration card -->
  <div class="card card-yes" id="yes-card">

    <!-- Animated heart -->
    <div class="big-heart" id="big-heart">❤️</div>

    <!-- Main message -->
    <h1 class="yes-heading">Yay! I Knew It!</h1>

    <p class="yes-msg">
      You just made me the<br>
      <strong>happiest person</strong> in the world! 🌍
    </p>

    <!-- Love quote -->
    <div class="love-quote">
      <p>
        &ldquo; Every time I see you, I fall in love<br>
        all over again. &rdquo; 💕
      </p>
    </div>

    <!-- Photo placeholder -->
    <div class="photo-frame" id="photo-frame">
      <div class="photo-placeholder">
        <span>📸</span>
        <p>Add your photo here!</p>
        <small>Replace this div with an &lt;img&gt; tag</small>
      </div>
    </div>

    <!-- Bottom message -->
    <p class="bottom-msg">
      ❤️ &nbsp; I love you more than words can say &nbsp; ❤️
    </p>

    <!-- Play again button -->
    <a href="index.jsp" class="btn-back">
      ← Go Back
    </a>

  </div>

  <script src="js/script.js"></script>
</body>
</html>
