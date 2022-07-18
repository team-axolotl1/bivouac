import React, {useEffect, useState} from 'react'
//import { useNavigate } from "react-router-dom";
import axios from 'axios'
import HikeFeed from '../components/hikeFeed';
//import AddHikeScreen from './addHikeScreen'

// componentDidMount = () => {
//   this.getHikes();
// }

const DashboardScreen = () => {
  const [hikesData, setHikesData] = useState([]);

  const getHikes = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));

      const response = await axios.post(
        "/api/hikes/get-hikes",
        {
          userid: user._id
        }
      );
      setHikesData(response.data);
      //console.log(response.data)
      //console.log('user hikes are here!')
    }
    catch (error){
      console.log('error in gethikes function')
    }
  }

const deleteHikes = async (hikeID) => {
  try {
    await axios.delete(`api/hikes/${hikeID}`);
    getHikes();
  }
  catch (error) {
    console.log('error in deletehikes function')
  }
}

const editHikes = async (values) => {
  console.log('hikeID in editHikes', hikeID)
  try {
    await axios.put(`api/hikes/${hikeID}`, {
      payload : {
        ...values,
        userid: user._id
      }
    });
    getHikes();
  }
  catch (error) {
    console.log('error in deletehikes function')
  }
}

useEffect(() => {
  getHikes();
}, []);

//console.log('in dashboard screen', {hikesData})

  return (
    <div className="hikeFeed">
        <HikeFeed hikesData = {hikesData} deleteHikes = {deleteHikes} editHikes = {editHikes}/>
    </div>
  )
}

export default DashboardScreen;