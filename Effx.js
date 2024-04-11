
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

function setWeatherEffx() {
    
}
setTimeout(setWeatherEffx, 1000)
// Generate raindrops periodically
// setInterval(createRaindrop, 100); // Deszcz
//setInterval(createSnowflake, 100); // Snieg