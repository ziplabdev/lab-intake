import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Questions.css'
import Shortanswer from './ShortAnswer'
import ZipLogo from './res/logo.svg'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Questions(props) {

    const [questions, setQuestions] = useState([])
    const [submitted, setSubmitted] = useState(false)

    const submitEntry = async () => {
        try {
            const submission = questions
            axios.post('https://zip-lab-intake-api.netlify.app/.netlify/functions/index/submitform', submission)
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
              axios.get('https://zip-lab-intake-api.netlify.app/.netlify/functions/index/formdata')
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
            <div className="questions-header">
                <img src={ZipLogo} alt="" className="zip-logo" />
                <div className="welcome-title">Please complete the following questions to book time in the lab!</div>
            </div>
            <div className="questions-container">
            {/* <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={100}
                    totalSlides={11}
                >
                    <Slider> */}
                    {/* <Slide index={0}><Delete/></Slide>
                    <Slide index={1}>I am the second Slide.</Slide>
                    <Slide index={2}>I am the third Slide.</Slide> */}
                    
            { 
            questions.map((question, index) => {
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
            })}

            {/* </Slider>
                    <ButtonBack>Back</ButtonBack>
                    <ButtonNext>Next</ButtonNext>
                </CarouselProvider> */}
            {/* <button className="send-btn" onClick={(e)=>{console.log(e.target.value)}}></button> */}
            
            </div>
            <button className="submit-button" onClick={submitEntry}>{submitted ? 'Submitted!' : 'Submit'}</button>
            </div>
        </>
    )
}
