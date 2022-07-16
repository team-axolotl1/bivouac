
import HikeCard from './hikeCard';
import {Trips} from '../data.js'

const HikeFeed = () => {
  return (
    <div id="hikeCardContainer">
      {
        Trips.map(trip => (
          <HikeCard location={trip.location} date={trip.date} distance={trip.distance} difficulty={trip.difficulty} crowds={trip.crowds} title={trip.title} comments={trip.comments} />
        ))
      }
    </div>
  )
}

export default HikeFeed;