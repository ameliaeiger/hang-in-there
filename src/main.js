// query selector variables go here 👇
// test
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
  // "Some of the worst things in my life never happened."
  // "If you want to be loved, be loveable."
  // "Questions you cannot answer are better than answers you cannot question.""
  // "To know enough is enough is enough to know."
  // "You are something the Universe is doing in the same way a wave is something the ocean is doing"
  // "You're not as bad as they made you feel."
  // "Don’t believe everything that you think."
  // "If you are living in fear you cannot live genuinely because you are always in a defensive stance."
  // "If you don’t deal with your demons, they go into the cellar of your soul and lift weights."
  // "A net is a bunch of holes tied together with string."
  // "We are not units of commodified energy that can be controlled."
  // "The task is not yours to finish but neither are you free not to take part in it"
  // "Eat a live frog first thing in the morning and nothing worse will happen for the rest of the day"
  // "You can pray for rain, but you better dig a well, as well."
  // "You can't stop the waves, but you can learn how to surf."
  // "If you want to ride the train, you gotta' lay down the tracks."
  // "All we have to do is decide what to do with the time that is given us."
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
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
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
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
var savedPosters = [];
var currentPoster;


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
//This piece of code will: select a random element from any array passed through its parameters
function getRandomElement(array) {
  let randomNum = (getRandomIndex(array));
  let randomItem = array[randomNum]
  return randomItem
}

document.querySelector(".show-random").addEventListener("click", RandomPoster)

function getRandomPoster() {
  var randomImage = getRandomIndex(images)
  var randomTitle = getRandomIndex(titles)
  var randomQuotes = getRandomIndex(quotes)
  var randomPoster = new Poster(randomImage, randomTitle, randomQuotes)
  return randomPoster; // currentPoster = randomPoster so when button is clicked it states what current Poster is
}
//Make 'getRandomPoster' function for loop that infinitely grabs random keys from arrays and is default page
//Make 'savePoster' function - if button is clicked, store these keys in an array/object
//Make 'showSavedPosters' class - if clicked, display each object saved in class
// If click 'Show Another Random Poster' run 'getRandomPoster" function'
