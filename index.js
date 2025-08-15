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