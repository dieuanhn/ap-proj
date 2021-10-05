const score = () => {
  if (score < 40) {
    document.getElementById("result").innerHTML += "<p>you have bad taste</p>";
  }

  if (score > 40) {
    document.getElementById("result").innerHTML += "<p>you have go taste</p>";
  }
};
