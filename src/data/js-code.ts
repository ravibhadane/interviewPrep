import type { Question } from "../model/question";

export const jsProblems:Question[] = [
    {
        id:"1",
        question: "Fibonacci series (iterative and recursive)",
        answerText:`
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

console.log(fibbo(6)); `
    }
]