
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import { hmQuestions } from "../data/home";
import { lazy, Suspense, useState } from "react";
import './qn.scss'
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import './Home.css';

import MarkdownRenderer from "./MarkdownRendrer";

const SyntaxHighlighter = lazy(() =>
  import("react-syntax-highlighter").then((module) => ({
    default: module.Prism,
  })),
);


const Home = ()=>{
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
      <Accordion open={open} toggle={toggle}>
        {hmQuestions.map((item) => (
          <AccordionItem key={item.id}>
            <AccordionHeader targetId={item.id}>
            <HighlightText
              text={item.question}
              highlights={["Review", "Code", "Mentor", "Junior", "Project", "Architecture",
                "Challenging", "Feature", "Sonicwall" , "Performance", "Optimization" ,
                "Production", "issue"
              ]}
            />
            </AccordionHeader>
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

interface HighlightTextProps {
  text: string;
  highlights: string[];
}

const HighlightText = ({ text, highlights }: HighlightTextProps) => {
  const regex = new RegExp(`(${highlights.join("|")})`, "gi");

  const parts = text.match(regex) 
    ? text.split(regex)
    : [text];

  return (
    <>
      {parts.map((part: string, index: number) => {
        const isHighlight = highlights.some(
          (h: string) => h.toLowerCase() === part.toLowerCase()
        );

        return isHighlight ? (
          <span key={index} className="highlight">
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        );
      })}
    </>
  );
};

export default Home;