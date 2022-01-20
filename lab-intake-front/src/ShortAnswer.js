import React, { useEffect, useState } from 'react'
import './ShortAnswer.css'
export default function Shortanswer(props) {
    
    const [answer, setAnswer] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(props.answer)
        props.answerr = answer
      }
    useEffect(()=>{

    },)

    return (
        <div className="short-answer-container">
            {/* <div className="question">{props.question}</div>
            <input type="text" className="answer" value={(e) => e.target.value}/>
            <button className="save-btn" onClick={props.answer=}>save</button> */}

        <form onSubmit={handleSubmit}>
            <label>
                <div className="question">
                    {props.question}
                </div>
                
                <input type="text" value={props.answer} onChange={(e) => setAnswer(e.target.value)} />
            </label>
            <button type="submit">save</button>
        </form>
        </div>            
    )
}
