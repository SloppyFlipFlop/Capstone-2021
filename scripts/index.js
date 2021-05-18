// All Javascript was made by David

// Sun icon
const sunnyIcon = `<svg class="" xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#f3f304" class="bi bi-brightness-high" viewBox="0 0 16 16">
<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg>`

// cloud
const cloudyIcon = `<i class="bi bi-brightness-high"></i>`

// raining
const rainingIcon = `<i class="bi bi-cloud-drizzle"></i>`

// humidity
const humidityIcon = `<i class="bi bi-droplet-fill"></i>`

// Night
const nightIcon = `<i class="bi bi-moon-stars"></i>`

// Night and cloudy
const NightAndCloudyIcon = `<i class="bi bi-cloud-moon"></i>`



// An array of all the days in the week
let daysInWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function msToHMS(duration) {

    let isPM = false

    var milliseconds = parseInt((duration % 1000) / 100),
        // seconds = parseInt((duration / 1000) % 60),
        minutes = parseInt((duration / (1000 * 60)) % 60),
        hours = parseInt((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    // seconds = (seconds < 10) ? "0" + seconds : seconds;


    if (hours > 12) {
        hours = hours - 12
        isPM = true
    }

    if (isPM == true) {
        return `${hours}:${minutes} PM`

    } else {
        return `${hours}:${minutes} AM`
    }

}

// An array that will hold all the temps of the day to be be used later
let dailyTempArray = [];
// An loop that loops though all the day to get the temp of the day and then it pushs that temp into the array "dailyTempArray".
for (let i = 0; i < data.daily.length; i++) {
    dailyTempArray.push(data.daily[i].temp.day)
}

// Returns icon base on weather
const getDayType = (currentDay) => {
    if (currentDay == "Clear") {
        return sunnyIcon;
    } else {
        return "";
    }
}

// An loop that goes through all the clases that have the name "weekday" and puts the data for that dat in the div.
for (let i = 0; i < 7; i++) {
    // Get the temp of the day
    let dailyTemp = data.daily[i].temp.day

    // Get day's and put them in an array
    let day = document.getElementsByClassName("weekday")
        // Gets certain day
        // example: monday

    let dayelement = day[i]

    let dayIcon = data.daily[i].weather[0].main


    // Outputs the stuff to the div's
    dayelement.innerHTML = `<div class="title col-6 text-center" style='color: lightblue'>${daysInWeek[i]}</div> 
        <div col-6 row mx-auto> 
            <div class=" d-flex justify-content-center">${getDayType(dayIcon)}</div> 
            <div class="text-center">${dailyTempArray[i]}</div>
        </div>`
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
}

// Progress bar animation

// Gets what color the bar and text will be based off of what temp its is today

let getTempColor = (temp) => {
    const tempArray = ['add8e6', 'E0E000', 'E05A00', 'E32636']

    if (temp >= 100) {
        return `#${tempArray[3]}`
    } else if (temp >= 95 && temp < 100) {
        return `#${tempArray[2]}`
    } else if (temp >= 80 && temp < 95) {
        return `#${tempArray[1]}`
    } else {
        return `#${tempArray[0]}`
    }
}

let currentTemp = Math.ceil(data.current.temp);

let barColor = getTempColor(currentTemp)



class ProgressRing extends HTMLElement {
    constructor() {
        super();
        const stroke = this.getAttribute('stroke');
        const radius = this.getAttribute('radius');

        const normalizedRadius = radius - stroke * 2;
        this._circumference = normalizedRadius * 2 * Math.PI;

        this._root = this.attachShadow({ mode: 'open' });
        // Stroke is the color of the bar
        this._root.innerHTML = `
        <svg
          height="${radius * 2}"
          width="${radius * 2}"
         >
           <circle
             stroke="${barColor}"
             stroke-dasharray="${this._circumference} ${this._circumference}"
             style="stroke-dashoffset:${this._circumference}"
             stroke-width="${stroke}"
             fill="transparent"
             r="${normalizedRadius}"
             cx="${radius}"
             cy="${radius}"
          />
          <text x="45" y="60" fill="${barColor}" alignment-baseline="middle" font-size="24">${currentTemp}</text>
        </svg>
        <style>
        text {
            display: flex;
  align-items: center;
  justify-content: center;
        }
          circle {
            transition: stroke-dashoffset 0.35s;
            transform: rotate(-90deg);
            transform-origin: 50% 50%;
          }
        </style>
      `;
    }


    setProgress(percent) {
        const offset = this._circumference - (percent / 100 * this._circumference);
        const circle = this._root.querySelector('circle');
        circle.style.strokeDashoffset = offset;
    }

    static get observedAttributes() {
        return ['progress'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'progress') {
            this.setProgress(newValue);
        }
    }
}

window.customElements.define('progress-ring', ProgressRing);

// emulate progress attribute change
let progress = 0;
const el = document.querySelector('progress-ring');


// console.log(currentTemp)

const interval = setInterval(() => {
    // Increase the bar by 1 every 10ms
    progress++;
    el.setAttribute('progress', progress);
    // stops the bar count if the bar equals the current temp
    if (progress === currentTemp)
        clearInterval(interval);
}, 10);


// Toady's high and low animations

let high = document.getElementById("todaysHigh")
let low = document.getElementById("todaysLow")

let feelsLike = data.current.feels_like
high.innerHTML = feelsLike;



let currentTime = data.current.dt



low.innerHTML = msToHMS(currentTime);