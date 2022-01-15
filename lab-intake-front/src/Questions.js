import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Questions.css'
import Shortanswer from './ShortAnswer'
import ZipLogo from './res/logo.svg'
export default function Questions(props) {
    const [questions, setQuestions] = useState([
        'Name',
        'Email',
        'Phone Number',
        'Team Name',
        'Stage',
        'Project Name/Title',
        'Brief description of what you want from the lab',
        'What are the deliverables (Type of file/format)',
        'What "personality" do you want your graphic to have (clean, fun, bright, sophisticated, professional)',
        'When do you need the deliverables by',
        'Provide any supporting materials (Websites, Documents, Drawings, Etc.)'
      ])

    useEffect(() => {
        const fetchData = async () =>{
            // setLoading(true);
            try {
              axios.get('http://localhost:5001/')
              .then(response => {
                setQuestions(response.data)
            })
              
            } catch (error) {
              console.error(error.message)
            }
          }
      
          fetchData();
    }, [])
    
        

    return (
        <div className="question-component">
            <div className="questions-header">
                <img src={ZipLogo} alt="" className="zip-logo" />
                <div className="welcome-title">Please complete the following questions to book time in the lab!</div>
            </div>
            <div className="questions-container">
                { 
                    questions.map((question, index) => 
                    {
                        return (
                            <div className="question-component">
                                <Shortanswer question = {question + '?'}/>
                            </div>
                            
                        )
                    }) 
                } 
            
            </div>
        </div>
    )
}
