import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios
 .get(`https://api.github.com/users/somersgreg`)

//  .then((response.data) => {
  //  console.log('this is your data: ', response);
//  })
 .then(response => {
  console.log(response);
  const entryPoint = document.querySelector(".cards");
  console.log(entryPoint);
  entryPoint.appendChild(makeCard(response));
})
  // works. Targeting data to get just what I need. But dont see img.
 .catch((error) => {
   console.log('this didnt work:', error);
 });


 // works. Change url to an error and it displays.

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
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
*/
const makeCard = response => {
  //Main Div
  let newCard = document.createElement("div");//the let makes readable
  newCard.classList.add("card");//create whole div
  // IMG
  let avatar = document.createElement("img");
  avatar.setAttribute("src", response.data.avatar_url);//top of list!
  newCard.appendChild(avatar);//appending as i go instead of grouping phases
  // Inner Div (card-info)
  let innerDiv = document.createElement("div");
  innerDiv.classList.add("card-info");//contain info.
  newCard.appendChild(innerDiv);
  // Real Name
  let nameTag = document.createElement("h3");
  nameTag.textContent = response.name;
  nameTag.classList.add("name");//h3 called class name
  newCard.appendChild(nameTag);
  // Username
  let userTag = document.createElement("p");
  userTag.textContent = response.data.login;
  userTag.classList.add("username");//p called class username
  newCard.appendChild(userTag);
  // Location
  let local = document.createElement("p");
  local.textContent = `Location: ${response.data.location}`;
  newCard.appendChild(local);//no class
  // Profile URL p
  let profile = document.createElement("p");
  profile.textContent = `Profile:  `;
  newCard.appendChild(profile);
  // Profile URL
  let profileUrl = document.createElement("a");
  profileUrl.textContent = `${response.data.html_url}`;//just for show
  profileUrl.setAttribute("href",response.data.html_url);
  newCard.appendChild(profileUrl);

  return newCard;
}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
