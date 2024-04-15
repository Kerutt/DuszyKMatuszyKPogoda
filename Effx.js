
function start() {
    fetchTemperature("Swidnica");
    var currentDate = new Date()
    let day = String(currentDate.getDate()).padStart(2, '0')
    let month = String(currentDate.getMonth()+1).padStart(2, '0')
    
    document.getElementById("date").textContent = day + "." + month
}


// Create raindrops
function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindrop.style.left = `${Math.random() * window.innerWidth}px`;
    raindrop.style.rotate = `${Math.random() * -30}deg`
    document.body.appendChild(raindrop);
    setTimeout(() => {
        raindrop.remove(); // Remove raindrop after it reaches the bottom
    }, 5000);
}

function createSnowflake() {
    const snow = document.createElement('img');
    snow.classList.add('snow');
    snow.style.left = `${Math.random() * window.innerWidth-100}px`;
    snow.style.rotate = `${Math.random() * -30}deg`
    snow.src = "snowflake.png"
    document.body.appendChild(snow);
    setTimeout(() => {
        snow.remove(); // Remove snowflake after it reaches the bottom
    }, 5000);
}

function createFog(value) {
    document.body.style.filter = `contrast(`+value+`%)`;
}

function createClouds() {
    for (let index = 0; index < 3; index++) {
        const cloud = document.createElement('img');
        cloud.classList.add('cloud');
        cloud.src = 'cloud.png';
        document.getElementById("effects").appendChild(cloud);
    }
    createFog(80)
}

function createSun() {
    const sun = document.createElement('div')
    sun.classList.add('sun');
    document.getElementById("effects").style.justifyContent = 'flex-end';
    document.getElementById("effects").appendChild(sun);
}

async function setWeatherEffx(weatherCode) {
    const codes = await fetch('./weatherCodes.json')
    .then(function(response) {
        return response.json();
    });

    if (codes["Sunny"].includes(weatherCode)) {
        createSun()
    } else if(codes["Rainy"].includes(weatherCode)) {
        setInterval(createRaindrop, 100)
    } else if(codes["Snowy"].includes(weatherCode)) {
        setInterval(createSnowflake, 100)
    } else if(codes["Foggy"].includes(weatherCode)) {
        createFog(50)
    } else if(codes["Cloudy"].includes(weatherCode)) {
        createClouds()
    } else {
        console.log(weatherCode)
    }
}