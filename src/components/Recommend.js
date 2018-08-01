import React, {Component} from 'react';
import ReactDisqusThread from 'react-disqus-thread';
import {Button} from 'react-bootstrap';
import podcast from '../content/machine-learning';
import './podcasts.scss';



class Recommend extends Component {
  render() {
    return (
      <div>
        <Button href={`/mlg`}>&lt; All Episodes</Button>
        <h2>Recommend a Future Episode</h2>
        <p>Comment (using Disqus) any future episode you'd like to see, or upvote another's recommendation if it's already in the comments. When I'm done with my game-plan, I hope to tackle recommendations in order of popularity.</p>
        <ReactDisqusThread
          shortname="ocdevel"
          identifier={'machine-learning-recommend'}
          title={`Recommend an Episode | ${podcast.title}`}
          url={`http://ocdevel.com/mlg/recommend`}/>
      </div>
    );
  }
};

export default Recommend;
