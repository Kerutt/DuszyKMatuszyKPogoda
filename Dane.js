// 10m inne cytaty motywujące
// 10m inne 2 słówka  z dwoma przykładami użycia 
// pogoda z wybranego serwisu
// czas do najbliższego dnia wolnego
// odliczanie czasu do wybranej daty

let text1Quote;
let text1ToFree;
let text1ToVacation;
let textUsesE;
let textUsesD;

textUsesD = "deeeeeeeeee";
textUsesE = "Eeeeeeeeeee";

let quotesBool;
quotesBool = true;

function fetchQuote() {
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        text1Quote = data.content + " - " + data.author
        document.getElementById('quote').textContent = text1Quote;
    });
}

async function fetchTemperature(city) {
  const apiKey = 'f7348257c28048718bb111043240904';
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  
  try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const tempC = data.current.temp_c;
      const windSpedKph = data.current.wind_kph;
      const cloudCov = data.current.cloud;
      const weatherLogo = data.current.condition;
      const isDay = data.current.is_day;
      const weatherCode = data.current.condition.code
      
      document.getElementById("temp").textContent = (`${tempC}°C`);
      document.getElementById("icon").src = weatherLogo.icon;

      setWeatherEffx(weatherCode)
  } catch (error) {
      console.error('Error fetching temperature data:', error);
  }
}

function daysUntilChosenDate(day, month) {
    const today = new Date();
    const chosenDate = new Date(today.getFullYear(), month-1, day);
    const diff = chosenDate - today;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    console.log(today.getMonth())
    return days
}

function daysToFreeDay() {
    const days = daysUntilChosenDate(1,5)
    document.getElementById('freeday').textContent = `Dni do wolnego: ${days}`;
}

function daysUntilEndOfSchoolYear() {
    const days = daysUntilChosenDate(21,6)
    document.getElementById('endofschoolyear').textContent += `Dni do końca roku szkolnego: ${days}`;
}

function chopText() {

}

var lastScrollTop = 0;

window.addEventListener("wheel", event => {
    const delta = Math.sign(event.deltaY);
    scroll(delta)
});

let i;
i = 0;
let nd;
nd = false;
function scroll(delta) {
    if (quotesBool) {
        if (delta == 1)
        {
            if (text1Quote == "")
            {
                document.getElementById('usesE').textContent = textUsesE.slice(0, i);
                if (document.getElementById('usesE').textContent = textUsesE)
                {
                    if (!nd) {i = 0; nd = true;}
                    document.getElementById('usesD').textContent = textUsesD.slice(0, i); 
                }
            }
            else
            {
                text1Quote = text1Quote.slice(0, -1);
                document.getElementById('quote').textContent = text1Quote;
            }
        }
        if (delta == -1)
        {
            if (text1Quote == "")
            {
                document.getElementById('usesE').textContent = textUsesE.slice(0, -1);
                if (document.getElementById('usesE').textContent = " ")
                {
                    document.getElementById('usesD').textContent = textUsesD.slice(0, -1); 
                }
            }
            else
            {

            }
        }
    }
}

setInterval(fetchQuote, 10 * 60 * 1000);
