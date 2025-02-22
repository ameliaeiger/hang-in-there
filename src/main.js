// query selector variables go here 👇
let showRandomButton = document.querySelector(".show-random");
let backgroundColorButton = document.querySelector(".change-background");
let posterBackground = document.querySelector(".poster");
let posterImageButton = document.querySelector(".poster-img");
let posterTitleButton = document.querySelector(".poster-title");
let posterQuoteButton = document.querySelector(".poster-quote");
let makeOwnPosterButton = document.querySelector(".show-form");
let goBackButton = document.querySelector(".show-main");
let showSavedButton = document.querySelector(".show-saved");
let backToMainButton = document.querySelector(".back-to-main");
let showMyPosterButton = document.querySelector(".make-poster");
let saveButton = document.querySelector(".save-poster");
let savedArea = document.querySelector(".saved-posters-grid");




// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don't downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others' limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];

var colors = [
  "black",
  "#005F73",
  "#CA6702",
  "#BB3E03",
  "#AE2012",
  "#E9D8A6",
  "#0A9396",
  "#001219",
  "#94D2BD",
  "#9B2226",
  "#EE9B00",
];
var savedPosters = [];
var currentPoster;

// event listeners go here 👇
//This code will: display a random poster on load
window.addEventListener("load", uponLoad)

showRandomButton.addEventListener("click", uponLoad)

backgroundColorButton.addEventListener("click", changeBackgroundColor);
posterImageButton.addEventListener("click", changeImage);
posterTitleButton.addEventListener("click", changeTitle);
posterQuoteButton.addEventListener("click", changeQuote);
makeOwnPosterButton.addEventListener("click", toggleFormView);
goBackButton.addEventListener("click", toggleFormView);
showSavedButton.addEventListener("click", toggleSavedView)
showSavedButton.addEventListener("click", miniPoster)
backToMainButton.addEventListener("click", toggleSavedView);
showMyPosterButton.addEventListener("click", submitForm)
saveButton.addEventListener("click", storeData)


// functions and event handlers go here 👇
// (we've provided one for you to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomElement(array) {
  let randomNum = (getRandomIndex(array));
  let randomItem = array[randomNum]
  return randomItem
}

  function uponLoad() {
  let loadPoster = new RandomPoster()
  posterImageButton.src = loadPoster.imageURL
  posterTitleButton.innerHTML = loadPoster.title
  posterQuoteButton.innerHTML = loadPoster.quote
  return loadPoster
}

function changeBackgroundColor() {
  posterBackground.style.backgroundColor = getRandomElement(colors);
}

function changeImage() {
  posterImageButton.src = getRandomElement(images)
}

function changeTitle() {
  posterTitleButton.innerHTML = getRandomElement(titles);
}

function changeQuote() {
  posterQuoteButton.innerHTML = getRandomElement(quotes);
}

function toggleMainView() {
  const grabPosterId = document.getElementById("main-posterId");
  if (grabPosterId.className == "main-poster") {
    grabPosterId.className = "main-poster hidden";
  } else {
    grabPosterId.className = "main-poster";
  }
}

function toggleFormView() {
  const grabFormId = document.getElementById("poster-form-shown");
  if (grabFormId.className == "poster-form hidden") {
    grabFormId.className = "poster-form";
    toggleMainView();
  } else {
    grabFormId.className = "poster-form hidden";
    toggleMainView();
  }
}

function toggleSavedView() {
  const grabSavedId = document.getElementById("saved-posters-shown");
  if (grabSavedId.className == "saved-posters hidden") {
    grabSavedId.className = "saved-posters";
    toggleMainView();
  } else {
    grabSavedId.className = "saved-posters hidden";
    toggleMainView();
    }
  }

function submitForm() {
  event.preventDefault();
  toggleFormView();
  let data = getFormData();
  posterImageButton.src = data.imageURL
  posterTitleButton.innerHTML = data.title
  posterQuoteButton.innerHTML = data.quote
}

function getFormData() {
  let userInputImage = document.getElementById("poster-image-url").value;
  let userInputQuote = document.getElementById("poster-quote").value;
  let userInputTitle = document.getElementById("poster-titleId").value;

  let userPoster = new Poster(userInputImage, userInputTitle, userInputQuote);

  images.push(userPoster.imageURL)
  titles.push(userPoster.title)
  quotes.push(userPoster.quote)
  return userPoster
}


function captureAsObject() {
  let currentDisplayImage = posterImageButton.src
  let currentDisplayQuote = posterQuoteButton.innerText;
  let currentDisplayTitle = posterTitleButton.innerText;
  let currentBackgroundColor = posterBackground.style.backgroundColor
  let newObject = new Poster (currentDisplayImage, currentDisplayTitle, currentDisplayQuote, currentBackgroundColor);
  return newObject
}

function storeData() {
  let myPoster = captureAsObject()
for (let i = 0; i < 10; i++)
if (!savedPosters[i]) {
  savedPosters[i] = myPoster;
  return myPoster;
} else if (myPoster.title === savedPosters[i].title &&
   myPoster.quote === savedPosters[i].quote &&
   myPoster.imageURL === savedPosters[i].imageURL &&
   myPoster.color === savedPosters[i].color) {
     return "taken!";
   } else if (savedPosters[i] === undefined) {
         savedPosters[i] = myPoster;
         return savedPosters
       }
  }

  function miniPoster() {
  for (let i = 0; i < savedPosters.length; i++) {
    let currentURL = savedPosters[i].imageURL
    let currentTitle = savedPosters[i].title
    let currentQuote = savedPosters[i].quote
    let currentId = savedPosters[i].id
    let currentPosterColor = savedPosters[i].color
    let imageNode = document.getElementById("mini-img" + i);
    let titleNode = document.getElementById("mini-poster-title" + i);
    let quoteNode = document.getElementById("mini-poster-quote" + i);
    let idNode = document.getElementById("mini-poster-shown" + i);
    idNode.className = "mini-poster " + savedPosters[i].id;
    idNode.style.backgroundColor = currentPosterColor
    imageNode.src = currentURL;
    titleNode.innerText = currentTitle;
    quoteNode.innerText = currentQuote;
    }
    getAllMiniPosters()
  }

  function deletePoster() {
    let allMiniPosters = document.querySelectorAll(".mini-poster")
    for (let i = 0; i < allMiniPosters.length; i++) {
      let idNumber = allMiniPosters[i].id
      if (idNumber.includes(this.id)){
      savedPosters.splice(i, 1);
      let toBeRemoved = document.getElementById(idNumber);
      toBeRemoved.className = "mini-poster hidden"
    }
  }
}

function getAllMiniPosters() {
let allMiniPosters = document.querySelectorAll(".mini-poster")
for (let i = 0; i < allMiniPosters.length; i++) {
  allMiniPosters[i].addEventListener("dblclick", deletePoster)
  }
  return allMiniPosters
}
