let userInput = document.querySelector(".input");
userInput.max = new Date().toISOString().split("T")[0];
// console.log(userInput.max);
let calculateBtn = document.querySelector(".calculateBtn");
let result = document.querySelector(".result");

calculateBtn.addEventListener("click", () => {
  calculateAge();
});

function calculateAge() {
  let birthDate = new Date(userInput.value);
  //console.log(birthDate);
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();
  //   console.log(d1, m1, y1);
  let currentDate = new Date();
  let d2 = currentDate.getDate();
  let m2 = currentDate.getMonth() + 1;
  let y2 = currentDate.getFullYear();
  //   console.log(d2, m2, y2);

  let d3, m3, y3;
  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = dayInaMonth(y1, d1) + d2 - d1; // here is y1 m1 not y2 m2 cause we need to calculate day that i passed already and y2 m2 is the current date.so we are breaking a month from my age (day that passed) and adding in here with d2..and that month is month that passed s we're using y1,m1 in dayInaMonth
  }
  if (m3 < 0) {
    y3--;
    m3 = 11;
  }
  //   console.log(d3, m3, y3);
  result.innerHTML = ` your age is <span>${y3} </span> year <span>${m3} </span> month <span>${d3} </span> day`;
}

function dayInaMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
