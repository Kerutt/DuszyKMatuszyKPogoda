// 10m inne cytaty motywujące
// 10m inne 2 słówka  z dwoma przykładami użycia 
// pogoda z wybranego serwisu
// czas do najbliższego dnia wolnego
// odliczanie czasu do wybranej daty

function fetchQuote() {
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        document.getElementById('quote').textContent = data.content + " - " + data.author;
    });
}

async function fetchTemperature(city) {
  const apiKey = 'f7348257c28048718bb111043240904';
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  
  try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      // Extract temperature from the response
      const temperatureCelsius = data.current.temp_c;
      const icon = data.current.condition.icon;
      const weatherCode = data.current.condition.code
      console.log(weatherCode)
      
      document.getElementById("temp").textContent = (`${temperatureCelsius}°C`);
      document.getElementById("icon").src = icon

      setWeatherEffx(weatherCode)
  } catch (error) {
      console.error('Error fetching temperature data:', error);
  }
}

function daysToFreeDay() {
    const today = new Date();
    const may1st = new Date(today.getFullYear(), 4, 1);
    if (today.getMonth() > 4 || (today.getMonth() === 4 && today.getDate() > 1)) {
        may1st.setFullYear(today.getFullYear() + 1);
    }
    const diff = may1st - today;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    document.getElementById('countdown').textContent = `Days until May 1st: ${days}`;
}

function daysUntilEndOfYear() {
    const today = new Date();
    const endOfYear = new Date(today.getFullYear(), 11, 31);
    const diff = endOfYear - today;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    document.getElementById('countdown').textContent += ` | Days until end of school year: ${days}`;
}

// Set interval to update quote every 10 minutes
setInterval(fetchQuote, 10 * 60 * 1000);
