import React from 'react'
import {useState} from 'react'

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
      <div className='authHeading'>Login</div>
      <div className='inpt'><input type={'text'} placeholder='User Name'></input></div>
      <div className='err'></div>
      <div className='inpt'><input type={'password'} placeholder='Password'></input></div>
      <div className='err'></div>
      <div className='btndiv'><button className='btn'>Login</button></div>
      <div id='formbottom'><span id='simtxt'>Not a member</span><a href='#' id='elink'>Create Account</a></div>
      

  
    

    </div>
  )
}

export default Register