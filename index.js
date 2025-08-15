#!/usr/bin/env node
let luckyNumber = Math.floor(Math.random() * 1000000000-1).toString().padStart(9,'0').match(/.{3}/g).join('-');
console.log(`Your lucky number is: ${luckyNumber}`)
function insertChar(str, char, n) {
  return str.replace(new RegExp(`(.{${n}})`, 'g'), `$1${char}`);
}
let wordsOfWisdom = [
    "A fool and his money are soon parted",
    "The only thing better than ice cream is more ice cream",
    "The things one would do for a klondike bar should be less than what one would do for love",
    "The Real Slim Shady exists in all of us. But mostly in this one guy... I don't remember his name though. Skittles or hersheys or something",
    "Another day another dollar - a man who is severly underpaid",
    `Those with lucky number ${luckyNumber} are a bunch of suckers.`,
    "Learn Rust (as long as you don't care about having fun. If you do, learn python.)",
    "Those who don't learn from the past are far more interesting to watch, they'll probably do something stupid",
    "The only true wisdom is in knowing you know nothing"
]
console.log("Your words of wisdom are: " + wordsOfWisdom[Math.floor(Math.random()*wordsOfWisdom.length)])
let future = [
    "You will fall out of a tree tomorrow",
    "You will move to Arizona within six months",
    "You will purchase a large amount of illegal narcotics as part of a massive drug smuggling operation being secretly run by the head of the DEA",
    "You will meet someone very important to your future",
    "You will find something you thought lost",
    "A man with a very large stick is going to hit you with it",
    "Rain might fall sometime soon. Or not",
    "You will trip over a rock painted to look like Matt Damon",
    "You will trip over a rock painted to look like Scott Cawthorn",
    "A man named Murray will give you three gifts and then you will understand",
    "You will continue to not be able to find something you found lost",
    "You will be visited by three spirits who will show you the true meaning of Christmas. Spoiler: it's not generosity or family",
    "You will be see a great sign in the sky of the future",
    "You will pelt someone with stones"
]
console.log("Here is your prediction: " + future[Math.floor(Math.random()*future.length)])