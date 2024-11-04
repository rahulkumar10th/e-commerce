import React from 'react';
 import './css/LoginSignup.css';
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
          <div className="loginsignup-field">
          <input type="text" placeholder='username' />
          <input type="email" placeholder='eamil address' />
          <input type="password" placeholder='password' />
           </div>

          
           <button> Continue</button>
           <p className="loginsignup-login">Alredy have an account?<span>Login here</span></p>

           <div className="loginsignup-agrre">
            <input type="checkbox" name='' id=''/>
            <p>by continuing,i am agree to the terms of use and privacy policy. </p>

           </div>
            
       </div>
     </div>
  );
}

export default LoginSignup;
