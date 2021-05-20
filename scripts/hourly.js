// CHART 
// credit: David


Chart.defaults.global = {
    // Boolean - Whether to animate the chart
    animation: true,

    // Number - Number of animation steps
    animationSteps: 60,

    // String - Animation easing effect
    // Possible effects are:
    // [easeInOutQuart, linear, easeOutBounce, easeInBack, easeInOutQuad,
    //  easeOutQuart, easeOutQuad, easeInOutBounce, easeOutSine, easeInOutCubic,
    //  easeInExpo, easeInOutBack, easeInCirc, easeInOutElastic, easeOutBack,
    //  easeInQuad, easeInOutExpo, easeInQuart, easeOutQuint, easeInOutCirc,
    //  easeInSine, easeOutExpo, easeOutCirc, easeOutCubic, easeInQuint,
    //  easeInElastic, easeInOutSine, easeInOutQuint, easeInBounce,
    //  easeOutElastic, easeInCubic]
    animationEasing: "easeOutBack",

    // Boolean - If we should show the scale at all
    showScale: true,

    // Boolean - If we want to override with a hard coded scale
    scaleOverride: false,

    // ** Required if scaleOverride is true **
    // Number - The number of steps in a hard coded scale
    scaleSteps: null,
    // Number - The value jump in the hard coded scale
    scaleStepWidth: null,
    // Number - The scale starting value
    scaleStartValue: null,

    // String - Colour of the scale line
    scaleLineColor: "rgba(0,0,0,.1)",

    // Number - Pixel width of the scale line
    scaleLineWidth: 1,

    // Boolean - Whether to show labels on the scale
    scaleShowLabels: true,

    // Interpolated JS string - can access value
    scaleLabel: "<%=value%>",

    // Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
    scaleIntegersOnly: true,

    // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero: false,

    // String - Scale label font declaration for the scale label
    scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Scale label font size in pixels
    scaleFontSize: 12,

    // String - Scale label font weight style
    scaleFontStyle: "normal",

    // String - Scale label font colour
    scaleFontColor: "#666",

    // Boolean - whether or not the chart should be responsive and resize when the browser does.
    responsive: true,

    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: true,

    // Boolean - Determines whether to draw tooltips on the canvas or not
    showTooltips: true,

    // Function - Determines whether to execute the customTooltips function instead of drawing the built in tooltips (See [Advanced - External Tooltips](#advanced-usage-custom-tooltips))
    customTooltips: false,

    // Array - Array of string names to attach tooltip events
    tooltipEvents: ["mousemove", "touchstart", "touchmove"],

    // String - Tooltip background colour
    tooltipFillColor: "rgba(0,0,0,0.8)",

    // String - Tooltip label font declaration for the scale label
    tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Tooltip label font size in pixels
    tooltipFontSize: 14,

    // String - Tooltip font weight style
    tooltipFontStyle: "normal",

    // String - Tooltip label font colour
    tooltipFontColor: "#fff",

    // String - Tooltip title font declaration for the scale label
    tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Tooltip title font size in pixels
    tooltipTitleFontSize: 14,

    // String - Tooltip title font weight style
    tooltipTitleFontStyle: "bold",

    // String - Tooltip title font colour
    tooltipTitleFontColor: "#fff",

    // Number - pixel width of padding around tooltip text
    tooltipYPadding: 6,

    // Number - pixel width of padding around tooltip text
    tooltipXPadding: 6,

    // Number - Size of the caret on the tooltip
    tooltipCaretSize: 8,

    // Number - Pixel radius of the tooltip border
    tooltipCornerRadius: 6,

    // Number - Pixel offset from point x to tooltip edge
    tooltipXOffset: 10,

    // String - Template string for single tooltips
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

    // String - Template string for multiple tooltips
    // This will be in the box
    multiTooltipTemplate: "<%=datasetLabel%> : <%=value%>",

    // Function - Will fire on animation progression.
    onAnimationProgress: function() {},

    // Function - Will fire on animation completion.
    onAnimationComplete: function() {}
};



// BEGIN LINE CHART ============================================


const lineGraphData = {
    labels: ["12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"],
    datasets: [{
            label: "temperature( Fahrenheit )",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            // goings to be thats days temp
            data: []
        },
        {
            label: "Humidity",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: []
        },
        {
            label: "Dew Point",
            fillColor: "rgba(179, 229, 255, 0.2)",
            strokeColor: "rgba(179, 229, 255, 1)",
            pointColor: "rgba(179, 229, 255, 1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(179, 229, 255, 1)",
            data: []
        },
        {
            label: "Wind Speed ",
            fillColor: "rgba(42, 143, 180, .2)",
            strokeColor: "rgba(42, 143, 180, 1)",
            pointColor: "rgba(42, 143, 180, 1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(42, 143, 180, 1)",
            data: []
        }
    ]
};

