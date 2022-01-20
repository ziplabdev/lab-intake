import React from 'react'
import './admin.css'
export default function Admin(props) {
    

    return (
        <div className="admin-container">
            <div className="admin-header">
                header
            </div>
            <div className="spreadsheet-id">
                <input type="text" className="input-spreadsheet-id" />
                
            </div>
            <button className="update-clickup" onClick={()=>{console.log('updated')}}>
                Update Clickup
            </button>
        </div>
    )
}
