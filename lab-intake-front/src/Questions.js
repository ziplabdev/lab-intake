import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Questions.css'
import Shortanswer from './ShortAnswer'
import ZipLogo from './res/logo.svg'
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation"

// // import Swiper core and required modules
// import SwiperCore, {
//     Navigation
//   } from 'swiper';
  
//   // install Swiper modules
//   SwiperCore.use([Navigation]);
export default function Questions(props) {
    const [questions, setQuestions] = useState([{"question" : "", "question-type" : "", "answer" : ""}])

    const submitEntry = async () => {
        try {
            const submission = questions
            axios.post('http://localhost:5001/submit', submission)
            .then(res => console.log(res))
        }catch {
            console.log('error')
        }
    }

    
    useEffect(() => {

        setQuestions(
            [
                { "question" : "Phone Number?", "question-type" : "short-answer", "answer" : "a" },
                { "question" : "Email?", "question-type" : "short-answer", "answer" : "" },
            ])

        // const fetchData = async () =>{
        //     // setLoading(true);
        //     try {
        //       axios.get('http://localhost:5001/questions')
        //       .then(response => {
        //         setQuestions(response.data)
        //     })
              
        //     } catch (error) {
        //       console.error(error.message)
        //     }
        //   }
      
        //   fetchData();
    }, [])
    
        

    return (
//         <div>
//             <Swiper navigation={true} className="mySwiper">
//   <SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
//   </Swiper>
//         </div>
<>
        <div className="question-component">
            <div className="questions-header">
                <img src={ZipLogo} alt="" className="zip-logo" />
                <div className="welcome-title">Please complete the following questions to book time in the lab!</div>
            </div>
            <div className="questions-container">
            
            { questions.map((question, index) => {
                return (
                    
                <div className = "question-input">
                    {question['answer']}
                    {
                        question['question-type']==='short-answer' ? 
                        <Shortanswer 
                            question = {question['question']} 
                            answerr = {question['answer']}
                        /> : 
                        <Shortanswer/>
                    }
                </div>
                )

                
                
            })}


            <button className="send-btn" onClick={(e)=>{console.log(e.target.value)}}></button>
            
            </div>
            <button className="submit-button" onClick={submitEntry}>send</button>
            </div>
        </>
    )
}
