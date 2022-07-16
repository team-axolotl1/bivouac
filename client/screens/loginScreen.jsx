import React, {useState, useEffect} from 'react'
//import { useNavigate } from "react-router-dom";
import axios from 'axios';


const LoginScreen = () => {
  //let navigate = useNavigate()
  const [success, setSuccess] = useState(false)

  // useEffect(() => {
  //   success && setTimeout(() => {
  //     navigate(-1)
  //   }, 8000)
  // }, [success])

  const handleSubmit = async () => {
    //get the values of the needed imputs to send to server
    const email = document.getElementById('loginEmail')
    const password = document.getElementById('loginPassword');

    //Make a post request to /api/users/login
    //body includes email, password
    let response = await axios.post('/api/users/login', { email: email.value, password: password.value },  { proxy:{
    host: 'localhost',
    port: 3000}
  })
  //if database post is successful, set success flag to true That will re-route to login 
    response.statusText === 'OK' && setSuccess(true)
  }
  return (
    <div className="signupScreen-container">
      <h1>Login</h1>
      <input className="loginInputs" type="email" id="loginEmail" name="email" placeholder="Email"/>
      <input className="loginInputs" type="password" id="loginPassword" name="password" placeholder="Password"   />
      <button className="signupButton" id='signup-submit'onClick={() => handleSubmit()} >Login</button>
      {success && <p>Success, redirecting... login with your credentials</p>}
    </div>
    
  )
}

export default LoginScreen