import React from 'react';

export default class Portfolio extends React.Component {
  render() {
    return (
      <div className='row'>
        {this.props.items.map(item =>
          <div className="col-md-4">
            <h4><a className="portfoliolink" href={item.url} target='_blank'>{item.name}</a></h4>
            <img className='portfolio-image img-rounded' href={item.url} src={item.img}/>
          </div>
        )}
      </div>
    );
  }
}