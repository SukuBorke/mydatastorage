import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (<>
          <h1>This is changes done by another colabrator</h1>
    <div id='homenav'><span><Link className='elink1' to="/login">Login</Link><Link to="/register" className='elink1'>Create Account</Link></span></div>
    <div></div>
    
    </>
  )
}

export default Home