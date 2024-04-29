const date = new Date();

let currentMonth = date.getMonth();

// get current year
let currentYear = date.getFullYear();

const months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"]
const weekDays = ["Ndz", "Pn", "Wt", "Śr", "Czw", "Pt", "Sb"];
function calendarFill() {
    Calendar();
}

function Calendar() {
    const daysContainer = document.querySelector(".days");
    const month = document.querySelector(".month")
    date.setDate(1);
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const lastDayIndex = lastDay.getDay();
    const lastDayDate = lastDay.getDate();
    const prevLastDay = new Date(currentYear, currentMonth, 0);
    const prevLastDayDate = prevLastDay.getDate();
    const nextDays = 6 - lastDayIndex ;

    let days = "";
    let monthUpdate = "";

    monthUpdate += months[currentMonth];
  
    for (let i = 0; i <= 6; i++) {
        days += `<div class="day name">${weekDays[i]}</div>`;
    }

    for (let x = firstDay.getDay(); x > 0; x--) {
      days += `<div class="day prev">${prevLastDayDate - x + 1}</div>`;
    }
  
    for (let i = 1; i <= lastDayDate; i++) {
      if (
        i === new Date().getDate() &&
        currentMonth === new Date().getMonth() &&
        currentYear === new Date().getFullYear()
      ) {
        days += `<div class="day today">${i}</div>`;
      } else {
        days += `<button onclick="myFunction()" class="day ">${i}</button>`;
      }
    }
  
    for (let j = 1; j <= nextDays; j++) {
      days += `<div class="day next">${j}</div>`;
    }
    daysContainer.innerHTML = days;
    ///month.innerHTML = monthUpdate;
}

function getCalendarDate() {

}