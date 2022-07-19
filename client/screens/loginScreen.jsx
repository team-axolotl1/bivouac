import React, {useState, useEffect} from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import GoogleOauth from '../components/Authenticate'


const LoginScreen = ({user, setUser}) => {
  const navigate = useNavigate()
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
    try{
      let response = await axios.post('/api/users/login', { email: email.value, password: password.value },  { proxy:{
        host: 'localhost',
        port: 3000}})

    //Make a post request to /api/users/login
    //body includes email, password
    localStorage.setItem(
      'user',
      JSON.stringify({ ...response.data, password: "" })
    );
    navigate('/');
  }
  catch(error){
    console.log('error in logging in')
  }
  }
  //to check if user is already logged in, navigate to homepage

  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate("/");
    }
  }, []);

  //if database post is successful, set success flag to true That will re-route to login 
  // response.statusText === 'OK' && setSuccess(true)
  return (
    <div className="signupScreen-container">
      <h1>Login</h1>
      <input className="loginInputs" type="email" id="loginEmail" name="email" placeholder="Email"/>
      <input className="loginInputs" type="password" id="loginPassword" name="password" placeholder="Password"   />
      <Link to="/signup">Not registered yet? Click here to register!</Link>
      <button className="signupButton" id='signup-submit'onClick={() => handleSubmit()} >Login</button>
      <GoogleOauth />
      {success && <p>Success, redirecting... login with your credentials</p>}
    </div>
    
  )
}

export default LoginScreen;