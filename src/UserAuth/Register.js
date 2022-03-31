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

   <div><input type={'text'} name='name' value={user.name} onChange={changehandler} placeholder="Email address"></input></div>
    
<button onClick={clickhandler}>Click me</button>
    </div>
  )
}

export default Register