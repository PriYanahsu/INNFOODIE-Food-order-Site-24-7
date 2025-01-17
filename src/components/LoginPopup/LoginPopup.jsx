import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './LoginPopup.css'

const LoginPopup = ({setShowlogin}) => {

    const[currState, setCurrState] = useState("Login")

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowlogin(false)} src={assets.cross_icon} alt='' />
        </div>
        <div className="login-popup-inputs">
            {currState === "Login"?<></>:<input type='text' placeholder='Your name' required />}
            <input type='name' placeholder='Your name' required />
            <input type='email' placeholder='Your email' required />
            <input type='password' placeholder='Password' required />
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing, i agree to the terms of use and privacy policy. </p>
        </div>
        {currState==="login"
        ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        : <p>Alreay have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup
