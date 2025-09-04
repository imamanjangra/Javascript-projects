
// start 

let background_btn = document.querySelector("#Box");
let mode = localStorage.getItem("theme");


if(!mode){
    mode = "light";
    localStorage.setItem("theme" , "light");

}


 background_btn.addEventListener('click' , ()=>{

if(mode ===  "light"){
    mode = "dark"
    localStorage.setItem("theme" , "dark");
    document.body.classList.add('dark_mode');

}else{
    mode = "light"
    localStorage.setItem("theme" , "light");
    document.body.classList.remove("dark_mode");
}
})


//------------------------copy code ---------------------------
// BUBBLE ANIMATION BACKGROUND
const canvas = document.getElementById('bubble-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const bubbles = [];

function createBubble() {
    return {
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 100,
        radius: Math.random() * 6 + 2,
        speed: Math.random() * 1 + 0.5,
        alpha: Math.random() * 0.5 + 0.5
    };
}

// Create initial bubbles
for (let i = 0; i < 50; i++) {
    bubbles.push(createBubble());
}

function drawBubbles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bubbles.forEach((bubble) => {
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(150, 100, 255, ${bubble.alpha})`; // Light purple bubbles
        ctx.fill();
        bubble.y -= bubble.speed;
        if (bubble.y < -bubble.radius) {
            Object.assign(bubble, createBubble(), { y: canvas.height + bubble.radius });
        }
    });
    requestAnimationFrame(drawBubbles);
}
drawBubbles();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
// --------------------------end------------------------------
