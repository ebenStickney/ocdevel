import React, {Component} from 'react';
import {Link} from 'react-router-dom';



const NotFoundPage = () => (

  <div className="notFound">
    <img className="notFound-logo" src="/images/OCDevel-svg-dark.svg" alt="OCD Logo" />
    <p> Woops!  You appear to be lost! Follow me this way!</p>
    <Link className="notFound-link" to="/"> OCDevel Main Page </Link>
    <Link className="notFound-link" to="/mlg"> Machine Learning Guide Home </Link>
  </div>
);

export default NotFoundPage;
