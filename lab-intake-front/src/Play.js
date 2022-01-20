import React, { useState } from 'react'
import Shortanswer from './ShortAnswer'
export default function Play(props) {
    
    const entrySize = 2
    const [entries, setEntries] = useState(Array(entrySize))

    return (
        <>
            <div className="play-container">
                <Shortanswer question = {"What's your favorite NFL team?"}/>
                <button className="send-btn" onClick={(e)=>{setEntries(e.target.value)}}></button>
            </div> 
        </>
    )
}
