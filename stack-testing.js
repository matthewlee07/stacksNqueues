'use strict';

const {Stack, createNode} = require('./stack');

const myStack = new Stack;
myStack.push("data1");
myStack.push("data2");
myStack.push("data3");

myStack.display();
myStack.pop();
myStack.display();

