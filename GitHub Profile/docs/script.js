
  //  const repoResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
     

let submit_btn = document.querySelector(".submit_btn");
let username = document.querySelector("#username");
let profile = document.querySelector("#profile-container");
let avatar = document.querySelector("#avatar");
let P_name = document.querySelector("#name");
let bio = document.querySelector("#bio");
let followers = document.querySelector("#followers");
let following = document.querySelector("#following");


submit_btn.addEventListener('click' , (e)=>{
  input_username(e);
})

function input_username(e){
  e.preventDefault();
  let id = username.value.replace(/\s+/g , "");
  console.log(id);
  run_api(id);
  profile.classList.remove("hidden");
}

function run_api(id){
  let profile_link = `https://api.github.com/users/${id}`;
  let repo_link = `https://api.github.com/users/${id}/repos?per_page=100`;
  let getdata1 = async ()=>{
  let request = await fetch(profile_link);
  let data = await request.json();
  console.log(data);
  data_feach(data)

  // let getdata2 = async ()=>{
  //   let request2 = await fetch(repo_link);
  //   let data2 = await request2.json();
  //   console.log(data2);
  //   data_feach(data2);

  // }
  // getdata2();
}
  

getdata1();
// getdata2();
}

function data_feach(data){
  console.log(data.name)
  P_name.innerText = `${data.name}`
  avatar.src = `${data.avatar_url}`;
  bio.innerText = `${data.bio}`;
  followers.innerText = `${data.followers}`
  following.innerText = `${data.following}`

}