/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           <your name>
*/
let cards = document.querySelector('.cards');
let followersArray = ["lindseycason","tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

// //stretch ONE
axios.get("https://api.github.com/users/LindseyCason/followers")
  .then(response=>{
// console.log(response) 
response.data.forEach(person=>{
  let followerURL = person.url;
  axios.get(followerURL)
  .then( response =>{
    // console.log(response)
    let newFollower = makeCard(response);
    cards.appendChild(newFollower);
}) }) })
.catch(error =>{
  console.log(error);
})


  
// //stretch



followersArray.forEach( user =>{
axios.get('https://api.github.com/users/'+user)
.then( response =>{
  console.log(response);
    let newPerson = makeCard(response);
    cards.appendChild(newPerson);
})
.catch(error =>{
  console.log(error);
})})


function makeCard(response){
  const card = document.createElement('div');//main card frame
   const image = document.createElement('img');//profile pic attach to card
 const info = document.createElement('div'); //info attach to card
   const name = document.createElement('h3');//name attach to info
   const username = document.createElement('p')//username attach to info
   const location = document.createElement('p');//location attach to info
   const profile = document.createElement('p');//text that reads 'profile', attach to info
     const profilelink = document.createElement('a');//actual link to profile 'address to users github page'
   const followers = document.createElement('p');//followers attach to info
   const following = document.createElement('p');//following attach to info
   const bio = document.createElement('p');// bio attach to info
 
   card.appendChild(image);
   card.appendChild(info);
   info.appendChild(name);
   info.appendChild(username);
   info.appendChild(location);
   info.appendChild(profile);
     info.appendChild(profilelink);
   info.appendChild(followers);
   info.appendChild(following);
   info.appendChild(bio);
 
   card.classList.add('card');
   info.classList.add('card-info');
   name.classList.add('name');
   username.classList.add('username');
 
   image.src = response.data.avatar_url
   name.textContent = response.data.name;
   username.textContent = 'Username: ' + response.data.login
   location.textContent = 'Location: ' + response.data.location
   profile.textContent = 'Profile: '
     profilelink.href = response.data.html_url
     profilelink.textContent = "View Github Profile"
   followers.textContent = 'Followers: ' + response.data.followers
   following.textContent = 'Following: ' + response.data.following
   bio.textContent = "Bio: " + response.data.bio

   //stretch TWO
   const expandedDiv = document.createElement('div');
   info.appendChild(expandedDiv);
   expandedDiv.classList.add('expandedDiv');
    


  const repos = document.createElement('p');
  repos.textContent = 'Repos: ' + response.data.public_repos;
  const email = document.createElement('p')
  email.textContent = 'Email: ' + response.data.email;
     
    
   const button = document.createElement('button');
   info.appendChild(button);
   button.textContent='MORE INFO';
   button.classList.add('button');

   button.addEventListener('click', e =>{
    card.classList.toggle('card-open');
    card.classList.forEach(classItem =>{
  if(classItem ==='card-open'){
      button.textContent = "CLOSE";
      card.style.height = '30rem'
      expandedDiv.style.display = 'block';
      expandedDiv.appendChild(repos)//add this to if
      expandedDiv.appendChild(email)//add this to if
  }else if(classItem !== 'card-open'){
    expandedDiv.style.display='none';
    button.textContent = "MORE INFO";
    card.style.height = '23rem';
  }

    })
  })
   return card;
 }

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

