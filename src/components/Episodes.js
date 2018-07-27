import React, {Component} from 'react';
import moment from 'moment';
import podcast from '../content/machine-learning';
import './podcasts.css';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import { faUnlock } from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';



const fmt = 'MMM, MM/DD/YYYY';


class Episodes extends Component {
  title = (e, isMLA) => {
    let num = _.padStart(e.episode, 3, '0');
    return `${e.mla? 'MLA ':''}${num} ${e.title}`;
  };

  render() {
    const episodes = podcast.episodes;
    return (
      <div>
        {episodes.slice().reverse().map(e => (
          <div key={e.guid}>

            <h3>
              {e.mla? (
                <a href='https://www.patreon.com/machinelearningguide' target="_blank">{this.title(e)}</a>
              ) : (
                <Link to={`/mlg/${e.episode}`}>{this.title(e)}</Link>
              )}
            </h3>
            {e.mla && (
              <span className='label label-info' style={{marginRight: 10}}><FontAwesomeIcon icon={faUnlock} />  $1/m on Patreon</span>
            )}
            <i>{moment(e.date).format(fmt)}</i>
            <p>{e.teaser}</p>
          </div>
        ))}
      </div>
    );
  }
};

export default Episodes;
