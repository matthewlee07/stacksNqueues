'use strict';

const { Stack } = require('./stack');
const { Queue } = require('./queue');
const myStack = new Stack;
const myQueue = new Queue;

//Palindrome
function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // your code goes here
    let sampleStack = new Stack;

    for (let i = 0; i < s.length; i++) {
        sampleStack.push(s[i]);
    }
    for (let i = 0; i < s.length/2; i++) {
        if(s[i]!==sampleStack.pop()){
            return false;
        }
    }
    return `${s} is a palidrome`
}

console.log(is_palindrome('A car, a man, a maraca'));

