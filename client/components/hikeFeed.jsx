import React, {useState} from 'react'
import HikeCard from './hikeCard';
//import {hikes} from '../data.js'

const HikeFeed = ({hikesData, deleteHikes, editHikes}) => {

  //console.log('in hike feed', {hikesData})

  if (!hikesData.length) return (
    <div>Sorry, no hikes found! </div>
  );

  // const hikeElems = hikesData.map((hike)=> {
  //   return (
  //     <HikeCard
  //     info = {hike}
  //     />
  //   );
  // });

  // return (
  //   <div id = "hikeCardContainer">
  //     {hikeElems}
  //   </div>
  //)
  console.log('deleteHikes in HikeFeed: ', deleteHikes)
  return (
    <div id="hikeCardContainer">
      {
        hikesData.map(hike => (
          <HikeCard deleteHikes={deleteHikes} id={hike._id} title = {hike.title} location={hike.location} date={hike.date} distance={hike.distance} difficulty={hike.difficulty} crowds={hike.crowds} type={hike.type} notes={hike.notes} />
        ))
      }
    </div>
  )
}

export default HikeFeed;