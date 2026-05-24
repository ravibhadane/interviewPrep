import type { Question } from "../model/question";

export const commonQuestions:Question[] = [
    {
        id:"1",
        question: "How Browser works internally when you entered the url in address bar?",
        answerText:`
* When user entered a URL
* The browser resolves the domain via DNS to get an IP address  
* Establishes a TCP connection and TLS handshake for HTTPS and send http request
* The server respond with HTML and assets
* The broswer parses HTML into DOM and CSS into CSSOM , combine them into a render tree
* Calculate layout , Paint pixels and composites layer using GPU
* Javascript is executed by the JS engine and can modify the page dynamically
* While broswer optimizes the performance and enforces the security through caching , sandboxing and same-origin policy.

**When redirect to country specific domain**

Get an IP address which may be region specific if Geo-DNS is used send http request
The server can detect the user location using IP geolocation Accept-Language headers or cookies and may
be respond with redirect to country specific domain or path (like .in for india)
Once the request reches the final location
        `
    },
{
    id:"2",
    question: "What is Webpack?",
    answerText:`Webpack is javascript module bundler. It takes the multiple modules (javascript, css, images etc) build 
    dependency graph and bundles them into optimized assets that the browser can understand

**How Webpack works internally**
* Initialization - webpack read webpack.config.js, initialise compiler
* Entry & Dependency Graph - parse file into AST, Find import/require, build dependeny graph
* Loader Execution - Files processed using loader, loader transformed code (Babel, css loader)
* Chunks creation and optimization - Support code splitting
* Bundle Generation - webpack createa runtime, write bundle into output directory
    `
},
{
    id:"3",
    question:"What is your release process?",
    answerText:`
**Test (Develop)**
* Developer create feature branch / bugfix branch from develop branch
* Code pushed to bitbucket
* Pull request raised to develop
* Code reviews + approval happens in bitbucket
* PR is merged into develop

**Jenkins dev pipeline triggered**
* Checkout code from bitbucket
* Install dependencies using npm
* Linting and unit tests
* Build frontend
* Deploy to dev environment
* Developer an tester verifies 

**R-Test (Regression testing)**
* After test sign-off develop is merged into release branch

**Jenkins R-test pipeline**
- fresh build with R-test config
- Deploy to R-Test
- QA perform regression testing and integration testing

**Pre-prod (Production like validation)**
- Validate infra parity
- Final business validation
- Performance & sanity checks

**Pilot Release (Controlled Rollout)**
- Same artifact promoted (no )
- Jenkins - Deploy to pilot environment , enable limited user | regions | internal teams
- Monitor error, performance, user feedback

**Production Release**
- After pilot success
- Release branch merge into main / master
- Jenkins version tagging, manual approval step, deploy to production
- full user rollout
`
},
{
    id:"4",
    question:"What is CORS error , Why does it arise and how do you fix it?",
    answerText:`
 CORS - stands for Cross-Origin Resource Sharing - A security feature built in browser.
 It blocks request made from one origin (domain, protocol or port) to another origin unless explicitly allowed by the server.

 Example:- frontend is hosted at 'frontend.com' and backend is hosted on 'backend.com'
 - The browser treat these are different origin and block the request unless its explicitly allowed.
 - In short, browser isn't blocking the request It's blocking the response fro security reasons.
 
 It's server side configuration isssue

**Solution 1**
- Update the backend - Server must send the right headers **Access-Control-Allow-Origin:***(allow all origins) 
- Handle preflight request (Options)
- Browser send preflight request before the actual call
- The server must respond to this with
- **Access-Control-Allow-Methods:GET,POST,OPTIONS**
- **Access-Control-Allow-Headers:Content-Type, Authorization.
    `
}
]