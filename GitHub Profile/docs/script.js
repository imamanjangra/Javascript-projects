
  //  const repoResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);

// const { jsx } = require("react/jsx-runtime");

     

let submit_btn = document.querySelector(".submit_btn");
let username = document.querySelector("#username");
let profile = document.querySelector("#profile-container");
let avatar = document.querySelector("#avatar");
let P_name = document.querySelector("#name");
let bio = document.querySelector("#bio");
let followers = document.querySelector("#followers");
let following = document.querySelector("#following");
let repos = document.querySelector("#repos");


submit_btn.addEventListener('click' , (e)=>{
  input_username(e);
})

username.addEventListener('keydown' , (e)=>{

  if(e.key == "Entre"){
    input_username(e);
  }
})

function input_username(e){
  e.preventDefault();
  let id = username.value.replace(/\s+/g , "");
  console.log(id);
  if(id == ""){
    alert("Entre your GIthub username!");
    return;
  }
  else{

    run_api(id);
  }
}

function run_api(id){
  let profile_link = `https://api.github.com/users/${id}`;

  let getdata1 = async ()=>{
  let request = await fetch(profile_link);
  let data = await request.json();

  console.log(data);

  if(data.status == 404){
    alert("Gihtub username is wrong!");
    return;
  }
  else{

    data_feach(data);
  profile.classList.remove("hidden");

  }
}
  
getdata1();
}

function data_feach (data)
{
  
  console.log(data.name)
  P_name.innerText = `${data.name}`
  avatar.src = `${data.avatar_url}`;
  bio.innerText = `${data.bio}`;
  followers.innerText = `${data.followers}`
  following.innerText = `${data.following}`
  let repo_url = data.repos_url;

  let get_url = async ()=>{
    let request_repo = await fetch(repo_url);
    let repo_data = await request_repo.json();
    console.log(repo_data);
    repo_data_use(repo_data)
  }
  get_url();
  
  
}

function repo_data_use (repo_data){
  let length = repo_data.length;
 

  for(let i = 0; i<length; i++){
     
    repo_data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    let top_three = repo_data.slice(0, 3);
    repos.innerHTML = "";

  top_three.forEach(repo => {
      let li = document.createElement("li");
   
      let link = document.createElement("a");
     link.innerText = repo.name;
     link.target = "_blank";
     link.href = repo.html_url;

      let p = document.createElement("span");
      p.innerText = `⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count} | ${repo.language}`;
      li.style.display = "flex";
      li.style.justifyContent = "space-between";
      li.style.alignItems = "center";
      li.appendChild(link);
      
      li.appendChild(p);

      repos.appendChild(li);
      
});


  }
}