let btn_all = document.querySelectorAll(".btn_all");
let t = document.querySelectorAll(".try");
let result = document.querySelector(".result");
let cpu = document.querySelector(".cpu");
let your = document.querySelector(".your");
let score_you = document.querySelector(".score_you");
let score_cpu = document.querySelector(".score_cpu");
let clear = document.querySelector(".clear");
let play_again = document.querySelector(".play_again");
let ul_his = document.querySelector(".ul_his");
let mode = document.querySelector("#mode");

let count_you = 0;
let count_cpu = 0;

    
    let mode_value = 500;

mode.addEventListener('change' , ()=>{

    clear_data();

    if(mode.value == 3){
        console.log(mode.value)
        mode_value = 2;
    }
    else if(mode.value == 5){
        console.log(mode.value)
       mode_value = 3;
    }
    else if(mode.value == 0){
        console.log(mode.value);
        mode_value = 500;
    }
    
})

btn_all.forEach(e => {
    e.addEventListener('click' , ()=>{
        play_game(e.value)
    })
});


function play_game(num){
       
        const randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        console.log(randomNumber);
        if(num == 1){
            your.classList.add("text-5xl")
            your.innerText = "✊";

            if(randomNumber == 1){
                result.innerText = "Draw";
                cpu.classList.add("text-5xl")
                cpu.innerText = "✊";
                history_text("Draw" , "#CBD5E1" , "Rock vs Rock" );
            }
            else if(randomNumber == 2){
                result.innerText = "You Lose";
                count_cpu = count_cpu + 1;
                score_cpu.innerText = count_cpu;
                cpu.classList.add("text-5xl")
                cpu.innerText = "✋";
                history_text("Lose" , "#CBD5E1" , "Rock vs Paper" );

            }
            else if(randomNumber == 3){
                result.innerText = "Win"
                count_you = count_you + 1;
                score_you.innerText = count_you;
                cpu.classList.add("text-5xl")
                cpu.innerText = "✌️";
                history_text("Win" , "#CBD5E1" , "Rock vs Scissors" );
            }
        }

    else if(num == 2){

            your.classList.add("text-5xl")
            your.innerText = "✋";

            if(randomNumber == 1){
                result.innerText = "Win";
                count_you = count_you + 1;
                score_you.innerText = count_you;
                cpu.classList.add("text-5xl")
                cpu.innerText = "✊";
                history_text("Win" , "#CBD5E1" , "Paper vs Rock" );

            }
            else if(randomNumber == 2){
                result.innerText = "Draw";
                cpu.classList.add("text-5xl")
                cpu.innerText = "✋";
                history_text("Draw" , "#CBD5E1" , "Paper vs Paper" );
            }
            else if(randomNumber == 3){
                result.innerText = "You Lose";
                count_cpu = count_cpu + 1;
                score_cpu.innerText = count_cpu;
                cpu.classList.add("text-5xl")
                cpu.innerText = "✌️";
                history_text("Lose" , "#CBD5E1" , "Paper vs Scissors" );
            }
    }
    else if(num == 3){
            your.classList.add("text-5xl")
            your.innerText = "✌️";

            if(randomNumber == 1){
                result.innerText = "You Lose";
                count_cpu = count_cpu + 1;
                score_cpu.innerText = count_cpu;
                cpu.classList.add("text-5xl")
                cpu.innerText = "✊";
                history_text("Lose" , "#CBD5E1" , "Scissors vs Rock");

            }
            else if(randomNumber == 2){
                result.innerText = "win";
                count_you = count_you + 1;
                score_you.innerText = count_you;
                cpu.classList.add("text-5xl")
                cpu.innerText = "✋";
                history_text("Win" , "#CBD5E1" , "Scissors vs Paper");
            }
            else if(randomNumber == 3){
                result.innerText = "Draw"
                cpu.classList.add("text-5xl")
                cpu.innerText = "✌️";
                history_text("Draw" , "#CBD5E1" , "Scissors vs Scissors" );
            }

    }
    else if(num == "clear" || num == "again"){
       clear_data();
        enable_btn();
    }

    console.log(`count cpu trry ${count_cpu}`);
    
    if(count_cpu >= mode_value){
        result.innerText = "Winnner is CPU ";
        disable_btn();
    }else if(count_you >= mode_value){
        result.innerText = "Winner is YOU ";
        disable_btn();
    }
    }
  

function disable_btn() {
  t.forEach((btn) => {
    btn.disabled = true;
  });
}

function enable_btn() {
    t.forEach((btn) => {
    btn.disabled = false;
  });
}

function clear_data(){
     count_cpu = 0;
        count_you = 0;
        score_you.innerText = count_you;
        score_cpu.innerText = count_cpu;
        result.innerText = "Result"
        cpu.classList.remove("text-5xl");
        your.classList.remove("text-5xl")
        cpu.innerText = "CPU Choice";
        your.innerText = "Your Choice";
        enable_btn();
}

function history_text(r , color , vs ){
                let creat_li = document.createElement("li");
                let creat_span = document.createElement("span");
                let creat_tspan = document.createElement("span");
                creat_span.innerText = r;
                creat_span.style.color = color;
                // creat_tspan.style.width = "300px"
                creat_span.style.paddingLeft = "40px"
                creat_tspan.innerText = vs;
                creat_li.appendChild(creat_tspan);
                creat_li.appendChild(creat_span);
                ul_his.appendChild(creat_li);

                clear.addEventListener('click' , ()=>{
                    delet_h()
                    function delet_h(){
                    creat_li.remove();
                    creat_span.remove();
                    creat_tspan.remove();
                    }
                })

                
}


