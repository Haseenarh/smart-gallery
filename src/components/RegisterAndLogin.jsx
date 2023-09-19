import React, { useState } from 'react';
import { database } from './FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const RegisterAndLogin = () => {
  const [login, setLogin] = useState(false);
  const history = useNavigate();

  const bgStyles = {
    backgroundImage: "url('https://img.freepik.com/free-photo/top-view-accessoires-travel-concept-white-mobile-phone-airpla_1921-59.jpg?w=900&t=st=1695150543~exp=1695151143~hmac=edaa473394d71c9ae4cdc3b9dccb372dfe399a4b7b0c71e6390f7e83b48277d4')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(database, email, password)
      .then(data => {
        history("/home");
      })
      .catch(err => {
        alert(err.code);
      });
  }

  return (
    <div style={bgStyles} className='w-full h-calc flex flex-col justify-center items-center gap-8'>
      <h1 className='text-3xl text-center font-bold'>Login to your Smart Gallery</h1>
      
      <form onSubmit={handleSignIn} className='sm:w-2/6 flex flex-col gap-5'>
        <div className='flex flex-col gap-4 rounded-md'>
          <input
            className='py-4 px-4 rounded-t-md'
            name='email'
            type="email"
            placeholder='Email' />
          <input
            className='p-4 px-4 rounded-b-md'
            name='password'
            type="password"
            placeholder='password' />
        </div>
        <button className='text-white font-bold bg-green rounded-md py-3'>Sign In</button>
      </form>
    </div>
  )
}

export default RegisterAndLogin;
