// 배경이미지
window.onload = () => {
  const img = document.getElementById("img");

  const images = [
    "./images/배경1.png",
    "./images/배경2.png",
    "./images/배경3.png",
    "./images/배경4.png",
  ]


  let index = Math.floor(Math.random() * images.length);
  img.src = images[index];
}


// 시간 함수
function time() {
  let today = new Date();

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  let clock = document.getElementById("clock");
  clock.innerHTML = `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}`: seconds}`
}

setInterval(time, 1000);


let nameInput = document.getElementById("name");
let content = document.getElementById("content");
nameInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    content.innerText = "Hello " + nameInput.value;
    nameInput.style.display = 'none';
  }
})
