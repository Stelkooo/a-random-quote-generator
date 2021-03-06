/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: "Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors.",
    source: "Sheldon",
    citation: "The Big Bang Theory",
    year: 2012,
    episode: "The Rothman Disintegration"
  },
  {
    quote: "I am the king of the nerds.",
    source: "Leonard",
    citation: "The Big Bang Theory",
    episode: "The Recombination Hypothesis"
  },
  {
    quote: "As my mom used to say, ‘When you’re doing a puzzle, it’s like you’ve got a thousand friends.’ She was full of fun lies like that.",
    source: "Amy",
    citation: "The Big Bang Theory",
    episode: "The Scavenger Vortex"
  },
  {
    quote: "What up, Shel-Bot?",
    source: "Penny",
    citation: "The Big Bang Theory",
    episode: "The Cruciferous Vegetable Amplification"
  },
  {
    quote: "I haven’t cried this hard since Toy Story 3.",
    source: "Raj",
    citation: "The Big Bang Theory",
    episode: "The Apology Insufficiency"
  }
];

/***
 * `getRandomQuote` function
 * return a random quote from the quotes arr
***/
function getRandomQuote() {
  return quotes[Math.floor((Math.random() * quotes.length))];
}

/***
 * `printQuote` function
 * changes the quote-box HTML id with a new quote
***/
function printQuote() {
  let rdmQuote = getRandomQuote();
  let HTMLString = `<p class="quote">${rdmQuote.quote}</p>
  <p class="source">${rdmQuote.source}`;
  if (rdmQuote.citation) {
    HTMLString += `<span class="citation">${rdmQuote.citation}</span> `;
  };
  if (rdmQuote.year) {
    HTMLString += `<span class="year">${rdmQuote.year}</span> `;
  };
  if (rdmQuote.episode) {
    HTMLString += `<span class="episode">${rdmQuote.episode}</span> `;
  };
  HTMLString += `</p>`;
  document.getElementById('quote-box').innerHTML = HTMLString;
  randomBackgroundColor();
}

/***
 * `randomBackgroundColor` function
 * changes the body background with a random color
***/
function randomBackgroundColor() {
  let body = document.getElementsByTagName("body")[0];
  body.style.backgroundColor = `rgb(${((Math.random() * 255) + 1)}, ${((Math.random() * 255) + 1)}, ${((Math.random() * 255) + 1)})`;
}

/***
 * changes the quote displayed every 10 seconds
***/
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);