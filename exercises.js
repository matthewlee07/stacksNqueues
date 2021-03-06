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

  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== sampleStack.pop()) {
      return false;
    }
  }

  return `${s} is a palidrome`;
}

// console.log(is_palindrome('A car, a man, a maraca'));
//console.log(is_palindrome('A car, a man, and macaroni'));


// Matching Parentheses

function matchParens(inStr) {
  const opens = "([{";
  const closes = ")]}";
  const expStack = new Stack;
  let tempIdxClose;
  let tempIdxOpen;

  for (let i = 0; i < inStr.length; i++) {
    if (opens.indexOf(inStr[i]) >= 0) {
      expStack.push(inStr[i]);
    }
    else {
      tempIdxClose = closes.indexOf(inStr[i]);
      if (tempIdxClose >= 0) {
        tempIdxOpen = opens.indexOf(expStack.pop());
        if (tempIdxOpen !== tempIdxClose) {
          return (`error ${inStr[i]}`);
        }
      }
    }
  }

  if (expStack.top !== null) {
    return ('error');
  }

  return ('success! everthing is matched');
}

const strExpression = 'abd(efgh { klm [  dg } a)';
// console.log(matchParens(strExpression));

//Square dance

function matchDancers(dancers) {
  const danceQueue = new Queue;
  //iterate through dancers
  for (let i = 0; i < dancers.length; i++) {
    //if danceQueue is empty add dancer
    if (danceQueue.first === null) {
      danceQueue.enqueue(dancers[i])
    }

    else {
      if (danceQueue.first.data[0] === dancers[i][0]) {
        danceQueue.enqueue(dancers[i])
      } else {
        danceQueue.dequeue()
      }
    }
    // console.log("new danceQueue",danceQueue);
  }
  return danceQueue.display();
}

// let dancers = ['F Jane', 'M Frank', 'M John', 'M Sherlock', 'F Modanna', 'M David', 'M Christopher', 'F Beyonce']
// matchDancers(dancers);


// OPHIDIAN BANK

function ophidianBank(custArr) {

  const bankQ = new Queue;
  let currCust;

  custArr.forEach(cust => bankQ.enqueue(cust));

  while (bankQ.first) {
    currCust = bankQ.dequeue();
    if ((Math.random() * 100) < 25) {
      console.log(`${currCust}'s paperwork wasn't in order - back of the line.`);
      bankQ.enqueue(currCust);
    }
    else {
      console.log(`${currCust} was served - have a nice day!`);
    }
  }
  console.log('Ophidian bank is closed.');
}

// const customers = ['Bob', 'Steve', 'Sharon', 'Wendy', 'Ken', 'Sara', 'Gwen'];
// ophidianBank(customers);

// SORT STACK

function sortStack(inStk) {

  const tempStk = new Stack;
  let itemHold;
  console.log('inStk - start');
  showStack(inStk);
  console.log('--------');
  while(inStk.top !== null){
    if(!itemHold) itemHold = inStk.pop();

    if(!tempStk.top || tempStk.top.data <= itemHold) {
      tempStk.push(itemHold);
      itemHold = null;
    }
    else {
      inStk.push(tempStk.pop());
    }
  }

  for(let node = tempStk.top; node; node = node.next) {
    inStk.push(tempStk.pop());
  }

  console.log('inStk - end');
  showStack(inStk);

}

function showStack(inStk){
  for(let node = inStk.top; node; node = node.next){
    console.log(node.data);
  }
}


// const priStk = new Stack;
// const numsToSort = [4, 7, 8, 1, 9, 5];
// numsToSort.forEach( n => {
//   priStk.push(n);
// });
// sortStack(priStk);



