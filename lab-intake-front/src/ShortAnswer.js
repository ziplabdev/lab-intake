import React, { useEffect, useState } from 'react'
import './ShortAnswer.css'
export default function Shortanswer(props) {
    

    const [answer, setAnswer] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submitted')
        console.log(props.questions)
        // updateObject()        
    }
    const updateObject = (e) => {
        setAnswer(e)
        props.questions[props.index].answer = answer
        console.log('saved response!')
    }

    return (
        <div className="short-answer-container">
        <form onSubmit={handleSubmit}>
            <label>
                <div className="question">
                    {props.questions[props.index].question}
                </div>
                
                <input 
                    type="text" 
                    value={answer}
                    onChange={e=>updateObject(e.target.value)}
                    // onChange={e=>setAnswer(e.target.value)} 
                />
            </label>
            {/* <br/> */}
            <button type="submit" className="save-btn">save</button>
        </form>
        </div>            
    )
}
