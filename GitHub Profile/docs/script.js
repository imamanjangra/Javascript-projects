let submit_btn = document.querySelector(".submit_btn");
let username = document.querySelector("#username");
let profile = document.querySelector("#profile-container");
let avatar = document.querySelector("#avatar");
let P_name = document.querySelector("#name");
let bio = document.querySelector("#bio");
let followers = document.querySelector("#followers");
let following = document.querySelector("#following");
let repos = document.querySelector("#repos");
let profileSkeleton = document.querySelector("#profile-skeleton");
let profileData = document.querySelector("#profile-data");

submit_btn.addEventListener("click", (e) => {
  input_username(e);
});

username.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    input_username(e);
  }
});

function input_username(e) {
  e.preventDefault();
  let id = username.value.replace(/\s+/g, "");
  if (id === "") {
    alert("Enter your GitHub username!");
    return;
  } else {
    run_api(id);
  }
}

function run_api(id) {
  let profile_link = `https://api.github.com/users/${id}`;

  // show container and skeleton
  profile.classList.remove("hidden");
  profileSkeleton.classList.remove("hidden");
  profileData.classList.add("hidden");

  let getdata1 = async () => {
    let request = await fetch(profile_link);
    let data = await request.json();

    if (data.message === "Not Found") {
      alert("GitHub username is wrong!");
      profile.classList.add("hidden");
      return;
    } else {
      data_fetch(data);
    }
  };

  getdata1();
}

function data_fetch(data) {
  P_name.innerText = data.name || data.login;
  avatar.src = data.avatar_url;
  bio.innerText = data.bio || "No bio available";
  followers.innerText = data.followers;
  following.innerText = data.following;

  let repo_url = data.repos_url;

  let get_url = async () => {
    let request_repo = await fetch(repo_url);
    let repo_data = await request_repo.json();
    repo_data_use(repo_data);

    // hide skeleton, show real profile
    profileSkeleton.classList.add("hidden");
    profileData.classList.remove("hidden");
  };
  get_url();
}

function repo_data_use(repo_data) {
  repos.innerHTML = "";
  repo_data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
  let top_three = repo_data.slice(0, 3);

  top_three.forEach((repo) => {
    let li = document.createElement("li");
    li.className =
      "flex justify-between items-center bg-[#0d1117] px-4 py-2 rounded-lg border border-green-500/20 hover:border-green-400 transition";

    let link = document.createElement("a");
    link.innerText = repo.name;
    link.target = "_blank";
    link.href = repo.html_url;
    link.className = "text-green-400 hover:text-green-300 font-medium";

    let p = document.createElement("span");
    p.innerText = `⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count} | ${repo.language || "N/A"}`;
    p.className = "text-green-500 text-xs ml-3";

    li.appendChild(link);
    li.appendChild(p);
    repos.appendChild(li);
  });
}
