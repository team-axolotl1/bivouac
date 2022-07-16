import React, {useState} from 'react'
//import { useNavigate } from "react-router-dom";
import axios from 'axios';


const SignupScreen = () => {
 // let navigate = useNavigate()
  //success flag for successful signup
  const [success, setSuccess] = useState(false)

  // Success handler
  // useEffect(() => {
  //   //If success flag is set, wait 5 seconds then reroute client to '/login'
  //   success && setTimeout(() => {
  //     navigate(-1)
  //   }, 5000)
  // }, [success])

  //function for clicking signup button
  const handleSubmit = async () => {
    //get the values of the needed imputs to send to server
    const email = document.getElementById('email')
    const password = document.getElementById('password');
    const location = document.getElementById('location');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');

    //Make a post request to /api/users/signup
    //body includes email, password, firstName, lastName, Location
    let response = await axios.post('/api/users/signup', { email: email.value, password: password.value, firstName: firstName.value, lastName: lastName.value, }, { proxy:{
    host: 'localhost',
    port: 3000}
  })
    //if database post is successful, set success flag to true That will re-route to login 
    response.statusText === 'OK' && setSuccess(true)
  }

  return (
    <div className="signupBackground">
      <video id="background-video" autoPlay loop muted poster="/assets/lake.jpg">
        <source src="/assests/Forest.mp4" type="video/mp4" />
      </video>
      <div className="signupScreen-container">
        <h1>Create your account</h1>
        <input className="signupInputs" type="text" id="firstName" name="firstName" placeholder="First Name" required />
        <input className="signupInputs" type="text" id="lastName" name="lastName" placeholder="Last Name" required />
        {/* <input className="signupInputs" type="text" id="location" name="location" placeholder="Location" required /> */}
        <select name="Location" id="location">
          {/* <option value="Location" selected="selected">Location:</option> */}
          <option value="maryland">Maryland</option>
          <option value="texas">Texas</option>
          <option value="oregon">Oregon</option>
          <option value="california">California</option>
        </select>
        <input className="signupInputs" type="email" id="email" name="email" placeholder="Email" required />
        <input className="signupInputs" type="password" id="password" name="password" placeholder="Password" required />
        <button className="signupButton" id='signup-submit' onClick={() => handleSubmit()} >Sign Up</button>
        {success && <p>Success, redirecting... login with your credentials</p>}
      </div>
    </div>
  )
}

export default SignupScreen