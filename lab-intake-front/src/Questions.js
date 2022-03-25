import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Questions.css'
import Shortanswer from './ShortAnswer'
import ZipLogo from './res/logo.svg'
import Stars from './res/stars.svg'

export default function Questions(props) {

    const [questions, setQuestions] = useState([])
    const [submitted, setSubmitted] = useState(false)

    const submitEntry = async () => {
        try {
            console.log('submission pressed')
            const submission = questions
            console.log(questions)
            // axios.post('https://zip-lab-intake-api.netlify.app/.netlify/functions/index/submitform', submission)
            axios.post('http://localhost:9000/.netlify/functions/index/submitform', submission)
            .then(res => {
                console.log(res)
                setSubmitted(true)
            })
        }catch {
            console.log('error')
        }
    }
    
    useEffect(() => {
        const fetchData = async () =>{
            // setLoading(true);
            try {
            //   axios.get('https://zip-lab-intake-api.netlify.app/.netlify/functions/index/formdata')
            axios.get('http://localhost:9000/.netlify/functions/index/formdata')
              .then(response => {
                setQuestions(response.data)
            })
              
            } catch (error) {
              console.error(error.message)
            }
          }
      
          fetchData();
    },[])
    
        

    return (
    <>
        <div className="question-component">
            <img className="stars" src={Stars} alt="" />
            <div className="questions-header">
                <img src={ZipLogo} alt="" className="zip-logo" />
                <div className="welcome-title">Welcome to the Lab!</div>
            </div>
            <div className="questions-container">
                
            { 
            questions.map((question, index) => {
                // if(index == 0){
                    return (
                        // <Slide index = {index}>
                            <div className = "question-input">
                                {
                                    question['questiontype']==='short-answer' ? 
                                    <Shortanswer 
                                        questions = {questions}
                                        index = {parseInt(index)}
                                        updateAnswer = {setQuestions}
                                    /> : 
                                    <Shortanswer/>
                                }
                            </div>
                        // </Slide>
                        )
                // }
                
            })}
            
            {/* <div className="question-input">
                <Shortanswer 
                        questions = {questions}
                        index = {0}
                        updateAnswer = {setQuestions}
                />
            </div>
                 */}
                                

            
            </div>
            
            <button className="submit-button" onClick={submitEntry}>{submitted ? 'Submitted!' : 'Submit'}</button>
            </div>
            
        </>
        
    )
}
