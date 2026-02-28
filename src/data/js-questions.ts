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
    question:"What is Currying?",
    answerText: `
Currying is technique of evaluating funciton with multiple arguments into sequence of function with single argument.

Currying is a process to convert funciton with more arguments to multiple function with single argument.

###### Example
\`\`\`
let multiply = function(x){
  return function(y){
    return x * y
  }
}
let multiplyByTwo = multiply(2);
console.log(multiplyByTwo(2));   //4
let multiplyByThree =  multiply(3);
console.log(multiplyByThree(10));  //30
\`\`\`
    `,
  },
  {
    id:"9",
    question:"What is Higher Order Function?",
    answerText:`
A higher-order function is a function that either:
1. Takes another function as an argument, or
2. Returns a function.

Function that operate on other functions either by taking them as arguments or by returning them are called Higher Order Functions.

Higher order function are result of function being first class citizen in javascript.

Examples : map, filter, reduce, forEach, find, some, every, sort
\`\`\`
function higherOrder(fn){
    fn();
}

function test(){
  console.log("Hello");
};

higherOrder(test);
\`\`\`

    `
  },
  {
    id:"10",
    question:"What is arrow function? (Lambda function)",
    answerText:`
* Arrow function expression syntax is shorter way of creating a function expression.
* You don't need the function keyword , the return keyword and curl-y brackets
* Arrow function do not have their own this
* Do not have proptotype
* Can not be used for constructor and should not be used as object methods

In classic function expression the this keyword is bound to different values based on the context in which it is called.

With arrow function however this is lexically bound. It means that it used  **this** from the code that contains arrow function.

*****Benefits of Arrow Function
* One is that shorter syntax and that requires less code.
* **this** is depend on how function is called, No binding of this operator
* **this** is captured by the arrow function from outside the function body
    `
  },
  {
    id:"11",
    question:"Difference between arrow function and regular function?",
    answerText:`
| Arrow function | Normal(Regular) function | 
|----------------|-----------------|
| Arguments object is not available | available in normal function | 
| arrow function are only **callable** not **constructible** | regular function created using declarations or expression are **constructible** and **callable** | 
| We will get runtime error on trying to construct a non-constuctible arrow function using new keyword | Constructible they can be callled using **new** keyword
| Do not have their own this , instead they inherit from their parent scope which called **lexical scoping** | Has its own this (depends on how it's called)
| Not hoisted | function declarations are hosited |
| \`\`\` function add(a, b) { return a + b; } \`\`\` | \`\`\` const add = (a, b) => { return a + b; }; \`\`\` |
    `
  },
  {
    id:"12",
    question:"What is Map?",
    answerText:`
The Map object is simple key/value pair. keys and values in map be primitive or objects.
###### Syntax:
\`\`\`
let map = new Map([iterable]);
\`\`\`

The parameter iterable present any iterable objects whose elements comprise of a key/value pair. Maos are ordered.

i.e. They traverse the elements in the order of their insertion.

###### Map Operations:
The **set()** function sets the value for the key in the Map object. The set() function takes two parameter namely the key and its value. This function return map object.
**set()** method is also chainable.

The **has()** function returns a boolean value indicating whether the specified key is found in the Map object. This function takes key a key as paramter

The **get()** function is used to retrive the value corresponding to the specified key.

Map constructor can also be passed as array. Morever, map also support the use of spread operator to represent an array.
\`\`\`
var roles = new Map([
    ['r1', 'User'],
    ['r2', 'Guest'],
    ['r3', 'Admin']
]);
console.log(roles.get('r2')); //Guest
\`\`\`

Note: The get() function returns undefined if the key specified doesn't exist in the map.

The **set()** replaces the value for the key if it already exists in the map.
    `,
answerCode:`
let map = new Map();
map.set("name", "Ravindra");
console.log(map.get("name"));   //Ravindra

console.log(map); //Map(1) { 'name' => 'Ravindra' }

map.set(1, true);
console.log(map.has("1")) //false

var roles = new Map();
roles.set("r1","User")
     .set("r2","Guest")
     .set("r3","Admin");
console.log(roles.has("1")); //false

//To delete entry in the Map you use the delete() method
roles.delete('r1');
console.log(roles);//Map(2) { 'r2' => 'Guest', 'r3' => 'Admin' }

//To delete all the entries in the map, use the clear() method

roles.clear();
console.log(roles); //{}

//Hence the size or map now is zero
console.log(roles.size);
` 
  },
  {
    id:"13",
    question:"What is WeakMap?",
    answerText:`
A weakMap is identical to Map except for the following features
* Key of a WeakMap must be objects
* Key in a WeakMap can be garbage collected.

Garbage collection is a process of clearing the memory ooccupied by unreferenced objects in a program.
* A WeakMap can not be iterated or cleared (You can not loop over WeakMap using forEach, for..of etc)
\`\`\`
let weakMap = new WeakMap();
let obj = {};
console.log(weakMap.set(obj, "Hello")); //WeakMap { <items unknown> }
console.log(weakMap.has(obj)); //true
\`\`\`

- It doesn't have methods like keys() , values(), entries();
    `
  },
  {
    id:"14",
    question:"What is Set?",
    answerText:`
**Set** object is collection of unique values of any types. To create new empty set, you following syntax
\`\`\`
let set = new Set();    
\`\`\`
The set constructor also accepts an optional iterable object. If you pass iterable object to the set constructor, all the elements
of the iterable object will be added to the new set.

Array can store the duplicate values but set don't store duplicate values
    `,
    answerCode:`
    let set = new Set();
//Add keys to the set
set.add({x:12});
set.add(44);
set.add("text");

//check if provided key is present
console.log(set.has("text"));//true

//delete a key
set.delete(44);

//loop through the key in set
for(var i of set){
    console.log(i)
}

var set1 = new Set([1,2,3,4,5]);
console.log(set1.size); //5
//create clone of another set
var set2 = new Set(set.values());`
  }
  
];

