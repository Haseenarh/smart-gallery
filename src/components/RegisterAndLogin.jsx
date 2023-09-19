import React, { useState } from 'react'
import { database } from './FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const RegisterAndLogin = () => {
  const [ login, setLogin ] = useState(false);

  const history = useNavigate()
  // console.log(history);

  const handleSubmit = (e, type) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;

    type == 'signup'?
    createUserWithEmailAndPassword(database, email, password)
    .then( data => {
      console.log(data, "authData")
      history("/home")
    })
    .catch(err => {
      alert(err.code)
      setLogin(true)
    }):
    signInWithEmailAndPassword(database, email, password)
    .then( data => {
      // console.log(data, "authData")
      history("/home")
    })
    .catch(err => {
      alert(err.code)
    });
  }

  return (
    <div className='bg-bg-orange w-full h-calc | flex flex-col justify-center items-center gap-8'>
      {/* <div className='flex gap-12'>
        <p className={!login? "text-black": "text-gray"} onClick={() => setLogin(false)}>Sign Up</p>
        <p className={login? "text-black": "text-gray"} onClick={() => setLogin(true)}>Sign In</p>
      </div> */}

      <h1 className='text-3xl text-center font-bold'>{login? "Sign In": "Create"} your account</h1>

      <form onSubmit={(e) => handleSubmit(e, login? "signin": "signup")} className='sm:w-3/6 flex flex-col gap-5'>
        <div className='bg-white flex flex-col gap-1 rounded-md'>
          <input
            className='py-2 px-4 rounded-t-md' 
            name='email' 
            type="email" 
            placeholder='Email'/>
          <input
            className='p-2 px-4 rounded-b-md' 
            name='password' 
            type="password" 
            placeholder='password' />
        </div>
        <button className='text-white font-bold bg-orange rounded-md py-3'>{login? "Sign In": "Sign Up"}</button>
      </form>

      <p className='flex gap-1'>
        <span>
          {login? "Don't": "Already"} have an account?
        </span>
        <span 
          onClick={() => setLogin(!login)} 
          className='text-orange cursor-pointer font-semibold'> 
            {login? "Create one": "Sign In"}
        </span>
      </p>
    </div>
  )
}

export default RegisterAndLogin