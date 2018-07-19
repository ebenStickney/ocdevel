import React from 'react';
import {resources, episodes, podcast} from '../content/machine-learning';
import Episode from './Episode';
import SideBar from './SideBar';

const Episodes = () => {
    return (
      <div className="page-container">
        <div className="side-container">
          <SideBar
            podcast={podcast}
            />
        </div>
        <div className="episodes-container">
          <h2> Episodes </h2>
          {
            episodes.slice().reverse().map((episode) => {
              return (
                <Episode
                  episode={episode}
                  key={episode.guid}
                  podcast={podcast}
                />
              )

            })
          }
        </div>
    </div>
    )
};

export default Episodes;
