// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

// Array of quotes used to print to screen.
let quotes = [
  {
  quote: "We have staked the whole future of our new nation, not upon the power of government; far from it. We have staked the future of all our political constitutions upon the capacity of each of ourselves to govern ourselves according to the moral principles of the Ten Commandments of God.",
  source: "James Madison",
  citation: "General Assembly of the State of Virginia.",
  year: "1778",
},

{
  quote: "I never considered a difference of opinion in politics, in religion, in philosophy, as cause for withdrawing from a friend.",
  source: "Thomas Jefferson",
  citation: "Letter to William Hamilton.",
  year: "1800",
},

{
  quote: "We can't help everyone, but everyone can help someone.",
  source: "Rondald Reagan.",
  citation: null,
  year: null,
},

{
  quote: "A room without books is like a body without a soul.",
  source: "Marcus Tullius Cicero.",
  citation: null,
  year: null,
},

{
  quote: "To live is the rarest thing in the world. Most people exist, that is all.",
  source: "Oscar Wilde.",
  citation: null,
  year: null,
},

 ]

// Function using random numbers to generate quotes from above array.
function getRandomQuote() {
  let i = Math.floor(Math.random() * quotes.length) + 1;
        return quotes[i];
  }



// Function for printing random qotes to quote box.
function printQuote(){
let HTML = '';
let i = getRandomQuote();

HTML += '<p class = "quote">' + i.quote + '</p>';
  HTML += '<p class = "source">' + i.source;

    if (i.year) {
      HTML += '<p class = "year">' + i.year + '</p>';
}
      if (i.citation) {
        HTML += '<p class = "citation">' + i.citation + '</p>';
      }
            document.getElementById('quote-box').innerHTML = HTML;
}

// "show another quote" button triggers the 'printQuote' function calling a random quote.

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
