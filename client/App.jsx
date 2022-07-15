import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import Home from "./src/pages/Home";
// import Login from "./src/pages/Login";
// import Register from "./src/pages/Register";

const App = () => {

  return (
    <div className="App">
        <div>HEY</div>
      {/* <BrowserRouter>
        <Routes> */}
          {/* <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} /> */}
        {/* </Routes>
      </BrowserRouter>  */}
    </div>
  );
}

// export function ProtectedRoute(props){

//   if(localStorage.getItem('user'))
//   { 
//     return props.children
    
//   } else {

//    return <Navigate to='/login'/>
//   }

// }

export default App;