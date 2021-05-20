
// JS animation that will move the sun or moon base on what time it is 

const canvas = document.getElementById("sunTimeCanvas")
// const wrapper = document.getElementById("sunRiseWrapper")

// canvas.width = 100;
// canvas.height =  100;

const ctx = canvas.getContext('2d');

// draw.beginPath();
// draw.arc(100, 75, 50, Math.PI*1, 2 * Math.PI);
// draw.stroke();

// Sun 
// Says how many rays are going to be around the sun
const rayCount = 8;

class Sun {
    constructor(x, y, r, dRayAngle) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.dRayAngle = dRayAngle;
        this.rayAngle = (2 * Math.PI) / rayCount;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        ctx.fillStyle = '#FFE656';
        ctx.fill();
        ctx.closePath();

        ctx.lineWidth = 2;

        ctx.beginPath();
        for (let preTheta = 0; preTheta < (2 * Math.PI); preTheta += this.rayAngle) {
            const theta = preTheta + this.dRayAngle * 180 / Math.PI;

            const fromCoordinate = (1.5 * this.r);
            const toCoordinate = (2.85 * this.r);

            ctx.moveTo(this.x + Math.cos(theta) * fromCoordinate, this.y + Math.sin(theta) * fromCoordinate);
            ctx.lineTo(this.x + Math.cos(theta) * toCoordinate, this.y + Math.sin(theta) * toCoordinate);
        }

        ctx.strokeStyle = '#FFE656'
        ctx.stroke();
    }

    update() {
        if (this.dRayAngle === (2 * Math.PI)) {
            this.dRayAngle = 0;
        }

        this.dRayAngle += 45 / Math.PI;

        this.draw();
    }
}

let createdSun;

function init() {
    const x = innerWidth / 2;
    const y = innerHeight / 4;
    const r = innerHeight / 20;
    const dRayAngle = 180 / Math.PI;

    createdSun = new Sun(x, y, r, dRayAngle);
}

function animate() {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    createdSun.update();
}

init();

animate();

