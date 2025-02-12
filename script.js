const messages = [
  "Misclicked?😅",
  "No???😱",
  "Why not??🥲",
  "Sure ka nagid???🥹",
  "Bb please...🥺",
  "Sure sure it's a no?🥺",
  "LAST CHANCE BB...🥺",
  "K",
  "Joke! huhu",
  "I'll be super sad🥲",
  "Sge last nagid...",
  "YES!!!😛",
  "",
  "",
];

let messageIndex = 0;

function handleNoClick() {
  // Make the No button look like Yes button when showing "YES!!!😛"
  if (messages[messageIndex - 1] === "YES!!!😛") {
    window.location.href = "yes.html";
  }
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;

  if (messages[messageIndex - 1] === "YES!!!😛") {
    noButton.style.backgroundColor = "#4caf50";
  }
}


function handleYesClick() {
  window.location.href = "yes.html";
}