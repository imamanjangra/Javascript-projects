
let btn_i = document.querySelector("#btn_i");// submit button
let time_data = document.querySelector("#i_t");// time value for input box
let time_html = document.querySelector("#time");// time box html
let quiz_box = document.querySelector("#quiz_box");// quize box
let contaner_input = document.querySelector("#contaner_input");// input page
//quiz input
let btn_option_inc = document.querySelector("#btn_option_inc")// button for inc the li in each q
let option_list = document.querySelector("#option_list")// button for inc the li in each q
let btn_question_inc = document.querySelector("#btn_question_inc")
let main_ol = document.querySelector("#main_ol");
let question_li = document.querySelector("#question_li");
let question_quiz = document.querySelector("#question_quiz");
let op_quiz = document.querySelector("#op_quiz");
let left_q = document.getElementById("left_q");


document.addEventListener("DOMContentLoaded", () => {
    let background_btn = document.querySelector("#Box");
    let current_mode = localStorage.getItem("theme");

    if (!current_mode) {
        current_mode = "light";
        localStorage.setItem("theme", "light");
    }

    if (current_mode === "dark") {
        document.body.classList.add("dark_mode");
    }

    background_btn.addEventListener('click', () => {
        if (current_mode === "light") {
            current_mode = "dark";
            localStorage.setItem("theme", "dark");
            document.body.classList.add("dark_mode");
        } else {
            current_mode = "light";
            localStorage.setItem("theme", "light");
            document.body.classList.remove("dark_mode");
        }
    });
});

function add_li(){
  let li = document.createElement("li");
  let input  = document.createElement("input");
  let icon = document.createElement("i");

  let next_no = option_list.children.length + 1;
  input.type = "text";
  input.id = `q${1}o${next_no}`
  input.placeholder = `option `;
  input.classList = `same_o`
  li.className = `li_remove${next_no}`

  icon.classList = `fa-solid fa-trash-can s_btn`;
  icon.id = `s${next_no}`
  
  li.appendChild(input);
  li.appendChild(icon)
  option_list.appendChild(li);

  option_list.addEventListener("click", (e) => {
  if (e.target.classList.contains("s_btn")) {
    let li = e.target.closest("li");
    if (li) li.remove();
  }
});
}

function add_q(){

  
  let li = document.createElement("li");
  let sub_li = document.createElement("li");
  
  let input  = document.createElement("input");
  let sub_input = document.createElement("input");
  let q_no = main_ol.children.length + 1;
  let o_no = li.children.length + 1;
  // console.log(o_no)
  sub_input.id = `q${q_no}o${o_no}`;
  input.id = `q${q_no}`
  // console.log(q_no)
  
  let ol = document.createElement("ol");
  ol.id = `ol${q_no}`

  let inc_btn_subli = document.createElement("button");
  let btn_delete = document.createElement("i");
  let q_delete = document.createElement("i");
  input.type = "text";
  input.placeholder = "quetion";
  input.classList = "second_q"
  sub_input.classList = "same_o"
  sub_li.classList = "same_sub_option";
  // sub_input.id = `op${next_no}`
  
  ol.type = "A";
 
  btn_delete.innerHTML = '<i class="fa-solid fa-trash-can s_btn "></i>';
  q_delete.innerHTML = '<i class="fa-solid fa-xmark q_delete"></i>'
  let ans = document.createElement("input");
  ans.type = "text";
  ans.placeholder = "Answer";
  ans.classList = "same_o";
  ans.classList = "ans_s"
  ans.id = `a${q_no}`
  let para_ans = document.createElement("p");
  para_ans.innerText = "Answer"
  para_ans.id = "ans_text";

  li.appendChild(input)
  main_ol.appendChild(li)
  li.appendChild(q_delete)
  
  
  sub_input.type = "text";
  sub_input.placeholder = "option";

  li.appendChild(ol);
  ol.appendChild(sub_li);
  
  sub_li.appendChild(sub_input);

  sub_li.appendChild(btn_delete)

// button  
    ol.addEventListener('click', (e) => {
    if (e.target.classList.contains('s_btn') || 
        e.target.parentElement.classList.contains('s_btn')) {
      let li = e.target.closest('li');
      if (li) li.remove();
    }
  });

  inc_btn_subli.innerHTML = "<i class='fa-solid fa-plus btn_style'></i>";
  inc_btn_subli.style.border = "none";
  inc_btn_subli.style.display = "block"
  inc_btn_subli.id = "inc_btn"
  li.appendChild(inc_btn_subli);
  li.appendChild(para_ans);
  li.appendChild(ans);
  inc_btn_subli.addEventListener('click' , ()=>{
    let li_option = document.createElement("li");
    let input_option = document.createElement("input");
    let btn_delete_option = document.createElement("i");

    let  o_no2 = ol.children.length + 1;
    // console.log(o_no2)
    input_option.id = `q${q_no}o${o_no2}`; 
    input_option.type = "text";
    input_option.placeholder = "option";
    input_option.classList = "same_o"
    li_option.classList = "same_sub_option"
    btn_delete_option.classList = "remove_option"
    btn_delete_option.innerHTML = '<i class="fa-solid fa-trash-can s_btn "></i>';
    li_option.appendChild(input_option);
    ol.appendChild(li_option);
    li_option.appendChild(btn_delete_option)
  })


  q_delete.addEventListener('click', (e) => {
    li.remove();
  })
  

}

