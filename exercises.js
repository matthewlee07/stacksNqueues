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

  return `${s} is a palidrome`;
}

//console.log(is_palindrome('A car, a man, a maraca'));
//console.log(is_palindrome('A car, a man, and macaroni'));


// Matching Parentheses

function matchParens(inStr) {
  const opens = "([{";
  const closes = ")]}";
  const expStack = new Stack;
  let tempIdxClose; 
  let tempIdxOpen;

  for (let i = 0; i < inStr.length; i++) {
    if(opens.indexOf(inStr[i]) >= 0) {
      expStack.push(inStr[i]);
    }
    else {
      tempIdxClose = closes.indexOf(inStr[i]);
      if(tempIdxClose >= 0) {
        tempIdxOpen = opens.indexOf(expStack.pop());
        if(tempIdxOpen !== tempIdxClose) {
          return(`error ${inStr[i]}`);
        }
      }
    }
  }

  if(expStack.top !== null) {
    return ('error');
  }

  return ('success! everthing is matched');
}

const strExpression = 'abd(efgh { klm [  dg } a)';
console.log(matchParens(strExpression));