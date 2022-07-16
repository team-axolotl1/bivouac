import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="nav">
          <p id="logo">Bivouac</p>
          <div>
            <Link className="link" to="/dashboard/:userId">Home</Link>
            <Link className="link" to="/addhike">Add Hike</Link>
            <Link className="link" to="/logout">Logout</Link>
          </div>
        </div>
    )
}

export default NavBar;