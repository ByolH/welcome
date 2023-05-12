const clock = document.querySelector("h2#clock");
const day = document.querySelector("h2#day");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const month = date.getMonth();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dateToday = date.getDate();
  const year = date.getFullYear();
  clock.innerText = `${hours}:${minutes}`;
  day.innerText = `${monthNames[month]} ${dateToday}, ${year}`;
}

// setInterval(function, time(ms)) 몇 초 마다 나타나는 지
// setInterval(sayHello, 5000);

// setTimeout(function, time(ms)) 몇 초 후에 보여지는 지
// setTimeout(sayHello, 5000);

getClock(); // 페이지 열자마자 시간보임. 이거 없으면 1초 기다려야 생김
setInterval(getClock, 1000);

// //////////////////////////////////////////////////
// // 시계 표현할 수 있는 간단한 방법 - 시각 뒤 AM/PM 이 표시된다
// function sayHello() {
//   clock.innerText = new Date().toLocaleTimeString();
// }
// sayHello();
// setInterval(sayHello, 1000);
