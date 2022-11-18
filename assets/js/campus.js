window.onload = function () {
  var depOne = document.querySelectorAll(".dep1");
  var depTwo = document.querySelectorAll(".dep2");
  console.log(depOne);
  console.log(depTwo);

  for (let i = 0; i < depOne.length; i++) {
    depOne[i].addEventListener("click", function () {
      this.classList.toggle("on");
    })
  }
}