import React from 'react'
import './WelcomeScreen.css'
import { Link } from 'react-router-dom'
import ZipLogo from './res/logo.svg'
export default function Welcomescreen(props) {
    

    return (
        <>
            <div className="welcome-screen-container">
                <img src={ZipLogo} alt="" className="zip-logo" />
                <div className="welcome-title">Welcome to the lab!</div>
                <Link className="start-button" to="/questions">Start questions</Link>
            </div>
        </>
    )
}
