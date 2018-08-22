import React, { Component } from 'react';
import {PageHeader, Panel, Grid, Row, Col, Button, OverlayTrigger, Popover, Glyphicon,
  FormGroup, InputGroup, FormControl, Modal} from 'react-bootstrap';
import {browserHistory} from 'react-router-dom';
import _ from 'lodash';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import podcast from '../content/machine-learning';
import './podcasts.css';
import Episodes from './Episodes';









class Series extends Component {
  constructor() {
    super();
    this.state = {
      showHireModal: false,
      showDonate: false,
      showCrypto: false
    };
  }

  sidebar = () => {
    const {showDonate, showCrypto} = this.state;
    return (
      <div>
        <div className="sub-button-container">
          <a className="zocial itunes sub-button" href="https://itunes.apple.com/us/podcast/machine-learning-guide/id1204521130" target="_blank" rel="nofollow">iTunes</a>
          <a className="zocial android sub-button" href='https://playmusic.app.goo.gl/?ibi=com.google.PlayMusic&amp;isi=691797987&amp;ius=googleplaymusic&amp;link=https://play.google.com/music/m/I6qthwgrz7b5tclqk4ruvipibtu?t%3DMachine_Learning_Guide%26pcampaignid%3DMKT-na-all-co-pr-mu-pod-16' rel='nofollow' target="_blank">Google Play</a>
          <a className="zocial podcast sub-button" href="http://www.stitcher.com/s?fid=130679&refid=stpr" target="_blank" rel="nofollow">Stitcher</a>
          <a className="zocial rss sub-button" href="http://machinelearningguide.libsyn.com/rss" target="_blank" rel="nofollow">Custom (RSS)</a>
        </div>

        <hr/>

        <div className='sidebar-resources' style={{margin: 5}}>
          {showDonate ? (
            <Panel header="Donate">
              <Button bsStyle="primary" block href="https://www.patreon.com/machinelearningguide" target="_blank">Patreon</Button>
              <small>The best way to show your support, as you'll receive perks (like access to an exclusive podcast series on applied ML).</small>
              <hr/>

              {showCrypto ? (
                <FormGroup>
                    <InputGroup>
                      <InputGroup.Addon>BTC</InputGroup.Addon>
                      <FormControl type="text" value="1Mgi64qWNYAcUhjvyoc8oYDNN6oKPzpaWs" />
                    </InputGroup>
                    <InputGroup>
                      <InputGroup.Addon>BCH</InputGroup.Addon>
                      <FormControl type="text" value="17VMYyAHFZSfy8EzLcy69Sie9sw5qe8nyP" />
                    </InputGroup>
                    <InputGroup>
                      <InputGroup.Addon>ETH</InputGroup.Addon>
                      <FormControl type="text" value="0x250092887eC61E75f0F82edcBC741fF428D5c8d5" />
                    </InputGroup>
                    <InputGroup>
                      <InputGroup.Addon>LTC</InputGroup.Addon>
                      <FormControl type="text" value="LfVo7VR1fWPcaG7GhC4LLSrGNQynPsMdSL"/>
                    </InputGroup>
                </FormGroup>

              ) : (
                <Button bsStyle="primary" block onClick={this.showCrypto}>Cryptocurrency</Button>
              )}
              <hr/>

              Paypal:
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input type="hidden" name="hosted_button_id" value="9A9KRVTQFFLFC" />
                  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
              </div>
            </Panel>
          ) : (
              <a href='#' style={{display: 'block'}} onClick={this.showDonate}>
                <Glyphicon glyph="usd"/> Donate
              </a>
          )}
          <a style={{display: 'block'}} href='#' onClick={this.showHireModal}>
            <Glyphicon glyph="briefcase"/> Hire Me
          </a>
          <a style={{display: 'block'}} href='/recommend' onClick={this.goToRecommend}>
            <Glyphicon glyph="exclamation-sign"/> Recommend an Episode
          </a>
          <OverlayTrigger
            placement="right"
            overlay={(
              <Popover id="popover-positioned-right">
                Get notified of new episodes / announcements
              </Popover>
            )}
          >
            <a style={{display: 'block'}} href="http://eepurl.com/cUUWfD" target="_blank">
              <Glyphicon glyph="envelope"/> Mailing List
            </a>
          </OverlayTrigger>
          <a style={{display: 'block'}} href="https://github.com/lefnire/tforce_btc_trader" target='_blank'>
            <FontAwesomeIcon icon={faGithub} /> Podcast Project
          </a>
        </div>
      </div>
    );
  };

  renderHireModal = () => (
    <Modal show={this.state.showHireModal} onHide={this.closeHireModal}>
      <Modal.Header closeButton>
        <Modal.Title>Hire Me</Modal.Title>
      </Modal.Header>
      <Modal.Body className='hire-me'>
        <img src="/files/profile_pic.jpeg" style={{float:'left', paddingRight:10, paddingBottom: 5, width: 150}} alt="tyler" />
        <h4>Tyler Renelle</h4>
        <p>Machine learning engineer focused on time series & reinforcement (esp. NLP & algo-trading). Background in full-stack JavaScript, 10 years web & mobile. Tech: Python, TensorFlow, React / React Native.</p>
        <p>Creator of HabitRPG, a startup begun on Kickstarter which now has ~2M users. Built an enterprise PDF-creation service employed by 1.5k sites, and websites for clients such as Adidas, BigFix, and UCSF. Obsessed with AI - bonafide Singularitarian and herald for the takeover.</p>
        <p>Looking for remote work, or local to Portland, OR.</p>
        <div>
          <ul className="list-unstyled">
            <li><a target="_blank" href="https://www.linkedin.com/in/lefnire" className="zocial linkedin">LinkedIn</a></li>
            <li><a target="_blank" href="https://github.com/lefnire" className="zocial github">Github</a></li>
            <li><a href="mailto:tylerrenelle@gmail.com" className="zocial email">Email</a></li>
          </ul>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.closeHireModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );

  showHireModal = () => this.setState({showHireModal: true});
  closeHireModal = () => this.setState({showHireModal: false});

  showDonate = () => this.setState({showDonate: true});
  showCrypto = () => this.setState({showCrypto: true});

  goToRecommend = () => browserHistory.push(`/mlg/recommend`);

  render() {
    return (
      <div className="series-container">
        <div className="Series">
          {this.renderHireModal()}
          <PageHeader>{podcast.title}</PageHeader>
          <Grid>
            <Row>
              <Col xs={12} md={4} className="mlg-container">

                <div className="logo"><img src={podcast.image} style={{height: 140, width: 140}} alt="podcast"/></div>
                <div>
                  <p><b>Machine Learning Guide</b> {podcast.body}</p>
                  <p><b>Machine Learning Applied</b> is an exclusive podcast series on practical/applied tech side of the same. Smaller, more frequent episodes. See <a href="https://www.patreon.com/machinelearningguide" target="_blank">Patreon</a> to access this series.</p>
                </div>
                {this.sidebar()}

              </Col>
              <Col xs={12} md={8}>
                <Episodes />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Series;

// <Route path="recommend" component={Podcasts.Recommend} />
// <Route path=":id" component={Podcasts.Episode} />
// <IndexRoute component={Podcasts.Episodes} />
