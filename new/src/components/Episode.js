import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import ReactDisqusThread from 'react-disqus-thread';


const Episode = ({episode, podcast}) => {

  return (
      <div className="episode-container">
        <Link to={`/mlg/${episode.episode}`}>
          <h3>{episode.episode}.{episode.title}</h3>
        </Link>

        <p>{episode.date}</p>
        <p>{episode.teaser}</p>
      </div>
  )

  };

export default Episode;


//Fallback Component


// Turn h2s into h3s (h2s make sense standalone, not inlined the website)
// const body = episode.body && episode.body.replace(/##/g, '###');
// return (
//   <div>
//     <button href={`/mlg`}>&lt; All Episodes</button>
//     <div>
//       <h2>{episode.title}</h2>
//       <i>{moment(episode.date).format('MMMM Do YYYY')}</i>
//       {body? (
//         <ReactMarkdown source={body} />
//       ): (
//         <p>{episode.teaser}</p>
//       )}
//     </div>
//
//     <ReactDisqusThread
//       shortname="ocdevel"
//       identifier={episode.guid}
//       title={`${episode.title} | ${podcast.title}`}
//       url={`http://ocdevel.com/mlg/${id}`}/>
//   </div>
// );