const lineGraphOptions = {
    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: true,

    //String - Colour of the grid lines
    scaleGridLineColor: "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth: 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - Whether the line is curved between points
    bezierCurve: true,

    //Number - Tension of the bezier curve between points
    bezierCurveTension: 0.4,

    //Boolean - Whether to show a dot for each point
    pointDot: true,

    //Number - Radius of each point dot in pixels
    pointDotRadius: 4,

    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth: 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius: 20,

    //Boolean - Whether to show a stroke for datasets
    datasetStroke: true,

    //Number - Pixel width of dataset stroke
    datasetStrokeWidth: 2,

    //Boolean - Whether to fill the dataset with a colour
    datasetFill: true,

    //String - A legend template
    legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
};



// // Loops through each day to get it's data
for (let i = 0; i < 24; i++) {
    // Gets the temp of the hour
    let hoursTemp = data.hourly[i].temp
        // This is where the data for the temp is going to get pushed
    let tempDataArea = lineGraphData.datasets[0].data;
    // Pushes the data to the place
    tempDataArea.push(hoursTemp)

    // ===============================================================

    // Gets the humidity of each hour
    let hoursHumidity = data.hourly[i].humidity

    // This is where the data for the humidity is going to get pushed
    let humDataArea = lineGraphData.datasets[1].data;

    humDataArea.push(hoursHumidity)

    // ===============================================================
    // gets the dew point of each hour
    let hoursDewPoint = data.hourly[i].dew_point
        // This is where the data for the dew point will get pushed
    let dewDataArea = lineGraphData.datasets[2].data

    dewDataArea.push(hoursDewPoint)

    // ===============================================================

    // gets the wind speed of each hour
    let hoursWindSpeed = data.hourly[i].wind_speed

    // This is where the data for the dew point will get pushed
    let windDataArea = lineGraphData.datasets[3].data

    windDataArea.push(hoursWindSpeed)

}



// Needs to be the last thing in this section

const lineCtx = document.getElementById("myGraph").getContext("2d");
const myLineChart = new Chart(lineCtx).Line(lineGraphData, lineGraphOptions);

// END LINE CHART ============================================

// DISPLAY HOURLY DATA AREA =================================================
// 6000 miliseconds are in a minute
// 60 mintues in an hour

