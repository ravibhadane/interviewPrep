import type { Question } from "../model/question";

export const javascriptQuestions:Question[] = [
  {
    id: "1",
    question: "What is closure in JavaScript?",
    answerText: `A closure is an inner function that has access to the outer functions variables, even after the outer function has finished executing
###### The closure has three scopes
* It has access to its own scope
* It has access to the outer function variable
* It has access to the global variable
It is useful for hiding implementation detail in javascript`,
    answerCode: ` function outer() {
      let count = 0;
      return function inner() {
        count++;
        return count;
      };
    }
             `,
  },
  {
    id:"2",
    question: "What is difference between let and const",
    answerText: `
- var is function scoped
- let is block scoped

| var | let | const |
|-----|-----|------ |
| Function scoped | Block scoped | Block scoped |
`
  },
  {
    id:"3",
    question: "What is callback hell?",
    answerText:`
Callback hell is the result of heavily nested callbacks that make the code not only unreadable but also difficult to maintain.
###### Situation:
* The Asynchronous function requires callbacks as a return parameter. When multiple asynchronus function are chained together then callback hell situation comes up.
 ###### Way to Solve the issue of Callback Hell:
- Modularization: breaks the callback into independent named function
- Use Control Flow library, like async
- Use generators with promises
- Use async / await
- Handle Every single error.
###### Example:
    `,
    answerCode:`
getUser(id, function(user) {
  getOrders(user, function(orders) {
    getItems(orders, function(items) {
      processItems(items, function(result) {
        console.log(result); //Callback hell
      });
    });
  });
});   `
  },
  {
    id: "4",
    question:"What is Async/Await?",
    answerText: `
* The newest way to write asynchronous code in javascript
* It used implicit promise to return the result.
* The syntax and structure of code is similar to writing synchronous function 
* It is non blocking (just like promise & callback)
* The function operates asynchronously via event loop   
###### Normal Function:
\`\`\`
function add(x, y){
    return x + y
}
\`\`\`
###### Async function:
\`\`\`
async function add(x, y){
    return x + y
}
\`\`\`
##### What is Await?
* Async function can make use of the await expression
* This will pause the async function and wait for the promise to resolve prior to moving on
`,
answerCode:`
const getData = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("data");
        },3000)
    });
}
const makeAsync = async () => {
    const result = await getData();
    console.log(result)
}
makeAsync();
`

  },

  {
    id:"5",
    question:"What is Generators?",
    answerText:`
Generators are functions that can be paused and resumed, which enable a varity of applications
* It start with the keyword **function***
* It is paused in the middle via **yield**

Generator functions are new feature in ES6 that allow function to generate many values over time by returning an object 
which can be iterated over to pull values from the function one value at a time.
\`\`\`
function* createGenerator(){
    yield 1;
    console.log("After 1st yield");
    yield 2;
}
let myGen = createGenerator();
console.log(myGen.next()); // Object{value:1, done:false}
//After 1st yield
console.log(myGen.next());// Object{value:1, done:false}
console.log(myGen.next());// Object{value:undefined, done:true}
\`\`\`

next() returns an object with the value and boolean callled done that return true if the generator is out of values.

generator function that can return multiple values with the help of the yield keyword.

###### Example:
\`\`\`
function* idGen(){
    let i = 0;
    while(true){
      yield ++i;
    }
}
const myIdGen = idGen();
console.log(myIdGen.next().value); // 1
console.log(myIdGen.next().value); // 2
console.log(myIdGen.next().value); // 3
console.log(myIdGen.next().value); // 4
\`\`\`
`
  },
  {
    id:"6",
    question:"What is Event Propagation?",
    answerText:`
Event propagation is the order that the event fire. By default event propagates from child to parent node, also known as Bubbling
###### Types of event propagation
1. Bubbling
2. Capturing

The DOM level Event define two method which are used to assign and remove event handlers
- addEventListner() and removeEventListner()
    `
  },
  {
    id:"7",
    question:"Waht is Event Bubbling?",
    answerText:`
JavaScript allows DOM element to be nested inside each other. In such cases if the handler of the child is clicked, the handler of the parent also work
as if it were clicked too.
* Event Bubbling is bottom-up approach
* Event bubbling is when event fire on element and then bubbles up to parent element till it reaches root node.
* By default all events are bubbling type
###### Example:
<div id="div1">
  <button id="button1">Button1</Button>

    `
  },
  {
    id:"8",
    question:""
  },
  {
    id:"9",
    question:""
  },
  {
    id:"10",
    question:""
  },
  {
    id:"11",
    question:""
  },
  {
    id:"12",
    question:""
  }
  
];

