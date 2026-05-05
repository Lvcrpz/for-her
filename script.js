function openLetter() {
  document.getElementById("envelope").style.display = "none";
  document.getElementById("flowers").classList.remove("hidden");

  // play music AFTER click (allowed by browser)
  document.getElementById("music").play();

  setTimeout(() => {
    document.getElementById("flowers").classList.add("hidden");
    document.getElementById("bouquet").classList.remove("hidden");
    document.getElementById("messageIcon").classList.remove("hidden");
  }, 2500);
}

function showMessage() {
  document.getElementById("messageBox").classList.toggle("hidden");
}