

// Array of quotes used to print to screen.
let quotes = [
  {
  quote: "We have staked the whole future of our new nation, not upon the power of government; far from it. We have staked the future of all our political constitutions upon the capacity of each of ourselves to govern ourselves according to the moral principles of the Ten Commandments of God.",
  source: "James Madison",
  citation: "General Assembly of the State of Virginia.",
  year: "1778",
  topic: "Politics."
},

{
  quote: "I never considered a difference of opinion in politics, in religion, in philosophy, as cause for withdrawing from a friend.",
  source: "Thomas Jefferson",
  citation: "Letter to William Hamilton.",
  year: "1800",
  topic: "Motivational."
},

{
  quote: "We can't help everyone, but everyone can help someone.",
  source: "Rondald Reagan.",
  topic: "Motivational."
},

{

  quote: "A room without books is like a body without a soul.",
  source: "Marcus Tullius Cicero.",
  topic: "Life"
},

{
  quote: "To live is the rarest thing in the world. Most people exist, that is all.",
  source: "Oscar Wilde.",
  topic: "Life."
},

 ]

// Function using random numbers to generate quotes from above array.
function getRandomQuote() {
  let i = Math.floor(Math.random() * quotes.length);
        return quotes[i];
  }

// Function to pull random image
  function getRandomImage(){
      let randomImage = Math.floor(Math.random() * 100000);
        return "https://source.unsplash.com/random?count=${" + randomImage + "}";
}


// Function for printing random qotes and images to page.
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
        if (i.topic) {
          HTML += '<p class = "topic">' + i.topic + '</p>';
        }

document.getElementById('quote-box').innerHTML = HTML;

      let randomImage = Math.floor(Math.random() * 100);
        document.body.style.backgroundImage = "url(" + getRandomImage() + ")";
          document.getElementById("quote-box").innerHTML;
        }


// PrintQuote interval to change quote if not prompted
setInterval("printQuote()", 7000);



document.getElementById('loadQuote').addEventListener("click", printQuote, false);

let temp = function (input){
  let userInput = (input - 32) * 5/9
    return userInput
}
  let value = temp(68)
  console.log(value)
