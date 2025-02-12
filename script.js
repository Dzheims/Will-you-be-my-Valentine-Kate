const messages = [
  "Did you misclick or something bb?😅",
  "Hmmm?🤔",
  "Did you just say no???🥹",
  "What?!?!? No wayyy😫",
  "Whyyyyyy?😭",
  "Bb please...🥺",
  "Are you really sure bb???🥹",
  "Last chance bb...🥺",
  "LAST LAST CHANCE BB...🥺",
  "I'm gonna be so sad bb☹️",
  "You can't say no to me bb🥲",
  "Sorry, but you're not getting out of this🤭",
  "I'm not even gonna ask you again...🤷‍♂️",
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
  if (messageIndex === messages.length - 1) {
    window.location.href = "yes.html";
  }
}

function handleYesClick() {
  window.location.href = "yes.html";
}