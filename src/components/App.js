import React, {Component} from 'react';
import ContactModal from './ContactModal';
import Header from './Header';
import Home from './home/Index';

export default class App extends Component {
  state = {
    showModal: false
  };

  open = () => this.setState({showModal: true});

  close = () => this.setState({showModal: false});

  render() {
    return (
      <div>
      <ContactModal
          showModal={this.state.showModal}
          close={this.close}
       />
       <Header open={this.open} />
      <Home />
      </div>
    );
  }
}
// children gets replaced with nested Route components.  Reminent from v3.
// need to clear out nested routes and rebuild app layout.  Replace
// indexroute with exact={true}
// Figure out what url needs to be for episodes.
