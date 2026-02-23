import type { Question } from "../model/question";

export const ReactQuestions:Question[] = [
    {
        id:"1",
        question: "What is JSX?",
        answerText:` JSX:- JSX is a JavaScript syntax that makes creating react elements easier.
- JSX looks like HTML but it's not HTML
- JSX expression must have only one parent
- JSX takes care of Injection attack 
- JSX is not a part of React
- JSX transpiler before it reaches to JS engine => Parcel => Babel
- While using JSX, using curly braces {}, we can write JS anywhere`
    },
    {
        id:"2",
        question: "What is Babel?",
        answerText:`
- Babel is a JavaScript compiler. It takes our JSX code and converts it, which browser or React will understand. Babel is used to convert JSX to React.createElement
- JSX => Babel transpiled it to => React.createElement => JS object => HTML Element(render)`,
    },
    {
        id:"3",
        question: "What is React Component?",
        answerText:`Everything is component

        There are two types of component
        1. Class-Based Component => Old way        
        2. Functional Component => New way
- Functional Component:- These are like normal JavaScript function, Which returns some piece of JSX and react Element.`
    },
    {
        id:"4",
        question: "What is Component Composition?",
        answerText:`composing two components into one another is called component composition.`
    },
    {
        id:"5",
        question: "What is React Fragment?",
        answerText:`It is a built-in component that allows us to group multiple child elements without introducing an additional DOM element. 
        It is useful when we need to return multiple elements from a component's render method without wrapping them in a parent container.
- Short Syntax:   <> </>
- Full Synatx:  <Fragment>  </<Fragment>  OR <React.Fragment> </React.Fragment>
        `
    },
    {
        id:"6",
        question: "Difference between named export, default export, and * as export",
        answerText:`
##### Named exports:
* Named exports allow us to export multiple values or functions from a module by explicitly specifying their names.
* In the exporting module, we use the export keyword before each declaration we want to export.
* In the importing module, we can selectively import the exported values by specifying their names inside curly braces {} 
#### Default exports:
* Default exports allow us to export a single value or function as the default export from a module.
* In the exporting module, we use the export default syntax followed by the value or function we want to export as the default.
* In the importing module, we can choose any name for the imported value and import it without curly braces.
#### * as export:
* The * as syntax allows us to import all exported values from a module and bundle them into a single object.
* In the importing module, we use the * as syntax followed by a name to import all exports from the module into an object with that name.       `
    },
    {
        id:"7",
        question: "What is React Hooks?",
        answerText:`React hook is a normal javascript function that is given to us by React or we can say react hooks are functions that allows us to use state and other react feature in functional components. 
        There are many react hooks like useState, useEffect, useContext, useMemo, useRef, etc.`
    },
    {
        id:"8",
        question: "What is useState?",
        answerText:`useState gives us a superpowerful variable in React. This hook allows us to add a state to our functional components. 
        It returns a pair of values: the current state and a function to update that state.
 Whenever a state variable updates/changes, react will re-render the component.
`,
answerCode:`import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);//0- Initial value
// count - Current Value, setCount- function to update it
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}

export default Counter;`
    },
    {
        id:"9",
        question: "What is reconciliation in React?",
        answerText:`
* React uses the Reconciliation algorithm and which is also known as "React Fiber". 
* In React 16, A new algorithm to update the DOM, and came out that algorithm known as Reconciliation In simple words, We can say whenever something changes on UI it is called Reconciliation. 
* After React 16, This algorithm is known as "React Fiber".
###### Key Features of React Fiber
* Incremental Rendering: The ability to split rendering work into chunks and spread it out over multiple frames.
* The ability to pause, abort, or reuse work as new updates come in
* The ability to assign priority to different types of updates
* The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures.
`
    },
    {
        id:"10",
        question: "Advantage & Disadvantage of code splitting?",
        answerText:`
###### Advantage of code splitting:-
1. Improved Initial Load Time
2. Faster Time to Interactive
3. Better Performance on Low-End Devices
4. Optimized Bandwidth Usage
5. Efficient Use of Browser Cache
6. Enhanced User Experience
###### Disadvantage of code splitting:-
1. Complexity
2. Increased Requests
3. Webpack and Tooling Overhead
4. Harder Debugging
5. Initial Load Time of Small Chunks
6. SEO Challenges
`
    },
    {
        id:"11",
        question:"What is lazy()?",
        answerText:`
* lazy() function is used for code splitting, which is a technique that allows us to load parts of our application only when they are actually needed, rather than loading all of the code upfront. 
        This can help improve the initial load time of our application and optimize performance by reducing the amount of JavaScript that needs to be downloaded and executed.
* The primary use case for lazy() is when we have large components or modules that are not immediately required when your application starts. Here's when and why we might use lazy()`
    },
    {
        id:"12",
        question:"What is Suspense()?",
        answerText:`Suspense is a component in React that allows us to handle asynchronous operations, such as code-splitting with lazy() and data fetching, in a more declarative and user-friendly manner. It was introduced to simplify handling loading states and fallbacks when components or data are not immediately available.
`
    }
]