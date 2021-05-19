
// JS animation that will move the sun or moon base on what time it is 

let moon = document.getElementById("moon");

let sun = document.getElementById("sun")

let arc = document.getElementById("arc")

// console.log(moon)
// console.log(sun)
console.log(arc)

// Finds height and width of the arc
function dim(){

    var c = document.getElementById("arc")
    var rec = c[0].getBoundingClientRect();
    console.log("width: "+rec.width);
    
}
dim();

