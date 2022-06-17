/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

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
***/
function getRandomQuote() {
  return quotes[Math.floor((Math.random() * quotes.length))];
}

/***
 * `printQuote` function
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
  HTMLString += `</p>`
  document.getElementById('quote-box').innerHTML = HTMLString; 
  return HTMLString;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);