import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';
import ReactDisqusThread from 'react-disqus-thread';
import _ from 'lodash';
import podcast from '../content/machine-learning';
import './podcasts.css';




const fmt = 'MMM, MM/DD/YYYY';







class Episode extends Component {
  renderPlayer = (podcast, episode) => {
    if (podcast.useLibsynPlayer) {
      const embedCode = `<iframe style="border: none" src="//html5-player.libsyn.com/embed/episode/id/${episode.libsynEpisode}/height/90/width/640/theme/custom/autonext/no/thumbnail/yes/autoplay/no/preload/no/no_addthis/no/direction/backward/render-playlist/no/custom-color/87A93A/" height="90" width="640" scrolling="no"  allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>`;
      return <div dangerouslySetInnerHTML={{__html: embedCode}} />;
      // Tried massaging the embed-code to React-compliant props, but still getting `Unknown prop __` - so using dangerouslySetInnerHTML instead
      // return <iframe src={`//html5-player.libsyn.com/embed/episode/id/${e.libsynEpisode}/height/90/width/640/theme/custom/autonext/no/thumbnail/no/autoplay/no/preload/no/no_addthis/no/direction/backward/render-playlist/no/custom-color/87A93A/`} style={{border: "none"}} height="90" width="640" scrolling="no" allowFullScreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
    }
    return (
      <audio controls style={{width:'100%'}}>
        <source src={episode.file.url} type={episode.file.type}/>
        Your browser does not support the audio element.
      </audio>
    );
  };

  markdownRenderers = {
    // Ensure all episode links are target=_blank
    Link: props => (<a href={props.href} target="_blank">{props.children}</a>)
  };

  render() {
    const {id} = this.props.match.params;
    const episode = _.find(podcast.episodes, {episode: parseInt(id)});
    // Turn h2s into h3s (h2s make sense standalone, not inlined the website)
    const body = episode.body && episode.body.replace(/##/g, '###');
    return (
      <div className='content-container'>
        <Button className="button" href={`/mlg`}>&lt; All Episodes</Button>

        <div className='episode-container'>
          <h2>{episode.title}</h2>
          <i>{moment(episode.date).format(fmt)}</i>
          {body? (
            <ReactMarkdown source={body} renderers={this.markdownRenderers} />
          ): (
            <p>{episode.teaser}</p>
          )}
        </div>
        {this.renderPlayer(podcast, episode)}
        <ReactDisqusThread
          shortname="ocdevel"
          identifier={episode.guid}
          title={`${episode.title} | ${podcast.title}`}
          url={`http://ocdevel.com/mlg/${id}`}/>
      </div>
    );
  }
};

export default Episode;
