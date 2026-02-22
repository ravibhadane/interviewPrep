import type { Question } from "../model/question";

export const javascriptQuestions:Question[] = [
  {
    id: "1",
    question: "What is closure in JavaScript?",
    answerText: "A closure is a function that remembers its outer variables.",
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

| var | let |
|-----|-----|
| Function scoped | Block scoped |
`
  }
];

