var search = document.querySelector(".input");

var city = document.querySelector(".name-city");
var nameCountry = document.querySelector(".country");

var city_below = document.querySelector('.name-city-below')
var country_below = document.querySelector('.country-below')

var indexoc = document.querySelector(".value");
var des = document.querySelector(".des");
var indexWind = document.querySelector(".value-wind");
var indexVisi = document.querySelector(".value-visi");
var indexHum = document.querySelector(".value-hum");
var indexUv = document.querySelector(".value-Uv");
var foreSub = document.querySelector(".feelike-index");
var indexSub = document.querySelector(".index-sub");
var indexLat = document.querySelector(".lat-index");
var indexLon = document.querySelector(".lon-index");
var body = document.querySelector("body");
var svg = document.querySelector(".svg");

async function changeWeatherUI(valueSearch) {

  let apiURL = `http://api.weatherapi.com/v1/current.json?key=4a2a6614a1be4a83b85172809232808&q=${valueSearch}&aqi=no`;

  let data = await fetch(apiURL).then((res) => res.json());
  // console.log(data);
  

  city.innerText = data.location.name;

  city_below.innerText = data.location.name;
  country_below.innerText = data.location.country;

  nameCountry.innerText = data.location.country;
  des.innerText = data.current.condition.text;
  let temp = data.current.temp_c;

  indexoc.innerHTML = `${temp}<sup>o</sup>`;
  indexWind.innerText = data.current.wind_kph + " km";
  indexVisi.innerText = data.current.vis_km + " km";
  indexHum.innerText = data.current.humidity + "%";
  indexUv.innerText = data.current.uv + " mW/cm2";
  foreSub.innerText = data.current.feelslike_c;
  indexSub.innerText = data.current.pressure_mb + " mb";
  indexLat.innerText = data.location.lat;
  indexLon.innerText = data.location.lon;

  if (temp <= 20) {
    body.setAttribute("class", "cold");
  } else if (temp >= 30) {
    body.setAttribute("class", "hot");
  } else {
    body.setAttribute("class", "oke");
  }
  
}

// changeWeatherUI();

search.addEventListener("keypress", function (e) {
  let valueSearch = search.value.trim();
  if (e.code === "Enter") 
  changeWeatherUI(valueSearch);

});
window.addEventListener("load", function () {
  changeWeatherUI("London");
});
svg.addEventListener("click",function(){
  let valueSearch = search.value.trim();
  changeWeatherUI(valueSearch);
})



// scroll
ScrollReveal().reveal('.fade-in', {
  delay: 400,         // Độ trễ trong milliseconds
  duration: 800,      // Thời gian hoàn thành animation trong milliseconds
  distance: '70px',   // Khoảng cách mà phần tử di chuyển trong quá trình animation
  origin: 'bottom',   // Hướng bắt đầu của animation
  easing: 'ease-out', // Hàm làm mềm cho animation
  reset: true         // Đặt lại animation khi phần tử ra khỏi tầm nhìn
});
