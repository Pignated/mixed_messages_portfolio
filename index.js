#!/usr/bin/env node
let luckyNumber = Math.floor(Math.random() * 1000000000-1).toString().padStart(9,'0').match(/.{3}/g).join('-');
console.log(`Your lucky number is: ${luckyNumber}`)
function insertChar(str, char, n) {
  return str.replace(new RegExp(`(.{${n}})`, 'g'), `$1${char}`);
}