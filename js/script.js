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
    year: 2012
  },
  {
    quote: "I am the king of the nerds.",
    source: "Leonard",
    citation: "The Big Bang Theory"
  },
  {
    quote: "As my mom used to say, ‘When you’re doing a puzzle, it’s like you’ve got a thousand friends.’ She was full of fun lies like that.",
    source: "Amy",
    citation: "The Big Bang Theory"
  },
  {
    quote: "What up, Shel-Bot?",
    source: "Penny",
    citation: "The Big Bang Theory"
  },
  {
    quote: "I haven’t cried this hard since Toy Story 3.",
    source: "Raj",
    citation: "The Big Bang Theory"
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



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);