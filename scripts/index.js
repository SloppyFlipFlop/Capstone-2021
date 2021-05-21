// All Javascript was made by David


// Gets what color the bar and text will be based off of what temp its is today

let getTempColor = (temp) => {
    const tempArray = ['add8e6', 'FFEC5E', 'E05A00', 'E32636']

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


// An array that will hold all the temps of the day to be be used later
let dailyTempArray = [];
// An loop that loops though all the day to get the temp of the day and then it pushs that temp into the array "dailyTempArray".
for (let i = 0; i < data.daily.length; i++) {
    dailyTempArray.push(data.daily[i].temp.day)
}

// An loop that goes through all the clases that have the name "weekday" and puts the data for that dat in the div.
for (let i = 0; i < 7; i++) {

    // Sun icon

    // Get the temp of the day
    let dailyTemp = data.daily[i].temp.day

    const sunnyIcon = `<svg class="" xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="${getTempColor(dailyTemp)}" class="bi bi-brightness-high" viewBox="0 0 16 16">
<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg>`

    // Returns icon base on weather
    const getDayType = (currentDay) => {
        if (currentDay == "Clear") {
            return sunnyIcon;
        } else {
            return "";
        }
    }

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
            <div class="text-center">${dailyTempArray[i]}<sup>&#8457;</sup></div>
        </div>`
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
}

// Progress bar animation

let getColor = (temp) => {
    const tempColorArray = ['add8e6', 'E0E000', 'E05A00', 'E32636']

    if (temp >= 100) {
        return `#${tempColorArray[3]}`
    } else if (temp >= 95 && temp < 100) {
        return `#${tempColorArray[2]}`
    } else if (temp >= 80 && temp < 95) {
        return `#${tempColorArray[1]}`
    } else {
        return `#${tempColorArray[0]}`
    }
}


let currentTemp = Math.ceil(data.current.temp.day);

let currentHigh = data.current.temp.max

let currentLow = data.current.temp.min

let barColor = getTempColor(currentTemp)



// Progress bar animation



// Gets what color the bar and text will be based off of what temp its is today

// let getTempColor = (temp) => {
//     const tempArray = ['add8e6', 'E0E000', 'E05A00', 'E32636']

//     if (temp >= 100) {
//         return `#${tempArray[3]}`
//     } else if (temp >= 95 && temp < 100) {
//         return `#${tempArray[2]}`
//     } else if (temp >= 80 && temp < 95) {
//         return `#${tempArray[1]}`
//     } else {
//         return `#${tempArray[0]}`
//     }
// }

// let currentTemp = Math.ceil(data.current.temp);

// getTempColor(60)

// let barColor = getTempColor(currentTemp)



// let currentTemp = Math.ceil(data.current.temp);

// let barColor = getTempColor(currentTemp)



let currentInfoWrapper = document.getElementById("wrapperCurrent")

let currentFeelLike = data.current.feels_like

// let currentHigh = Math.round(data.current.temp.max)

// let currentLow = Math.round(data.current.temp.min)

let currentWindSpeed = data.current.wind_speed

let currentUVIndex = data.current.uvi

let currentHumidity = data.current.humidity

let getUVIndexColor = (uvIndex) => {
    const uvIndexColorArray = ['add8e6', 'ffff00', 'E05A00', 'E32636']

    if (uvIndex >= 10) {
        return `#${uvIndexColorArray[3]}`
    } else if (uvIndex < 10 && uvIndex >= 7) {
        return `#${uvIndexColorArray[2]}`
    } else if (uvIndex < 7 && uvIndex >= 4) {
        return `#${uvIndexColorArray[1]}`
    } else {
        return `#${uvIndexColorArray[0]}`
    }
}


currentInfoWrapper.innerHTML += `<div class="row p-0" style="margin-bottom: 35px;">
<div class="col-4" id="feelsLikeWrapper">
    <div class="col-12" id="number">${Math.round(currentFeelLike)}<sup>&#8457;</sup></div>
    <div class="col-12" id="title">Feels Like</div>
</div>
<div class="col-4" id="wrapper">
                <progress-ring class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center" stroke="4" radius="60" progress="0">
                </progress-ring>
            </div>

<div class="col-4 d-flex justify-content-end p-0" id="tempSUnWrapper">
    <svg id="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${getColor(currentFeelLike)}" class="bi bi-brightness-high" viewBox="0 0 16 16">
            <path
                d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
        </svg>
</div>
</div>
<div class="row">
<div class="col-6">
    <div class="col-12">
        <div class="row" style="justify-content: space-between">
            <div class="col-8 p-0" style="width: fit-content;">
                <svg id="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="lightblue" class="bi bi-thermometer-half" viewBox="0 0 16 16">
                    <path
                        d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415z" />
                    <path
                        d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z" />
                </svg> High/Low
            </div>
            <div class="col-4 d-flex justify-content-end" style="width: fit-content;">${currentHigh}<sup style="top: .5em;">&#8457;</sup>/ ${currentLow}<sup style="top: .5em;">&#8457;</sup></div>
        </div>
    </div>
    <div class="col-12">
        <div class="row w-100">
            <div class="col-8 p-0">
                <svg id="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="lightblue" class="bi bi-moisture" viewBox="0 0 16 16">
                    <path
                        d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z" />
                </svg> humidity
            </div>
            <div class="col-4 d-flex justify-content-end">${currentHumidity}<sup style="top: .5em;">&#8457;</sup></div>
        </div>
    </div>
</div>

<div class="col-6">
    <div class="col-12">
        <div class="row d-flex justify-content-between">
            <div class="col-6 col-md-8 p-0">
                <svg id="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="lightblue" class="bi bi-wind" viewBox="0 0 16 16">
                    <path
                        d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
                </svg> Wind Speed
            </div>
            <div class="col-4 d-flex justify-content-end" style="width: fit-content;">${currentWindSpeed} mph</div>
        </div>
    </div>
    <div class="col-12">
        <div class="row d-flex justify-content-between">
            <div class="col-6 col-md-8 p-0">
                <svg id="icon" class="icon-sun" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${getUVIndexColor(currentUVIndex)}" stroke="black" stroke-width=".05" class="bi bi-brightness-high" viewBox="0 0 16 16">
                    <path
                        d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                </svg> UV Index
            </div>
            <div class="col-4 d-flex justify-content-end" style="width: fit-content;">${currentUVIndex} of 10</div>
        </div>
    </div>
</div>`




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
          <text x="45" y="40" fill="${getTempColor(currentHigh)}" aligment-baseline="middle" font-size="16">${currentHigh}&deg;</text>
          <text x="40" y="60" fill="${barColor}" alignment-baseline="middle" font-size="24">${currentTemp}&#8457;</text>
          <text x="40" y="85" fill="${getTempColor(Math.round(currentLow))}" aligment-baseline="middle" font-size="16">${currentLow}&deg;</text>
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