import React, {Component} from 'react';
import {Link} from 'react-router-dom';



const NotFoundPage = () => (

  <div>
    <img src="/files/podcasts/machine-learning/art.jpg" alt="MLG Logo" />
    <p> Woops!  You appear to be lost! Follow me this way!</p>
    <Link to="/"> OCDevel Main Page </Link>
    <Link to="/mlg"> Machine Learning Guide Home </Link>
  </div>
);

export default NotFoundPage; 
