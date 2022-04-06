import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (<>
        
    <div id='homenav'><span><Link className='elink1' to="/login">Login</Link><Link to="/register" className='elink1'>Create Account</Link></span></div>
    <div className="animated-text">
      <div className="line">Do you want to save contacts</div>
      <div className="line">You are in right place</div>
      <div className="line">Register to our site</div>
      <div className="line">Then please Login</div>
    </div>

   
    
    </>
  )
}

export default Home