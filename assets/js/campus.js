window.onload = function () {
  var depOne = document.querySelectorAll(".li01");
  var depTwo = document.querySelectorAll(".dep2");
  console.log(depOne);
  console.log(depTwo);

  // for (let i = 0; i < depOne.length; i++) {
  //   depOne[i].addEventListener("click", function () {
  //     this.nextSibling.classList.add("on");
  //   })
  // }

  // depOne.addEventListener("click", function () {
  //   // depTwo.style.height = "350px";
  //   this.classList.toggle('on');
  //   depTwo.classList.toggle("on");
  // })

  for (let i = 0; i < depOne.length; i++) {
    depOne[i].addEventListener("click", function () {
    this.classList.toggle('on');
    depTwo[i].classList.toggle("on");
  })
  }
}