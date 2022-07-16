import React from 'react';
import {Trips} from '../data.js';
import Comments from "./comments.js";

const HikeCard = ({title, location, crowds, distance, difficulty, date, comments}) => {
  return (
    <div className="hikeCard">
      <h1>{title}</h1>
      <div className="hikeStats">
        <p id="date">{date}</p>
        <p id="location">Location: {location}</p>
        <p id="distance">Dist: {distance} miles</p>
        <p ide="difficulty">Difficulty:{difficulty}</p>
        <p id="crowds">Crowds: {crowds}</p>
        <div id="comments">Comments: <Comments comments={comments} /></div>
      </div>
      <div className="comment-and-like">
        <input type="text" className="comment"/>
        <button className="likeButton"></button>
      </div>
    </div>
  )
}

export default HikeCard