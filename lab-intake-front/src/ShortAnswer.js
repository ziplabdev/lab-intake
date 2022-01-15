import React from 'react'
import './ShortAnswer.css'
export default function Shortanswer(props) {
    

    return (
        <div className="short-answer-container">
            <div className="question">{props.question}</div>
            <input type="text" className="answer" />
        </div>            
    )
}
