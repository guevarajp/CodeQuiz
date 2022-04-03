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
  if (document.getElementById("three").checked) {
    score++;
  } else if (document.checked) {
    score--;
  }
  if (document.getElementById("four").checked) {
    score++;
  } else if (document.checked) {
    score--;
  }
  if (document.getElementById("five").checked) {
    score++;
  } else if (document.checked) {
    score--;
  }
  if (document.getElementById("six").checked) {
    score++;
  } else if (document.checked) {
    score--;
  }
  alert(score);
  console.log(score);
}
