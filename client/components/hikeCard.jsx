import React, {useState} from 'react';
//import {Trips} from '../data.js';
//import Comments from "./comments.js";
import EditHike from './editHike-test.jsx';
//import {Modal, Button} from 'antd';



const HikeCard = ({title, date, type, location, distance, difficulty, crowds, notes, id, deleteHikes, editHikes}) => {


  // const [isModalVisible, setIsModalVisible] = useState(false);

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };
  

  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

  return (
    <div className="hikeCard">
      <h1>{title}</h1>
      <div className="hikeStats">
        <p id="title">Title: {title}</p>
        <p id="date">Date: {date}</p>
        <p id="type">Type: {type}</p>
        <p id="location">Location: {location}</p>
        <p id="distance">Distance: {distance} miles</p>
        <p id="difficulty">Difficulty: {difficulty}</p>
        <p id="crowds">Crowds: {crowds}</p>
        <p id="notes">Notes: {notes}</p>
        <button className="deleteHike" onClick={() => deleteHikes(id)}>Delete Hike</button>
        {/* <Button onClick={showModal}>Edit</Button>
        {/* {showModal && <EditModal id={id} title={title} date={date} type={type} location={location} distance={distance} difficulty={difficulty} crowds={crowds} notes={notes}/>} */}

      {/* <Modal title="Edit Hike" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} id="editModal" >
        <div id='editModal' className="addHikeScreen">
            <div className="signupScreen-container">
            <h1>{title}</h1>
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
            <input type="range" min="1" max="10"  className="slider newHikeInputs" id="difficulty" /> Difficulty
            <input type="range" min="1" max="10" className="slider newHikeInputs" id="crowds" /> Crowds
          </div>
        </div>
      </Modal> */}
      </div>
      {/* <div className="comment-and-like">
        <input type="text" className="comment"/>
        <button className="likeButton"></button> */}
      {/* </div> */}
    </div>
  ) 
}

export default HikeCard