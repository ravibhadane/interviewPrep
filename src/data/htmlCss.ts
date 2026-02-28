import type { Question } from "../model/question";

export const htmlCssQuestions:Question[] = [

    {
        id:"1",
        question:"What is difference between Inline, Block and Inline-Block",
        answerText:`
| inline | block | inline-block |
|--------|-------|--------------|
| Does NOT start on a new line. | Starts on a new line | Does NOT start on a new line |
| Takes only required width as much as neccessary | Takes full width | Takes only required width |
| Only support left/right padding, margin | It supports all marging and padding | Respects margin & padding fully |
| Can't set Width and Height | Can set Widht and Height | Can set width and height
        `
    },
{
        id:"2",
        question:"What is difference between visibility:hidden and display:none",
        answerText:`
| Visibility: hidden | display: none |
|-------------------|--------------|
| It hides the element  | It remove the element from normal layout flow.  | 
| but still takes up space in text layout calculations and affect the layout of the document | It will not takes up the space in text layout calculation and will not affect the layout of the document |
        `
    }

]