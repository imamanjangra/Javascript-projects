let menu_btn = document.querySelector(".menu");
let menu_data = document.querySelector(".menu_data");
let same_a = document.querySelectorAll(".same_a");
let dark_mode = document.querySelector(".dark_mode");
let body = document.querySelector("body");
let t_w = document.querySelectorAll(".t_w");
let nav = document.querySelector(".nav");
let moon = document.querySelector(".moon");
let sm_cl = document.querySelectorAll(".sm_cl");
let bg_change = document.querySelector(".bg_change")

let menu_v = true;
menu_btn.addEventListener("click" , ()=>{
    menu_data.classList.toggle('hidden')
  
})

same_a.forEach(btn => {
    btn.addEventListener('click' , ()=>{
        menu_data.classList.add("hidden");
    })
});

// dark mode 
let dark_value = true;
function darkmode(){
    if(dark_value){
    console.log("dark btn was clicked")
    body.style.backgroundColor = "#0B1020";

    t_w.forEach(i => {
        i.style.color = "white";
    });
    sm_cl.forEach(e => {
    e.classList.add("text-gray-500");
    e.classList.remove("text-black");
    
    bg_change.classList.remove("bg-white");
    bg_change.classList.add("bg-[#0B1020]");
});


    nav.classList.remove("bg-white/50"); // remove white
    nav.classList.add("bg-[#0B1020]/50"); // add dark
    
    dark_mode.classList.add("hidden")
    moon.classList.remove("hidden")
    
    dark_value = false;
    }
    else{
        body.style.backgroundColor = "white"
        t_w.forEach(i => {
        i.style.color = "black";
        
    });

    sm_cl.forEach(e => {
    e.classList.add("text-black");
    e.classList.remove("text-gray-400");
    bg_change.classList.add("bg-white");
    bg_change.classList.remove("bg-[#0B1020]");
});


    

    nav.classList.remove("bg-[#0B1020]/50"); // remove dar
    nav.classList.add("bg-white/50"); // add white
   

    dark_mode.classList.remove("hidden")
    moon.classList.add("hidden");
    

        dark_value = true;

    }
}

dark_mode.addEventListener("click" , ()=>{
    darkmode();
})

moon.addEventListener('click'  , ()=>{
    darkmode();
})