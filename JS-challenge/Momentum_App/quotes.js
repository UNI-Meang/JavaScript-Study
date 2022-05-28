const quotes = [
    {
        quote: "Invest in renewable energy. ",
        author: "YES, YOU CAN CHANGE!",
    },
    {
        quote: "Keep fossil fuels in the ground.",
        author: "YES, YOU CAN CHANGE!",
    },
    { 
        quote: "Improve farming and encourage vegan diets",
        author: "YES, YOU CAN CHANGE!",
    },
  {
    quote: "Reduce how much people consume.",
    author: "YES, YOU CAN CHANGE!",
  },
  {
    quote: "Reduce plastic.",
    author: "YES, YOU CAN CHANGE!",
  },
];


const quote = document.querySelector("#quote span:first-child");
// const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// quote.innerText = todaysQuote.quote;
quote.innerHTML = `<p class = "quote-txt"> ${todaysQuote.quote} </p>;`
// author.innerText = todaysQuote.author;