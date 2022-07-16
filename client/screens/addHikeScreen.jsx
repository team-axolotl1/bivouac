import React from 'react'
import axios from 'axios';

const AddHikeScreen = () => {
   const handleSubmit = async () => {
    //get the values of the needed imputs to send to server
    const title = document.getElementById('title')
    const location = document.getElementById('location');
    const date = document.getElementById('date');
    const notes = document.getElementById('notes');
    const difficulty = document.getElementById('difficulty');
    const distance = document.getElementById('distance'); //
    const crowds = document.getElementById('crowds'); // 
    const type = document.getElementById('hikeType'); // 

    //Make a post request to /api/addHike
    //body includes title, location, date, difficulty, distance, crowds
    let response = await axios.post('/api/hikes', { title: title.value, location: location.value, date: date.value, difficulty: difficulty.value,  crowds: crowds.value, distance: distance.value, notes: notes.value, type: type.value }, { proxy:{
    host: 'localhost',
    port: 3000}
  })
    //if database post is successful, set success flag to true That will re-route to login 
    // response.statusText === 'OK' && setSuccess(true)
  }


  return (
    <div className="addHikeScreen">
        <div className="signupScreen-container">
        <h1>Add your hike</h1>
        <input className="newHikeInputs" type="text" id="title" name="title" placeholder="Title" required />Title
        <input className="newHikeInputs" type="text" id="location" name="location" placeholder="Zion National Park" required />Location
        <textarea className="newHikeInputs" id="notes"></textarea>
        <select name="hikeType" id="hikeType">
          <option value="dayHike">Day Hike</option>
          <option value="thruHike">Thru-Hike</option>
          <option value="sectionHike">Section Hike</option>
          <option value="summitHike">Summit Hike</option>
          <option value="sectionHike">Section Hike</option>
        </select>
        <input className="newHikeInputs" id="date" type="date" />
        <input className="newHikeInputs" type="number" id="distance" name="distance" placeholder="10" required />
        <input type="range" min="1" max="10"  class="slider newHikeInputs" id="difficulty" /> Difficulty
        <input type="range" min="1" max="10" class="slider newHikeInputs" id="crowds" /> Crowds
        <button className="newHikeButton" id='new-hike-submit' onClick={() => handleSubmit()} >Create Hike</button>
      </div>
    </div>
  )
}

export default AddHikeScreen;