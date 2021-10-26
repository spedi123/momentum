const quotes = [
    {
        quotes: "Nobody can make you feel inferior without your permission.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "You can never plan the future by the past.",
        author: "Edmund Burke"
    },
    {
        quote: "Take into account that great love and great achievements involve great risk.",
        author: "Dalai Lama"
    },
    {
        quote: "He that respects himself is safe from others.",
        author: "Henry Wadsworth Longfellow"
    },
    {
        quote: "Common sense is genius dressed in its working clothes.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "In three words I can sum up everything I’ve learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        quote: "It is the province of knowledge to speak, and it is the privilege of wisdom to listen.",
        author: "Oliver Wendell Holmes Sr."
    },
    {
        quote: "Don’t take life too seriously. You’ll never get out of it alive.",
        author: "Elbert Hubbard"
    },
    {
        quote: "Nothing that you have not given away will ever be really yours.",
        author: "C. S. Lewis"
    },
    {
        quote: "The two most important days in your life are the day you are born and the day you find out why.",
        author: "Mark Twain"
    }
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author