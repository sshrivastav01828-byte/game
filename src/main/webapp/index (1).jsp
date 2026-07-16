<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>💕 I Have a Question For You...</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body class="page-question">

  <!-- Floating hearts background -->
  <div class="hearts-bg" id="hearts-bg"></div>

  <!-- Main card -->
  <div class="card" id="main-card">

    <!-- Top emoji -->
    <div class="big-emoji">🥺</div>

    <!-- Heading -->
    <h1 class="question-heading">Hey... 💕</h1>
    <p class="question-sub">I have something very important<br>to ask you...</p>

    <!-- The actual question -->
    <div class="question-box">
      <span class="heart-icon">❤️</span>
      <h2 class="question-text">Do you love me?</h2>
      <span class="heart-icon">❤️</span>
    </div>

    <!-- YES grows bigger each time NO is avoided -->
    <p class="hint-text" id="hint-text">Choose wisely 😏</p>

    <!-- Buttons -->
    <div class="btn-container" id="btn-container">
      <a href="yes.jsp" class="btn-yes" id="btn-yes">
        YES ❤️
      </a>
      <button class="btn-no" id="btn-no" onclick="noClicked()">
        NO 😒
      </button>
    </div>

    <!-- Counter message - shows after NO is avoided -->
    <p class="escape-msg" id="escape-msg"></p>

  </div>

  <script src="js/script.js"></script>
</body>
</html>
