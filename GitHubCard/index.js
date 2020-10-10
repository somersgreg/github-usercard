import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>

  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>

  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards

  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
    /*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

const followers= [];
const getGit = (name) => {
axios
  .get(`https://api.github.com/users/${name}`)
  .then((response) => {
    const entryPoint = document.querySelector(".cards");
    entryPoint.appendChild(makeCard(response));
})}
const getFollowers = () => {
axios
  .get(`https://api.github.com/users/somersgreg/followers`)
  .then((response) => {
    let followers = response.data
    console.log("getFollowers -> response.data", followers[0])

    followers.forEach ((item) => {
      console.log (item.login);
      let name = item.login;
      getGit (name);
    });
  })
  .catch((err) => {
    console.log('Here is the err: ', err);
  });
}
getFollowers()

const makeCard = (response) => {
  //Main Div
  let newCard = document.createElement("div"); //1
  newCard.classList.add("card"); //2
  //1 the let makes readable
  //2 create whole div

  // IMG
  let avatar = document.createElement("img");
  avatar.setAttribute("src", response.data.avatar_url); //1
  newCard.appendChild(avatar); //2
  //1 top of list!
  //2 appending as i go instead of grouping phases

  // Inner Div (card-info)
  let innerDiv = document.createElement("div");
  innerDiv.classList.add("card-info"); //1
  newCard.appendChild(innerDiv);
  //1 contain info.

  // Real Name
  let nameTag = document.createElement("h3");
  nameTag.textContent = response.name;
  nameTag.classList.add("name"); //1
  newCard.appendChild(nameTag);
  //1 h3 called class name

  // Username
  let userTag = document.createElement("p");
  userTag.textContent = response.data.login;
  userTag.classList.add("username"); //1
  newCard.appendChild(userTag);
  //1 p called class username

  // Location
  let local = document.createElement("p");
  local.textContent = `Location: ${response.data.location}`;
  newCard.appendChild(local); //1
  //1 no class

  // Profile URL p
  let profile = document.createElement("p");
  profile.textContent = `Profile:  `;
  newCard.appendChild(profile);

  // Profile URL
  let profileUrl = document.createElement("a");
  profileUrl.textContent = `${response.data.html_url}`; //1
  profileUrl.setAttribute("href", response.data.html_url);
  profileUrl.setAttribute("target", "_blank"); //2
  newCard.appendChild(profileUrl);
  //1 just for show
  //2 is this needed?

  //<p>Followers: {users followers count}</p>
  let followers = document.createElement("p");
  followers.textContent = `Following: ${response.data.followers}`;
  newCard.appendChild(followers);

  //<p>Following: {users following count}</p>
  let following = document.createElement("p");
  following.textContent = `Following: ${response.data.following}`;
  newCard.appendChild(following);

  //<p>Bio: {users bio}</p>
  let bio = document.createElement("p");
  bio.textContent = `Bio: ${response.data.bio}`;
  newCard.appendChild(bio);

  return newCard;
};
