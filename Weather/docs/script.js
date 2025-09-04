let api_key = "e15470177d852cecd48b92ec3dbec9a0";

let temp_c = document.querySelector(".temp_c");
let serch = document.querySelector(".serch");
let serch_btn = document.querySelector(".serch_btn");
let wether = document.querySelector(".wether");
let loc = document.querySelector(".loc");
let hum = document.querySelector(".hum");
let s = document.querySelector(".s");

serch_btn.addEventListener('click' , (e)=>{
    e.preventDefault();
    console.log(serch.value);
    let city_name = serch.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`

    getdata(url);
})

 let getdata = async (url) => {
            console.log("getting data ..");
            let request = await fetch(url);
            let data = await request.json();
            console.log(data);
            
            
            use_data(data);
        }

function use_data(data){
    if(data.cod == 200){
    let c = data.main.temp - 273.15;
    temp_c.innerText = `${c.toFixed(0)}°C`;
    let status = data.weather[0].main;
    wether.innerHTML = `${status}`
    loc.innerHTML = data.name;
    hum.innerHTML = `${data.main.humidity}%`;
    let speed = data.wind.speed *3.6;
    s.innerHTML = `${speed.toFixed(0)}Km/h`
    }
    else{
    alert("City not found! Please enter a valid city.");
    }
}

