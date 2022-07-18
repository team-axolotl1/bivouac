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
      <p id="date">{date}</p>
      <div className="titleBox">
        <h2>{title}</h2>
      </div>
      <p id="notes">{notes}</p>
      <div className="hikeStats">
        <div id="locationBox">
          <p>Location</p>
          <p id="location">{location}</p>
        </div>
        <hr></hr>
        <div id="distanceBox">
          <p>Distance</p>
          <p id="distance">{distance} miles</p>
        </div>
        <hr></hr>
        <div id="diffAndCrowdsBox">
          <p ide="difficulty">Difficulty: {difficulty}</p>
          <p id="crowds">Crowds: {crowds}</p>
        </div>
      </div>
        <button className="deleteHike" onClick={() => deleteHikes(id)}>Delete Hike</button>
      </div>
  ) 
}

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
       {/* <div className="comment-and-like">
        <input type="text" className="comment"/>
        <button className="likeButton"></button> */}
      {/* </div> */}

export default HikeCard