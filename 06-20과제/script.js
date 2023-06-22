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



// 날씨 정보 불러오기

const weather = document.getElementById("weather");
const API_KEY = '812b84c306fc58f8d71e289252581d42';

function getWeather(lat, lon) {
  console.log(lat, lon);
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`).then(function (response) {
    return response.json();
  })
  .then(function (json) {
    console.log(json);
    const city = json.name;
    const weatherData = json.weather[0].main;
    const temp = json.main.temp;
    // 섭씨 온도로 변환
    const tempCelsius = (temp - 273.15).toFixed(1);
    let symbol = ""
    if (weatherData === "Clouds") {
      symbol = "🌩️"
    } else if (weatherData === "Rain") {
      symbol = "🌧️"
    } else if (weatherData === "Snow") {
      symbol = "❄️"
    } else {
      symbol = "🌤️"
    }

    weather.innerText = `${tempCelsius}°C ${city} ${symbol}`
  })
}


function handleGeoSuccess(pos) {
  let latitude = pos.coords.latitude
  let longitude = pos.coords.longitude
  getWeather(latitude, longitude)
}

function handleGeoError() {
  console.log("error!")
}

function init() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

init();


// 할 일 목록
const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todoList");
const todoContainer = document.getElementById("todo-container");

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const todoText = todoList.value;
  if (todoText !== '') {
    addTodoItem(todoText);
    todoList.value = '';
  }
});

function addTodoItem(todo) {
  const todoItem = document.createElement('div');
  todoItem.innerHTML = `
    <div class="div-todo">${todo}
    <button onclick='this.parentNode.remove()' class="removeBtn">삭제</button>
    </div>
  `;

  todoContainer.appendChild(todoItem);
}
