
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";

import { lazy, Suspense, useState } from "react";
import './qn.scss'
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

import MarkdownRenderer from "./MarkdownRendrer";
import { angularQuestions } from "../data/angularQuestions";

const SyntaxHighlighter = lazy(() =>
  import("react-syntax-highlighter").then((module) => ({
    default: module.Prism,
  })),
);


const Angular = ()=>{
    const [open, setOpen] = useState('');
    const toggle = (id: string) => {
    if (open === id) {
      setOpen('');
    } else {
      setOpen(id);
    }
  };

    return (
        <div className="container mt-4">
      <h2>JavaScript Q&A</h2>
      <Accordion open={open} toggle={toggle}>
        {angularQuestions.map((item) => (
          <AccordionItem key={item.id}>
            <AccordionHeader targetId={item.id}>{item.question}</AccordionHeader>
            <AccordionBody accordionId={item.id}>
              <div className="answer-text">
            
             <MarkdownRenderer text={item.answerText}></MarkdownRenderer>
             </div>         
              {open === item.id && item.answerCode && (
                <Suspense fallback={<div>Loading code...</div>}>
                 <SyntaxHighlighter language="javascript" style={okaidia} showLineNumbers>
                  {item.answerCode}
                </SyntaxHighlighter>
                </Suspense>
              )}
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
    )
}

export default Angular;