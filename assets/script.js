function quiz() {
  var score = 0;
  if (document.getElementById("one").checked) {
    score++;
  } else if (document.checked) {
    score--;
  }
  if (document.getElementById("two").checked) {
    score++;
  } else if (document.checked) {
    score--;
  }
  console.log(score);
}
