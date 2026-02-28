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
 },

 {
    id:"2",
    question:"How to handle security in angular application?",
    answerText:`
Angular built in protection like
- DOM sanitization to prevent XSS attack
\`\`\`
sanitizer = inject(DomSanitizer);
this.sanitizer.bypassSecurityTrustHtml(html);
\`\`\`
- Prevent CSRF (Cross-Site Request Forgery)
  1. Use CSRF tokens ( handled by backend)
  2. Angular automatically send XSRF- token
\`\`\`
HttpClientXsrfModule.withOptions({
cookieName: 'XSRF-TOKEN
headerName: 'X-XSRF-TOKEN'
})
\`\`\`
- HTTPInterceptor for attaching auth tokens
- protect sensitive data
    1. avoid localstorage for token
    2. prefer HttpOnly cookies
- Route guard for authorization
- Avoid innerHTML
- sensitive logic should always stay on the backend , not in angular
    `
 },
 {
    id:"3",
    question:"How do you test http service in Angular",
    answerText:`
* Use HttpClientTestingModule
* Make request with HttpTestingController
* Validate request method, headers and reponses
* Avoid real backend calls    
    `
 },{
    id:"4",
    question:"How do you handle Large rendering List?",
    answerText:`
* Use @for loop with track (*ngFor with trackBy)
* Use signal for state
* Use OnPush everywhere
* CDK Virtual Scroll
\`\`\`
<cdk-virtual-scroll-viewport itemSize="48">
    <div *cdkVirtualFor="let item of items(); trackBy: trackById">
    </div>
</cdk-virtual-scroll-viewport>
items = signal<Item[]>([]);
\`\`\`
    `
 }
]