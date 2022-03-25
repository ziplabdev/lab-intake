import React, { useState } from 'react'
import './admin.css'
import axios from 'axios'


import ZipLogo from './res/logo.svg'
export default function Admin(props) {
    
    const [spreadSheetId, setSpreadsheetId] = useState('')

    const updateClickUp = async () => {
        try {
            axios.post('https://zip-lab-intake-api.netlify.app/.netlify/functions/index/getUpdates')
            // axios.post('http://localhost:9000/.netlify/functions/index/getUpdates')
            .then(res => {
                console.log(res)
            })
        }catch {
            console.log('error')
        }
    }

    const updateSpreadSheetId = async () => {
        try {
            const id = {id: "id"}
            axios.post('https://zip-lab-intake-api.netlify.app/.netlify/functions/index/updateSpreadsheetId', id)
            .then(res => {
                console.log(res)
                // setSubmitted(true)
            })
        }catch {
            console.log('error')
        }
    }

    return (
        <div className="admin-container">
            <div className="admin-header">
                <img className = "zip-logo" src={ZipLogo} alt="" />
                <div className="title">Greetings Rene!</div>
                <div classNam="title-description">Update your spreadsheet id and clickup here!</div>
            </div>
            <div className="spreadsheet-id">
                <div className="spread-descrip">Please enter the spreadsheet id here:</div>
                <input type="text" className="input-spreadsheet-id" />
                <div className="spread-descrip-sub">
                    Make sure to share sheet with email:<br/>
                    clickup@forms-335604.iam.gserviceaccount.com
                </div>
                <button className="update-id" onClick={updateSpreadSheetId}>Update Spreadsheet Id</button>
            </div>
            <button className="update-clickup" onClick={updateClickUp}>
                Update Clickup
            </button>
        </div>
    )
}
