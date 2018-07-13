import React from 'react';
import {resources, episodes, podcast} from '../content/machine-learning';
import Episode from './Episode';

const Episodes = () => {
    return (
      <div className="episodes-container">
        <h2> Episodes </h2>
        {
          episodes.map((episode) => {
            return (
              <Episode
                episode={episode}
                key={episode.guid}
              />
            )

          })
        }
      </div>
    )
};

export default Episodes;
