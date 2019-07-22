import React from 'react'
import {Link} from 'react-router-dom'

export default function Nomatch() {
    return (
        <div style={{backgroundColor: '#fff', width: 400, height: 400, display: 'block', margin: 'auto', position: 'relative' }}>
            <p style={{ textAlign: 'center', color: 'blue', fontSize: '180px'}}>404</p>
<center><Link to="/">Return to Home Page</Link></center>
        </div>
    )
}
