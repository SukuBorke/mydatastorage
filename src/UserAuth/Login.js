import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='regform'>
    <div className='authHeading'>Login</div>
    <div className='inpt'><input type={'text'} placeholder='User Name'></input></div>
    <div className='err'></div>
    <div className='inpt'><input type={'password'} placeholder='Password'></input></div>
    <div className='err'></div>
    <div className='btndiv'><button className='btn'>Login</button></div>
    <div id='formbottom'><span id='simtxt'>Not a member</span><Link to="/register" id='elink'>Create Account</Link></div>
   </div>
  )
}

export default Login