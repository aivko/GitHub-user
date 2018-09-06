let userLogin = prompt('Enter username', 'gaearon');

fetch(`https://api.github.com/users/${userLogin}`)
.then(response => response.json())
.then(response => {
  const gitHubUserData = {
    avatar_url: response.avatar_url,
    name: response.name,
    login: response.login,
    company: response.company,
    location: response.location,
    public_repos: response.public_repos,
    following: response.following,
    followers: response.followers
  };
  document.querySelector("#js_avatar_url").src = gitHubUserData.avatar_url;
  document.querySelector("#js_user_name").innerHTML = gitHubUserData.name;
  document.querySelector("#js_user_login").innerHTML = gitHubUserData.login;
  document.querySelector("#js_user_company").innerHTML = gitHubUserData.company;
  document.querySelector("#js_user_location").innerHTML = gitHubUserData.location;
  document.querySelector("#js_user_repos").innerHTML = `Repositories: ${gitHubUserData.public_repos}`;
  document.querySelector("#js_user_following").innerHTML = `Following: ${gitHubUserData.following}`;
  document.querySelector("#js_user_followers").innerHTML = `Followers: ${gitHubUserData.followers}`;
})
.catch( error => console.log(error) );
