const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote: "You only live once, but if you do it right, once is enough",
    author: "Mae West",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain",
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "Life is what happens to us while we are making other plans.",
    author: "Allen Saunders",
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "A woman is like a tea bag; you never know how strong it is until it's in hot water.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "If you don't stand for something you will fall for anything.",
    author: "Gordon A. Eadie",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// // 1) Math.round
// Math.round(1.1); // 1
// Math.round(0.8); // 1

// // 2) Math.ceil
// Math.ceil(1.1); // 2
// Math.ceil(1.9); // 2
// Math.ceil(1.01); // 2

// // 3) Math.floor
// Math.floor(1.9); // 1
// Math.floor(1.99999); // 1

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
