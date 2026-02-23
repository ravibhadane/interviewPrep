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
  }
];

