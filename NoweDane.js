function getQuote() {
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(async data => {
        const translatedText = await transalateQuote(data.content); // Wait for translation
        const textWithTranslation = translatedText + " - " + data.author;
        document.getElementById('quote').textContent = textWithTranslation;
    });
    words();
}

let setting = 'en';
function selectLanguage(set) {
    setting = set;
}

async function transalateQuote(content) {
    const res = await fetch("http://localhost:5000/translate", {
        method: "POST",
        body: JSON.stringify({
            q: content,
            source: "en",
            target: setting,
            format: "text",
            api_key: ""
        }),
        headers: { "Content-Type": "application/json" }
    });
    
    const data = await res.json();
    console.log(data);
    return data.translatedText;
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

let yearInput;
let monthInput;
let dayInput;

let yearInput1;
let monthInput1;
let dayInput1;

document.addEventListener('DOMContentLoaded', function() {
    calcTime();
});

function calcTime() {
    yearInput = document.getElementById('year');
    monthInput = document.getElementById('month');
    dayInput = document.getElementById('day');

    yearInput1 = document.getElementById('year1');
    monthInput1 = document.getElementById('month1');
    dayInput1 = document.getElementById('day1')

    yearInput.addEventListener('change', handleInputChange);
    monthInput.addEventListener('change', handleInputChange);
    dayInput.addEventListener('change', handleInputChange);

    yearInput1.addEventListener('change', handleInputChange);
    monthInput1.addEventListener('change', handleInputChange);
    dayInput1.addEventListener('change', handleInputChange);


}
function handleInputChange(event) {
    const date1 = new Date(yearInput.value, monthInput.value, dayInput.value); 
    const date2 = new Date(yearInput1.value, monthInput1.value, dayInput1.value);
    calcTimeFinal(date1, date2); 
    
}
function calcTimeFinal(date1, date2) {
    if (yearInput.value == "" || monthInput.value == "" || dayInput.value == "") {return;}
    if (yearInput1.value == "" || monthInput1.value == "" || dayInput1.value == "") {return;}
    
    const timeToDate = document.getElementById('data-text-id');
    // Calculate the difference in milliseconds
    const differenceInMilliseconds = Math.abs(date1.getTime() - date2.getTime());

    // Convert milliseconds to days
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    const differenceInDays = Math.floor(differenceInMilliseconds / millisecondsInDay);

    // Calculate years
    let years = Math.floor(differenceInDays / 365);
    let remainingDays = differenceInDays % 365;

    // Adjust years for leap years
    while (remainingDays >= 0) {
        const leapYear = oddYear(date1.getFullYear() + years);
        const daysInYear = leapYear ? 366 : 365;

        if (remainingDays >= daysInYear) {
            years++;
            remainingDays -= daysInYear;
        } else {
            break;
        }
    }

    // Calculate months
    let months = Math.floor(remainingDays / 30);
    remainingDays %= 30;

    timeToDate.textContent = `${years} lat : ${months} miesięcy : ${remainingDays} dni`;
}
function oddYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function exampleUsesOfWordsForegin() {
    
}

function daysUntilChosenDate(day, month) {
    const today = new Date();
    const chosenDate = new Date(today.getFullYear(), month-1, day);
    const diff = chosenDate - today;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    console.log(today.getMonth())
    return days
}

function daysUntilEndOfSchool() {
    const days = daysUntilChosenDate(21, 6);
    document.getElementById("endofschool").textContent = "Do końca roku szkolnego zostało: " + days + " dni";
}

function daysUntilNextFreeDay() {
    const days = daysUntilChosenDate(1, 5)
    document.getElementById("freeday").textContent = "Dzień wolny za: " + days + " dni"
}

const wordExamples = [
    "Hello - Hello, how are you today?",
    "World - The world is a big place with so much to explore.",
    "Beautiful - She looked absolutely beautiful in that dress.",
    "Friend - I'm meeting my friend for coffee later.",
    "Happiness - Finding happiness in small moments is important.",
    "Adventure - Going on an adventure to discover new places.",
    "Delicious - The food at that restaurant is always delicious.",
    "Love - She fell in love with him the moment they met.",
    "Sunshine - The warm sunshine brightened up the whole room.",
    "Dream - Following your dreams can lead to amazing experiences.",
    "Smile - Her smile could light up the darkest of rooms.",
    "Success - Hard work and determination are key to achieving success.",
    "Peace - Finding peace and tranquility in nature.",
    "Magic - There's a certain magic in the air during the holiday season.",
    "Inspiration - Reading biographies of successful people can be a great source of inspiration."
];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let index;
async function words ()
{
    index = getRandomInt(0, wordExamples.length - 1);
    translatedWord =  await transalateQuote(wordExamples[index])
    document.getElementById('1').textContent = translatedWord;
    document.getElementById('2').textContent = wordExamples[index];
}