btn_option_inc.addEventListener('click' , ()=>{
  add_li();
})

btn_question_inc.addEventListener('click', ()=>{
  add_q();
})




btn_i.addEventListener('click', (e) => {
    e.preventDefault();
    

    quiz_box.style.display = "block";
    contaner_input.style.display = "none";
    let save_time =  time_data.value;
    let s_time = time_data.value*1000;

    // if(time_data.value == 0 && time_data.value >= 0){
    //   alert("Entre a valid Time ");
    // }
    function clock(){
     
    for (let i = save_time; i >= 1; i--) {
    setTimeout(() => {
        time_html.innerHTML = `${i}`;
    }, (save_time - i + 1) * 1000);
}

    }
    
    

    //--------------------------------------------------

    let q_no = main_ol.children.length;
    // console.log(q_no);
    let next_no = option_list.children.length;
    // console.log(next_no);
     let out_of = document.createElement("p");

   
      let para_op = [];
      for (let i = 1; i <= q_no; i++) {
        setTimeout(() => {
          question_quiz.innerHTML = "";
          op_quiz.innerHTML = "";
          left_q.innerHTML = "";
          let q_next_quiz = document.createElement("h1");
          let q_next_value = document.getElementById(`q${i}`);
          q_next_quiz.innerText = `Q) ${q_next_value.value}`;
          question_quiz.appendChild(q_next_quiz);

          out_of.innerHTML = `${i} of ${q_no} `
          left_q.appendChild(out_of)


          
          clock();
          
 const optOl = i === 1 ? document.getElementById("option_list") : document.getElementById(`ol${i}`);
let optCount = optOl ? optOl.querySelectorAll("input.same_o").length : 0;        

for (let j = 1; j <= optCount; j++) {
  let o_next_value = document.getElementById(`q${i}o${j}`);
  let ans_next_value = document.getElementById(`a${i}`);
  // console.log(ans_next_value.value);
  
  if (!o_next_value) continue; 
  let div = document.createElement("div");
  let correct_icon = document.createElement("i");
  let uncorrect_icon = document.createElement("i");
  let li = document.createElement("li");
  correct_icon.innerHTML = "<i class='fa-regular fa-circle-check'></i>";
  uncorrect_icon.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>'
  correct_icon.classList = "correct_i"
  uncorrect_icon.classList = "correct_i"
  li.classList = "op_list"
  div.innerText = o_next_value.value;

  let chek_box = document.createElement("input");
  chek_box.type = "radio";
  chek_box.name = `q${i}`;
  chek_box.classList = "radio_btn"
  chek_box.style.display = "none";
  div.classList = "op_div";
  li.appendChild(div);
  div.appendChild(chek_box);
  op_quiz.appendChild(li);
  div.id = 'color_change'
  div.addEventListener('click' , ()=>{
    chek_box.checked = true
    console.log("check box is clicked ");
    console.log("Selected value:", o_next_value.value);
    if(ans_next_value.value == o_next_value.value){
      div.style.backgroundColor = "#90EE90"
      div.appendChild(correct_icon)
    } else{
      div.style.backgroundColor = "#F08080"
      div.appendChild(uncorrect_icon)
    }
  })
 
}
    }, (i - 1) * s_time); 
   }

    // }

   
      
   
  
     //-------------------------------------------
    
});

 
