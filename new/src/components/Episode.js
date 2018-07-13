import React from 'react';



const Episode = ({episode}) => {

    return (
        <div className="episode-container">
          <h3>{episode.episode}.{episode.title}</h3>
          <p>{episode.date}</p>
          <p>{episode.teaser}</p>
        </div>
    )
};

export default Episode;
