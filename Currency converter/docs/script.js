let amount_input = document.querySelector(".amount_input");
let submit_btn = document.querySelector(".submit_btn");
let otn1 = document.querySelector(".otn1");
let otn2 = document.querySelector(".otn2");
let img1 = document.querySelector(".img1")
let img2 = document.querySelector(".img2")
let i1 = document.querySelector(".i1");
let option = document.querySelectorAll(".option");
let Answer = document.querySelector("#Answer");
let swich = document.querySelector(".swich");
let dark_btn = document.querySelector(".dark_btn");
let body  = document.querySelector("body")
let main_box = document.querySelector(".main_box");

let dark_value = true;

dark_btn.addEventListener('click', () => {
    if (dark_value) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        main_box.style.backgroundColor = "black";
        dark_value = false;
         main_box.style.boxShadow = "0 0 25px rgba(255, 255, 255, 0.4)";
        
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        main_box.style.backgroundColor = "white";
          main_box.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
        dark_value = true;
    }
});

// Img change 
otn1.addEventListener('change' , ()=>{ 
    img1.src = `https://flagsapi.com/${otn1.value}/flat/64.png`;
})
otn2.addEventListener('change' , ()=>{ 
    img2.src = `https://flagsapi.com/${otn2.value}/flat/64.png`;
})

//swich btn
swich.addEventListener('click' , ()=>{
    console.log("swich is clicked");
    swich.style.transition = 'transform 150ms ease';
    swich.style.transform = 'scale(0.9)';
    setTimeout(() => {
        swich.style.transform = 'scale(1)';
    }, 150);
    let v1 = otn1.value
    let v2 = otn2.value
    console.log(`${v2} to ${v1}`)
    otn1.value = v2;
    otn2.value = v1;
     img1.src = `https://flagsapi.com/${otn1.value}/flat/64.png`;
     img2.src = `https://flagsapi.com/${otn2.value}/flat/64.png`;
})



//submit btn work and api use 
submit_btn.addEventListener('click' , (e)=>{
    e.preventDefault();
    let input_value = amount_input.value;

    if (input_value <= 0 || isNaN(input_value)) {
        alert("Enter a valid value")
    }else{
        let id1 = otn1.querySelector(`option[value="${otn1.value}"]`).id;
        let id2 = otn2.querySelector(`option[value="${otn2.value}"]`).id;

        let api_url = `https://api.currencylayer.com/convert?access_key=acb94aa5ea702b79ad71bee15e7844ec&from=${id1}&to=${id2}&amount=${input_value}`;

        let getdata = async () => {
            console.log("getting data ..");
            let request = await fetch(api_url);
            let data = await request.json();
            console.log(data);

            if (data.result) {
                console.log(`Converted Amount: ${data.result} ${id2}`);
                Answer.innerHTML = `${input_value} ${id1} = ${data.result.toFixed(2)} ${id2}`
            } else {
                console.log("Error in conversion");
            }
        }
        getdata();
    }
})



