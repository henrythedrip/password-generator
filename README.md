# Password Generator

## Purpose of the program

This is a random password generator. Please note this is not truly random, it is pseudorandom and these passwords can be hacked.

## Some of this code was repurposed from this site

[link to code that i used](https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript)

Code that was used:

let result = '';
const charactersLength = characters.length;
  let counter = 0;
  while (counter < length)
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;