function formatDuring(time) {
    let days = parseInt(time / (1000 * 60 * 60 * 24));
    let hours = parseInt(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = parseInt(time % (1000 * 60 * 60) / (1000 * 60));
    let seconds = time % (1000 * 60) / 1000;
    // Format 00 days 00 hours 00 minutes 00 seconds
    if (days < 10) {
        days = '0' + days
    }
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    return days + " " + hours + "hours" + minutes + "minutes" + seconds + "seconds";
}

// console.log(formatDuring(7200000))




// An array of all the temp
const tempArray = []
    // An array of all the time data;
const timeArray = []
    // An array of all the humidity data
const humidityArray = []
    // An array of all the dew Point data
const dewPointArray = []
    // An array of all the presure data;
const cloudArray = []
    // An array of all the UV Inedx data;
const uvIndexArray = [];
// An array of all the wind speed data;
const windSpeedArray = []
    // An array of all the presure dat
const pressureArray = []

// Gets each hour

for (let i = 0; i < 48; i++) {
    // gets the temp of that hour
    let time = data.hourly[i].dt;
    // Gets the temp of that hour
    let temp = data.hourly[i].temp;
    // Gets the Humidity of that hour
    let humidity = data.hourly[i].humidity;
    // gets the Dew point of that hour
    let dewPoint = data.hourly[i].dew_point;

    // Gets the pressure of the hour
    let pressure = data.hourly[i].pressure;
    // Gets the UV Index of the hour
    let uvIndex = data.hourly[i].uvi;
    // Gets the Wind speed of the hour
    let windSpeed = data.hourly[i].wind_speed;
    // Get the clouds of the hour
    let clouds = data.hourly[i].clouds

    // Pushing all the data to their array's
    tempArray.push(temp)
    timeArray.push(time)
    humidityArray.push(humidity)
    dewPointArray.push(dewPoint)
    cloudArray.push(clouds)
    uvIndexArray.push(uvIndex)
    windSpeedArray.push(windSpeed)
    pressureArray.push(pressure)
}

// going to be half of the timeArray
const timeHalf = Math.ceil(timeArray.length / 2);

// cuts the array into two and make the two into arrays
const dayOneTimeArray = timeArray.splice(0, timeHalf)
const dayTwoTimeArray = timeArray.splice(-timeHalf)

// going to be half of the TempArray
const tempHalf = Math.ceil(tempArray.length / 2);

// cuts the array into two and make the two into arrays
const dayOneTempArray = tempArray.splice(0, tempHalf)
const dayTwoTempArray = tempArray.splice(-tempHalf)

// Going to be half of the humidity Array
const humidityHalf = Math.ceil(humidityArray.length / 2)

// Cuts the array in half
const dayOneHumidityArray = humidityArray.splice(0, humidityHalf)
const dayTwoHumidityArray = humidityArray.splice(-humidityHalf)

// Going to be half of the Dew Point Array
const dewPointHalf = Math.ceil(dewPointArray.length / 2)

// Cuts the array in half
const dayOneDewPointArray = dewPointArray.splice(0, dewPointHalf)
const dayTwoDewPointArray = dewPointArray.splice(-dewPointHalf)

// Going to be half of the cloud Array
const cloudHalf = Math.ceil(cloudArray.length / 2)

// Cuts the array in half
const dayOneCloudArray = cloudArray.splice(0, cloudHalf)
const dayTwoCloudArray = cloudArray.splice(-cloudHalf)

// Going to be half of the UV Index Array
const uvIndexHalf = Math.ceil(uvIndexArray.length / 2)

// Cuts the array in half
const dayOneUVIndex = uvIndexArray.splice(0, uvIndexHalf)
const dayTwoUVIndex = uvIndexArray.splice(-uvIndexHalf)

// Going to be half of the Wind Speed Array
const windSpeedHalf = Math.ceil(windSpeedArray.length / 2)

// Cuts the array in half
const dayOneWindSpeedArray = windSpeedArray.splice(0, windSpeedHalf)
const dayTwoWindSpeedArray = windSpeedArray.splice(-windSpeedHalf)

// Going to be half of the Wind Speed Array
const pressureHalf = Math.ceil(pressureArray.length / 2)

// Cuts the array in half
const dayOnePressureArray = pressureArray.splice(0, pressureHalf)
const dayTwoPressureArray = pressureArray.splice(-pressureHalf)

// An array of all the day one's
let allDayOneArray = []
    // An array of all the day two's
let allDayTwoArray = []

// I push all the data of each day into the big array for me to easily get it later
allDayOneArray.push(dayOneTimeArray, dayOneTempArray, dayOneHumidityArray, dayOneDewPointArray, dayOneCloudArray, dayOneUVIndex, dayOneWindSpeedArray, dayOnePressureArray)
console.table(allDayOneArray)

allDayTwoArray.push(dayTwoTimeArray, dayTwoTempArray, dayTwoHumidityArray, dayTwoDewPointArray, dayTwoCloudArray, dayTwoUVIndex, dayTwoWindSpeedArray, dayTwoPressureArray)
console.table(allDayTwoArray)


// Goes through all the data in day one and starts to display it
for (let i = 0; i < 24; i++) {
    var parent = document.getElementById("accordionOneWrapper")
    parent.innerHTML += `
    <div class="accordion" id="accordionExample" style="margin-top: 5px">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}" id="accordionHeader">
                        <div class="row w-100">
                            <div class="col-3">Time: ${allDayOneArray[0][i]}</div>
                            <div class="col-3">Temp: ${allDayOneArray[1][i]}<sup>&#8457;</sup></div>
                            <div class="col-3">Humidity: ${allDayOneArray[2][i]}%</div>
                            <div class="col-3">Dew Point: ${allDayOneArray[3][i]}&deg;</div>
                        </div>
                    </button>
                </h2>
                <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-4 text-center pr-0 pl-4 justify-content-start d-flex" style="padding: 0 !important;">
                                            <svg id="icons" xmlns="http://www.w3.org/2000/svg" width="16"
                                                height="16" fill="currentColor" class="bi bi-arrow-bar-down"
                                                viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z" />
                                            </svg>
                                            Presure
                                        </div>
                                        <div class="col-8 pr-0 d-flex justify-content-end">${allDayOneArray[7][i]}</div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-4 text-center" style="width: fit-content;">
                                            <svg id="icons" xmlns="http://www.w3.org/2000/svg" width="16"
                                                height="16" fill="currentColor" class="bi bi-sunglasses"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M3 5a2 2 0 0 0-2 2v.5H.5a.5.5 0 0 0 0 1H1V9a2 2 0 0 0 2 2h1a3 3 0 0 0 3-3 1 1 0 1 1 2 0 3 3 0 0 0 3 3h1a2 2 0 0 0 2-2v-.5h.5a.5.5 0 0 0 0-1H15V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-1.888 1.338A1.99 1.99 0 0 0 8 6a1.99 1.99 0 0 0-1.112.338A2 2 0 0 0 5 5H3zm0 1h.941c.264 0 .348.356.112.474l-.457.228a2 2 0 0 0-.894.894l-.228.457C2.356 8.289 2 8.205 2 7.94V7a1 1 0 0 1 1-1z" />
                                            </svg>
                                            UV Index
                                        </div>
                                        <div class="col-7 d-flex justify-content-end" style="margin-left: auto; width: fit-content">${allDayOneArray[5][i]} of 10</div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-4 text-center p-0" style="width: fit-content">
                                            <svg id="icons" xmlns="http://www.w3.org/2000/svg" width="16"
                                                height="16" fill="currentColor" class="bi bi-wind"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                            Wind Speed
                                        </div>
                                        <div class="col-7 d-flex justify-content-end p-0" style="margin-left: auto; width: fit-content;">${allDayOneArray[6][i]}</div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="row d-flex justify-content-between">
                                        <div class="col-4 " style="width: fit-content;">
                                            <svg id="icons" xmlns="http://www.w3.org/2000/svg" width="16"
                                                height="16" fill="currentColor" class="bi bi-cloud"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                                            </svg>
                                            Clouds
                                        </div>
                                        <div class="col-8 d-flex justify-content-end" style="width: fit-content">${allDayOneArray[4][i]}%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
}

for (let i = 0; i < 24; i++) {
    var parent = document.getElementById("accordionTwoWrapper")
    parent.innerHTML += `
    <div class="accordion" id="accordionExample" style="margin-top: 5px">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo${i}" aria-expanded="true" aria-controls="collapseTwo${i}" id="accordionHeader">
                        <div class="row w-100">
                            <div class="col-3">Time: ${allDayTwoArray[0][i]}</div>
                            <div class="col-3">Temp: ${allDayTwoArray[1][i]}<sup>&#8457;</sup></div>
                            <div class="col-3">Humidity: ${allDayTwoArray[2][i]}%</div>
                            <div class="col-3">Dew Point: ${allDayTwoArray[3][i]}&deg;</div>
                        </div>
                    </button>
                </h2>
                <div id="collapseTwo${i}" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-4 text-center pr-0 pl-4 justify-content-start d-flex" style="padding: 0 !important;">
                                            <svg id="icons" xmlns="http://www.w3.org/2000/svg" width="16"
                                                height="16" fill="currentColor" class="bi bi-arrow-bar-down"
                                                viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z" />
                                            </svg>
                                            Presure
                                        </div>
                                        <div class="col-8 pr-0 d-flex justify-content-end">${allDayTwoArray[7][i]}</div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-4 text-center" style="width: fit-content;">
                                            <svg id="icons" xmlns="http://www.w3.org/2000/svg" width="16"
                                                height="16" fill="currentColor" class="bi bi-sunglasses"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M3 5a2 2 0 0 0-2 2v.5H.5a.5.5 0 0 0 0 1H1V9a2 2 0 0 0 2 2h1a3 3 0 0 0 3-3 1 1 0 1 1 2 0 3 3 0 0 0 3 3h1a2 2 0 0 0 2-2v-.5h.5a.5.5 0 0 0 0-1H15V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-1.888 1.338A1.99 1.99 0 0 0 8 6a1.99 1.99 0 0 0-1.112.338A2 2 0 0 0 5 5H3zm0 1h.941c.264 0 .348.356.112.474l-.457.228a2 2 0 0 0-.894.894l-.228.457C2.356 8.289 2 8.205 2 7.94V7a1 1 0 0 1 1-1z" />
                                            </svg>
                                            UV Index
                                        </div>
                                        <div class="col-7 d-flex justify-content-end width-fit" style="margin-left: auto;width: fit-content;">${allDayTwoArray[5][i]} of 10</div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-4 text-center p-0" style="width: fit-content">
                                            <svg id="icons" xmlns="http://www.w3.org/2000/svg" width="16"
                                                height="16" fill="currentColor" class="bi bi-wind"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                            Wind Speed
                                        </div>
                                        <div class="col-7 d-flex justify-content-end p-0" style="margin-left: auto; width: fit-content;">${allDayTwoArray[6][i]}</div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="row d-flex justify-content-between">
                                        <div class="col-4" style="width: fit-content;">
                                            <svg id="icons" xmlns="http://www.w3.org/2000/svg" width="16"
                                                height="16" fill="currentColor" class="bi bi-cloud"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                                            </svg>
                                            Clouds
                                        </div>
                                        <div class="col-8 d-flex justify-content-end" style="width: fit-content">${allDayTwoArray[4][i]}%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
}

// console.log(tempArray)
// console.log(timeArray)
// console.log(humidityArray)
// console.log(dewPointArray)




// END DISPLAY HOURLY DATA AREA =================================================