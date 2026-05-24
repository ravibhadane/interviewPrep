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
 },
 {
    id:"5",
    question:"What is Hydration in Angular?",
    answerText:`
Hydration enables angular to reuse server rendered HTML instead of re-rendering it on the client
- Faster time to interactive
- Better core web vitals
- Essential for SSR apps
\`\`\`
providers:[
    provideClientHydration()
]
\`\`\`

**How SSR different from CSR in angular**
- CSR: Render in browser - Slower initial load
- SSR: Render on server - Faster first paint and SEO
- SSG: Render at build time. not runtime.

**SSR flows - Server Side Rendering**
- Browser request page
- Angular runs on server
- Server sends fully rendered HTML
- Browser display content instantly
- Angular hydrates and takes over
- **Syntax: ng add @angular/ssr**
\`\`\`
providers:[
    provideServerRendering()
]
\`\`\`

**CSR flows - Client Side Rendering**
- Broswer request page
- Server sends empty HTML and JS bundle
- Angular runs in browser
- Data os fetched
- HTML is rendered

**SSG flows - Static Site generation(PreRendering)**
- ng build  OR ng build --prerender OR ng run my-app:prerender
- Angular pre-render pages
- HTML files are generated (static)  // in dist/my-app/browser folder
- Deployed as static files
- Syntax: ng add @angular/ssr - This also includes SSG 
`
 },
 {
    id:"6",
    question:"What is Standalone Component?",
    answerText:`
Standalone component remove the need for NgModules and make Angular simpler and more tree-shakable.
\`\`\`
@Component({
    standalone:true, // no need in angular angular 17+
    imports: [CommonModule]
})
export class DashboardComponent { }
\`\`\`
- faster bootstrapping
- cleaner architecture
    `
 },
 {
    id:"7",
    question: "What are the signals?",
    answerText: `
Signals are new reactivity model introduced in angular 16 that allow fine grained change detection without zone.js.

They provide predictable state updates and better performance
\`\`\`
const count = signal(0);
 count.set(count() + 1);
 count.update((value)=> value + 1);
\`\`\`
    `
 },
 {
    id:"8",
    question: "What is difference between Signals and Observables?",
    answerText: `
| Signals | Observables | 
|---------|-------------|
| Synchronous | Asynchronous | 
| Built-in angular reactivity | External Library (RxJS) |
| Ideal for UI and Component State | Ideal for Stream and Async data |
| pull-based value is read when accessed angular track dependecies automatically | push-based values are pushed to subscribers over time. |
| No subscription, unsubscribe, no memory leak risk | Require explicit subscription handling |
| Tighlty coupled with angular change detection | Work with angular but are framework agnostic |
| signal, computed, effect | map, switchmap, mergemap |
| always have current value | may or may not be emit immediately |

    `
 }
]