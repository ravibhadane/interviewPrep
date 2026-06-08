import type { Question } from "../model/question";

export const hmQuestions:Question[] = [
     {
    id: "1",
    question: "Tell me about yourself?",
    answerText: `I am Ravindra I have 10 years of relevant experienece into frontend development
    Cureently I am working in Nordea bank saving & Investment Project as a Senior React Developer
    This application allows customer to manage their savings, accounts, transaction, buy/sell order and investments
    This application built using React, Typescript, ES6 and Redux.
    My Responsibilties include Developing new feature, Integrating APIs, Creating reusable component, integrating APIs,
    Writing Unit test cases, fixing the bug, Conducting Code Reviews, Mentoring Juniors and 
    Collaborating closely with cross-functional teams to deliver high-quality solutions.
    `, 
  },
   {
    id: "2",
    question: "Explain your Project Architecture?",
    answerText: `From an architecture perspective, we follow a domain-driven modular structure. Each domain(account, transaction, order)
     owns its components, hooks, services, and tests, ensuring clear separation of concerns. 
    This enhances scalability and allows multiple teams to work independently without impacting other domains.
    For state management, We use React Query for Server API data and Redux for global application state.
    APIs are accessed through Centralzed Typescript service client.
    For Performance we use Ag-grid with virtualization, server-side pagination, and lazy loading.
    For UI consistency, We have have shared component library and storybook based design system that is reused across module.
    From Quality perspective, all code goes through code reviews, linting, automated testing, type checking & CI/CD qulaity gates
    Overall architecture is designed to be scalable, maintainable an performant. while supporting multiple teams working on platform
    simltenously.
    `, 
  },
  {
    id:"3",
    question:"For 50, 000 records what specific architecture or technical descision woul you take to improve performanance?",
    answerText:``,
  },
  {
    id:"4",
    question:"How do you Mentor the Junior Developer?",
    answerText:`I focus on coaching rather than giving direct solutions. For example, a junior developer once submitted a very large PR with duplicated logic and limited test coverage. Instead of rejecting it, I scheduled a walkthrough session and showed them how to identify reusable patterns and separate business logic from UI components. We refactored part of the code together and discussed testing strategies. Over the following sprints, 
I noticed significant improvements in their code quality, PR size, and their confidence during design discussions. that experience enforced my belief that mentoring is most effective
when it combined technical guidance with continues feedback and support
`,
  },
  {
    id:"5",
    question:"How do we Review the Code ?",
    answerText:`During the code review I focus on first Correctness, Maintainability, Scalability
Correctness - I ensure the implementation solves business requirement and edge cases handled
Maintainability - I assess whether code easy to understand and modify, Look for clear separation of 
Scalability- I evaluate whether the solution continue to work as data or feature grows
Then I evaluate performance , testing, security and adherence to coding standards
I provide a feedback with clear explanation, prioritize high impact issues and use reviews as a opportunity for knowledge sharing and mentoring
`,
  },{
    id:"6",
    question:"Tell me about a Feature you are most proud of? / Challenging Feature you built / Projecct you worked on recently",
    answerText:`One of the key feature, I worked on Transaction and order management screen for Nordea bank saving & investment platform using React, Typescript, React Query and Ag-Grid.
The feature allowed customers to view, search, filter, sort and manage large volume of transaction and order data. It included capabilities such as transaction type filtering,
time-period, filtering, custom date formatting, custom frequency formatting and advanced grid interactions.

****Problem / Challenge / Whhat problem you solved?****
The main challenge/problem was helping user to work efficiently with large transactions datasets while keeping 
application keepiing fast and scalable.

****Your Approach / Design / How you designed?****
I designed the solution using server-side pagnation, filtering sorting along wiht Ag-Grid virtualization. so only visible rows were displayed
I also created reusable grid configurations and centralized formatting for dates and curriencies.
`,
  },
  {
    id:"7",
    question:"For 50, 000 records what specific architecture or technical descision woul you take to improve performanance?",
    answerText:``,
  },
  {
    id:"8",
    question:"For 50, 000 records what specific architecture or technical descision woul you take to improve performanance?",
    answerText:``,
  },
  {
    id:"9",
    question:"For 50, 000 records what specific architecture or technical descision woul you take to improve performanance?",
    answerText:``,
  },
  {
    id:"10",
    question:"For 50, 000 records what specific architecture or technical descision woul you take to improve performanance?",
    answerText:``,
  },
  {
    id:"11",
    question:"For 50, 000 records what specific architecture or technical descision woul you take to improve performanance?",
    answerText:``,
  }
];