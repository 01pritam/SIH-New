import React from 'react';
import { Link } from 'react-router-dom';
import './acontest.css';

const Acontest= () => {
  return (
    <div className='contest-rail'>
      <h1>Welcome to the Forge Page</h1>
      <div >
        <Link to="/contests">
          <button className='add-c'>Add Forge</button>
        </Link>
        <Link to="/showcontest">
          <button className='show-c'>Show Forge</button>
        </Link>
      </div>
    </div>
  );
};

export default Acontest;