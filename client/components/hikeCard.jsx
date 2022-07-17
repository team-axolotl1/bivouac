import React from 'react';
//import {Trips} from '../data.js';
//import Comments from "./comments.js";

const HikeCard = ({title, date, type, location, distance, difficulty, crowds, notes}) => {
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
      </div>
      <div className="comment-and-like">
        <input type="text" className="comment"/>
        <button className="likeButton"></button>
      </div>
    </div>
  )
}

export default HikeCard