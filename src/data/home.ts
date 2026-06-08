import type { Question } from "../model/question";

export const hmQuestions:Question[] = [
     {
    id: "1",
    question: "Tell me about yourself?",
    answerText: `I am Ravindra,  I have 10 years of relevant experienece into frontend development
    Cureently I am working on the Nordea bank saving & Investment Project for LTIMindtree as a Senior React Developer
  * This application allows customer to manage their savings, accounts, transaction, buy/sell order and investments
  * This application built using React, Typescript, ES6 and Redux.
  * My Responsibilties include Developing new feature, Integrating APIs, Creating reusable component,
    Writing Unit test cases, fixing the bug, Conducting Code Reviews, Mentoring Juniors and 
    Collaborating closely with cross-functional teams to deliver high-quality solutions.
    `, 
  },
   {
    id: "2",
    question: "Explain your Project Architecture?",
    answerText: `
  * From an architecture perspective, we follow a domain-driven modular structure. Each domain(account, transaction, order)
     owns its components, hooks, services, and tests, ensuring clear separation of concerns. 
   This enhances scalability and allows multiple teams to work independently without impacting other domains.
  * For state management, We use React Query for Server API data and Redux for global application state.
    APIs are accessed through Centralzed Typescript service client.
  * For Performance we use Ag-grid with virtualization, server-side pagination, and lazy loading.
  * For UI consistency, We have have shared component library and storybook based design system that is reused across module.
  * From Quality perspective, all code goes through code reviews, linting, automated testing, type checking & CI/CD qulaity gates
    Overall architecture is designed to be scalable, maintainable an performant. while supporting multiple teams working on platform
    simltenously.
    `, 
  },
  {
    id:"3",
    question:"How would you improve React aplication used by 1 million users / Performance Optimization",
    answerText:`
  * Core Web Vitals : ****Light Contentfull Paint - improve through better caching, CDN usage and optimize Image
    ****Cumulative Layout Shift - Reduced by reserving layout for dynamic content
    ****Interaction to next paint - Improved by reducing main thread work and optimized event handlers.
  * Bundle Size Analysis
  * API Latency - Identify slow endpoint
  * Rendering performance - profile component using React Devtool profiler
  * Reliability & Error States - add Error Boundary
  * Accessibility - W-CAG guidelines follows, handle proper navigation , focus management , screen reader support (NVDA)
  * Code Splitting , Lazy Loading, React.Memo, useMemo, useCallback, Virtualization, Caching, Pagination
    
    `,
  },
  {
    id:"4",
    question:"How do you Mentor the Junior Developer?",
    answerText:`I focus on coaching rather than giving direct solutions. 
* For example, a junior developer once submitted a very large PR with duplicated logic and limited test coverage. Instead of rejecting it, I scheduled a walkthrough session and showed them how to identify reusable patterns and separate business logic from UI components.
     We refactored part of the code together and discussed testing strategies. 
* Over the following sprints, 
I noticed significant improvements in their code quality, PR size, and their confidence during design discussions. 
* that experience enforced my belief that mentoring is most effective
when it combined technical guidance with continues feedback and support
`,
  },
  {
    id:"5",
    question:"How do we Review the Code ?",
    answerText:`During the code review I focus on first Correctness, Maintainability, Scalability
* Correctness - I ensure the implementation solves business requirement and edge cases handled
* Maintainability - I assess whether code easy to understand and modify, Look for clear separation of concerns.
* Scalability- I evaluate whether the solution continue to work as data or feature grows
* Then I evaluate performance , testing, security and adherence to coding standards
I provide a feedback with clear explanation, prioritize high impact issues and use reviews as a opportunity for knowledge sharing and mentoring
`,
  },{
    id:"6",
    question:"Tell me about a Feature you are most proud of? / Challenging Feature you built / Project you worked on recently",
    answerText:`One of the key feature, I worked on Transaction and order management screen for Nordea bank saving & investment platform using React, Typescript, React Query and Ag-Grid.
The feature allowed customers to view, search, filter, sort and manage large volume of transaction and order data. It included capabilities such as transaction type filtering,
time-period, filtering, custom date formatting, custom frequency formatting and advanced grid interactions.

****Problem / Challenge / Whhat problem you solved?****
The main challenge/problem was helping user to work efficiently with large transactions datasets while keeping 
application keepiing fast and scalable.

****Your Approach / Design / How you designed?****
I designed the solution using server-side pagnation, filtering sorting along wiht Ag-Grid virtualization. so only visible rows were displayed
I also created reusable grid configurations and centralized formatting for dates and curriencies.

****Trade-off / What Alternative did you consider & why didn't you choose them?****
I consider client side processing and custom table implementation  but Chose Ag-grid with server-side processing because it scales
much better for large datasets.
The Trade-off was increased backend dependency and implementation complexity, but I accepted that because it perform muc better with 
large data.

****Impact / Outcome / What was the result?****
The result was improved performance , faster search and filtering, reduce code duplication and reusable pattern that could be used
across future reporting screen. (Better Scalability)

****Reflection / what did you learn / What would you do differently?****
The biggest I learned was the importance of thinking about scalability early. if I were to build it again
I would involve backend engineers earlier in the API design process and agree on performance goal upfront.
This would help reduce implentation complexity and make optimization decisions easier as the application grows.

****Why Choose Server-Side Filtering, Sorting and Pagination?****
* Loading all the data into the browser would increases memory consumption, network transfer size and rendering cost
* Filtering , Sorting and Pagination were executed on the server while the frontend requested only the data required for the current view


`,
  },
  {
    id:"7",
    question:"Why Sonicwall?",
    answerText:`
* I want to join Sonicwall because it is product based cyber security company working on real world security and large scale system
* I am looking for role where I can work on challenging engineering problems improve my skills and contribute to impactful product
used globally and sonicwall is well align with that direction.
* Recently sonicwall has expanded its Gen 8 security platform with new products NSv XS virtual firewall which extend firwall
protection to cloud & Virtual environment.
* Overall I see a strong opportunity at sonicwall to build scalable products work on engineering problems and grow in a product
-focused environement.
    `,
  },
  {
    id:"8",
    question:"Why React /  Why Ag-Grid  /  Why TypeScript  /  Why Redux",
    answerText:`
  ****Why React**** 
  Component Based Architecture , Virtual Dom ,  Declarative UI (how it should look like) , Ecosystem and Tools, Strong Community support
 
  ****Why Ag-Grid**** 
Because It provides enterprize grade capabilities - Virtualization , Server side Data Row model , Advanced Filtering , Sorting ,
Column customization , export functionality.

****Why Typescript****
Typescript is superset of javascript that offer several features
* Static Typing - typescript allow devloper to define types for variable and function.
* Enhanced Tooling - IDE can provide better autocompletion
* Compile Time safety
* Special Types - any , unknown, void
* Interface & Type Aliases
* Community & Libraries - popular many libraries and framework
  `,
  },
  {
    id:"9",
    question:"How to handle production issue? / Critical bug occur in production what do you do?",
    answerText:`
  * First I will understand the issue and impact with the help of JIRA (attached evidence)
  * Check logs , error message using console to gather information
  * Try to Re-produced issue in development or staging environment
  * Find the root cause of problem
  * Fix the issue in lower environment & test thoroughly
  * Get the fix reviewed by another developer (peer review) and QA team
  * I will cut the hotfix branch from prod envrionement and commit , push the changes and send it for Review, Once it Merged
  will deployed to prod environement and monitor the application.
  * Finally I document the root cause in RCA document and add preventive mesaure to avoid the same issue in the future    
    
  ****Production issue I faced****
  * I have faced multiple production issue 
  * One production issue I faced recently , In one of our production release , the issue where images were displayed correctly 
  in local and staging environment but in production only the fallback icon appeared. 
  * Initially I investigated caching ,
  CDN issues, but After a deeper analysis, I found that the backend API response structure had been changed without prior communication to the frontend team. As a result, 
  the frontend was trying to access an image field that no longer existed in the production payload.
  * Once the root cause was identified, I coordinated with the backend team, updated the frontend code to handle the new response format, and verified the fix in production.
  * What I learned from this experrience is the importance of clear API contract and communication between teams.
  * After resolving issue , we introduced a process where any backend changes done in prod environment must be documented and
  shared before deployment
  `,
  },
  {
    id:"10",
    question:"What team would says about you?",
    answerText:`
  * I think my teammates would describe me as reliable, collaborative and approachable. 
  * I take ownership of my work, work closely with cross functional team to solve problem and enjoy helping others through code reviews , knowledge sharing and mentoring 
  * I also try to bring a calm , solution oriented approach to challenges.  

    `,
  },
  {
    id:"11",
    question:"What are you looking in your next role?",
    answerText:`
  * In my next role I am looking for Ownership, Technical Growth and Meaningfull impact
  * I enjoy owning feature end-to-end from design discussion to implementation and production support
  * I want to continue growing my expertise in frontend architecture , performance and saclabilty by working on large scale applications
  * I also enjoy mentoring and supporting junior engineers through code reviews and knowledge sharing
  * Most importantly I want to work on product that solve real customer problm where engineering decision have a visible impact
  * And this role offer strong combination of all these things.
    `,
  },

  {
    id:"12",
    question:"Disagreement with other developer /  Conflict with teammates ",
    answerText:`
  ****Disagreement****
    I focus on facts, trade-off , scalability , maintainability and team goal rather than personal openion.  
    First Try to understand the goal we are trying to achieve.

  ****Conflict****
  In my previous project , I disagree with teammate about approach fast delibery vs better maintainability.
  I focus on team goal and discussed the trade-off. 
  We reviwed requirement and agreed on balanced solution that met the deadline.
    `,
  },
  {
    id:"13",
    question:"How do you Estimate work? / How do you handle Tight Deadline?",
    answerText:`
  ****Tight DeadLine****
  I prioritize critical work, break task into smaller milestones, communicate risk early and focus delivering the highest 
  business value first
  
  ****Estimation****
  I estimate work by first understanding the requirement clearly & identifying both functional and technical complexity
  * Requirement Analysis - Requirement, UX design, API dependencies
  * Break into small task - UI implementation, API integration, Unit testing, code reviews fixes
  * Identify Risk - Backend dependencies, new technology involved
  * Provide estimate  - Collborative estimate is more accuracy
    `,
  },
  {
    id:"14",
    question:"Strength and Weekness",
    answerText:`
  ****Strength****
  My Strength are frontend architecture , React and typescript expertise , performance optimization and collaborating effectively
  across teams

  ****Weekness****
  Earlier in my career used to spend to much time perfecting the solution. Over time I learned to balance engineering 
  quality with delivery timelines and business priorities.
    `,
  },
  
  {
    id:"15",
    question:"",
    answerText:``,
  },
  {
    id:"16",
    question:"",
    answerText:``,
  },
  {
    id:"17",
    question:"",
    answerText:``,
  },
  {
    id:"18",
    question:"",
    answerText:``,
  }
];