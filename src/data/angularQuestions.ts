import type { Question } from "../model/question";

export const angularQuestions:Question[] = [
    {
        id:"1",
        question:"What is angular directives?",
        answerText:`
        Directive is used to add behaviour to an existing DOM element or change the style of DOM elements
##### There are three kind of directive

##### Component Directive
Components are special directive in angular. There are directive with template
##### Structural Directive
Structural directives can change the DOM layout by adding and removing DOM element. All structural directive are preceded with * symbol
1. *ngFor - <tr *ngFor ="let item of customer">
2. *ngSwitch 
3. *ngIf - <div *ngIf="condition">
`
 }
]