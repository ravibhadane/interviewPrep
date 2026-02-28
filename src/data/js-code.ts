import type { Question } from "../model/question";

export const jsProblems: Question[] = [
  {
    id: "1",
    question: "Fibonacci series (iterative and recursive)",
    answerText: `
        Input: n = 6
        Output: 0 1 1 2 3 5`,
    answerCode: `const fibbo = (n) => {
  let a = 0;
  let b = 1;
  let result = [];

  for (let i = 0; i < n; i++) {
    result.push(a);      // add current Fibonacci number
    [a, b] = [b, a + b]; // update a and b for next iteration
  }

  return result.join(' ');
};

console.log(fibbo(6)); `,
  },
  {
    id: "2",
    question: "Factorial of a number",
    answerText: `
        Input: 5
        Output: 120`,
    answerCode: `const fact = (n) => (n === 0 ? 1 : n * fact(n - 1));

console.log(fact(5)); // 120`,
  },
  {
    id: "3",
    question: "Remove duplicates from an array",
    answerText: `
        Input: [1, 2, 2, 3, 4, 4]
        Output: [1, 2, 3, 4] `,
    answerCode: `const numbers = [1, 2, 2, 3, 4, 4];   
const unique = [...new Set(numbers)]; 
console.log(unique); // [1, 2, 3, 4]  
-----------------------------------------------------------------------

const removeDuplicates = (arr) => {
  return arr.filter((item, index, arr) => arr.indexOf(item) === index);
}
let a = [1, 2, 2, 3, 4, 4];
console.log(removeDuplicates(a)); // [1, 2, 3, 4]
        `,
  },
  {
    id: "4",
    question: "Remove duplicates from an array of object",
    answerText: `Input: [
  { id: 1, name: "Ravi" },
  { id: 2, name: "Payal" },
  { id: 1, name: "Ravi" },
  { id: 3, name: "Pratik" },
];

Output: [
  { id: 1, name: "Ravi" },
  { id: 2, name: "Payal" },
  { id: 3, name: "Pratik" },
];`,
    answerCode: `const removeDuplicates = (arr) => {
  return arr.filter(
    (item, index, arr) => index === arr.findIndex((f) => f.id === item.id),
  );
};
const users = [
  { id: 1, name: "Ravi" },
  { id: 2, name: "Payal" },
  { id: 1, name: "Ravi" },
  { id: 3, name: "Pratik" },
];
console.log(removeDuplicates(users));
        `,
  },
  {
    id:"5",
    question:"Flatten a nested array",
    answerText: `
    Input: [1, [2, [3, 4]]]
    Output: [1, 2, 3, 4]
    `,
    answerCode:`const nested = [1, [2, [3, 4]]];
const flat = nested.flat(2); // depth = 2, Use 'Infinity' for any depth
console.log(flat); // [1, 2, 3, 4]
------------------------------------------------------------
const flat = (arr)=>{
    let result = [];
    for(let item of arr){
        if(Array.isArray(item)){
            result.push(...flat(item))
        } else{
            result.push(item)
        }
    }
    return result
}
const nested = [1, [2, [3, 4]]];
console.log(flat(nested));
`
  },
  {
    id:"6",
    question:"Split an array into chunks of fixed size (dynamic UI)",
    answerText:`
     Input: chunk([1, 2, 3, 4, 5], 2)
     Output: [[1, 2], [3, 4], [5]]`,
     answerCode:` const chunk = (arr, size)=>{
     let result = [];
     for(let i=0; i< arr.length; i= i + size){
         result.push(arr.slice(i, i + size))
     }
     return result
 }
 console.log(chunk([1, 2, 3, 4, 5], 2))`
  },
  {
    id:"7",
    question:"Reverse a string without using built-in reverse",
    answerText:`
    Input: hello
    Output: olleh`,
    answerCode:`const reverseStr = (str)=>{
    let result = '';
    for(let i= str.length - 1; i >= 0; i--){
        result = result + str[i]
    }
    return result
} 
console.log(reverseStr('hello')); // olleh`
  },
  {
    id:"8",
    question: "Count character frequency in a string",
    answerText:`
    Input: "aabbbc"
    Output: { a: 2, b: 3, c: 1 }`,
    answerCode:`const freqCounter = (str) => {
    let freq = {};
    for(let char of str){
        freq[char] = (freq[char] || 0) + 1
    }
    return freq
}
let a = "aabbbc";
console.log(freqCounter(a));`
  },
  {
    id:"9",
    question: "Find the first non-repeating character in a string",
    answerText:`
    Input: "aabbcddee"
    Output: "c"`,
    answerCode:`const freqCounter = (str) => {
    let freq = {};
    for(let char of str){
        freq[char] = (freq[char] || 0) + 1
    }
    for(let char of str){
        if(freq[char] === 1) return char
    }
}
let a = "aabbcddee";
console.log(freqCounter(a));`
  },
  {
    id:"10",
    question: "Second Largest number in array",
    answerCode:`const secondLargest = (arr)=>{
    let first =  -Infinity;
    let second = -Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > first){
            second = first;
            first = arr[i]
        }
        if(arr[i] > second && arr[i] < first){
            second = arr[i]
        }
    }
    return second
}
let a = [10, 5, 8, 20, 12, 19];
console.log(secondLargest(a));`
  },
  {
    id:"11",
    question: "Third Largest number",
    answerCode:`const thirdLargest = (arr)=>{
    let first =  -Infinity;
    let second = -Infinity;
    let third = -Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > first){
            third = second;
            second = first;
            first = arr[i]
        } else if(arr[i] > second && arr[i] < first){
            third = second;
            second = arr[i]
        } else if(arr[i] > third && arr[i] < second){
            third = arr[i]
        }
    }
    return third
}
let a = [10, 5, 8, 20, 12, 19];
console.log(thirdLargest(a));`
  },
  {
    id:"12",
    question:`Implement Curry (generic curry() function)`,
    answerCode:`
function curry(fn){
  return function curried(...args){
    if(arguments.length >= fn.length){
      return fn(...args)
    } else {
      return (...nextArgs) => curried(...args, ...nextArgs);
    }
  }
}

const sum = (a, b, c) => a + b + c;
const currySum = curry(sum);
console.log(currySum(1,2,3));  //6
console.log(currySum(1)(2,3)); //6
console.log(currySum(1)(2)(3)); //6
console.log(currySum(1,2)(3));
` 
},
{
    id:"13",
    question:"Find the Maximum and Minimum number from array",
    answerCode:`
let arr = [5, 8, 2, 15, 3];
console.log(Math.max(...arr));  //15
console.log(Math.min(...arr));  //2
------------------------------------------------------
- Max Number
let result = arr.reduce((largest, num)=>{
    return largest > num? largest : num
},arr[0])
console.log(result);

- Min Number   // just changed greater than (>) to (<)
let result = arr.reduce((largest, num)=>{
    return largest < num? largest : num
},arr[0])
console.log(result);
    `
  },
  {
    id:"14",
    question:"Implement Debounce",
    answerCode:`
function debounce(fn, delay) {
    let timer = 0;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}
const debounceLog = debounce(console.log, 300);
  debounceLog("Hello")  // wait 300 ms
  debounceLog("Hi")     //reset timer
  debounceLog("Hey")    //reset timer again
    `
  },
  {
    id:"15",
    question:"Implement Throttle",
    answerCode:`
function throttle(func, delay) {
  let lastCall = 0;
  let lastResult;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      lastResult = func.apply(this, args);
      return lastResult
    }
    return lastResult
  }
  
}
const throttledFn = throttle(() => console.log('Function called!'), 1000);
throttleFn(); //Execute Immediatly
throttleFn(); //Ignored
throttleFn(); //Ignored
//... after 1000 ms
throttleFn(); //Executes
throttleFn(); //Ignored
    `
  }

]



