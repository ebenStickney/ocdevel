import React from 'react';
import Projects from './Projects';
import Tyler from "./Tyler";
import Title from './Title';

//bump up headlines.  make into link.
class DashboardPage extends React.Component {
  state = {
    hasClicked: false
  }

  handleClick = () => {
    const clicked = this.state.hasClicked;
    this.setState(() => ({hasClicked: !clicked}));
  }


  render() {
    return (
      <div className="page-container">
        <div className="side-item__1">
          <Title />
        </div>
        <div className="side-item__2">
        {this.state.hasClicked ?
          <Projects onClick={this.handleClick}/> :
          <Tyler onClick={this.handleClick} />
        }
        </div>
      </div>
    )};
  };



export default DashboardPage;
