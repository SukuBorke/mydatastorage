import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const[user,setUser]=useState({})
  const clickhandler=e=>{
    alert(user.name)
  }
  const changehandler=e=>{
    const value=e.target.value; 
    setUser({...user,
      [e.target.name]:value
    })
  }
  return (
    <div className='regform'>
      <div className='authHeading'>Create Account</div>
      <div className='inpt'><input type={'text'} placeholder='User Name'></input></div>
      <div className='err'></div>
      <div className='inpt'><input type={'password'} placeholder='Password'></input></div>
      <div className='err'></div>
      <div className='inpt'><input type={'password'} placeholder='Confirm Password'></input></div>
      <div className='err'></div>
      <div className='btndiv'><button className='btn'>Register</button></div>
      <div id='formbottom'><span id='simtxt'>Registered already</span><Link id='elink' to="/login">Go to login</Link></div>
      
          </div>
  )
}

export default Register