//@ts-nocheck
import { useState } from "react";
import './Accordion.scss';

const Accordion = ({question, answer}) =>{
    const [open, setOpen] = useState(false);

    return (
        <div className="accordion">
            <div className="question" onClick={()=>setOpen(!open)}>
                {question}
            </div>
            {open && (
                <div className="answer">
                    {answer}
                </div>
            )}
        </div>
    );

};

export default Accordion;