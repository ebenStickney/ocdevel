import React from 'react';
import ContactForm from './ContactForm';
import Jumbotron from './Jumbotron';
import PortfolioList from './PortfolioList';
import Heads from './Heads';

export default class Tyler extends React.Component {

  constructor() {
    super();
    this.tyler = [
      {
        name:"Habitica",
        img: "/Tyler/habiticapic.png",
        url: "https://habitica.com",
        description: "A gamified habit-improvement app (web & mobile) w/ 800k+ users, ~$40k/m. I started this as a Kickstarter campaign which blew up to a multi-employee startup. Angular, Ionic, Node/Express, MongoDB, AWS."
      },
      {
        name: "Jobpig",
        img: "/Tyler/pig.png",
        url: "http://jobpigapp.com",
        description: "A Pandora-like job finding website."
      },
      {
        name: "Flashdrinks",
        img: "/Tyler/flashdrinkspic.png",
        url: "https://flashdrink.firebaseapp.com",
        description: "Web & mobile mobile app for finding nearby drinking partners."
      },
      {
        name: "Indianchief Travel",
        img: "/Tyler/indianchieftravelpic.jpg",
        url: "http://indianchieftravel.com/",
        description: ""
      }
    ];
  }

  render() {
    return (
      <div>
        <Jumbotron title="Tyler Renelle" />
        <Heads img="/Tyler/tylerhead.png" />
        <ul className="social-buttons">
          <li><i href="https://www.facebook.com/lefnire?fref=ts" className="zocial facebook icon">Facebook</i></li>
          <li><i href="https://www.linkedin.com/in/lefnire?authType=NAME_SEARCH&authToken=px2C&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A18783332%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1458666281374%2Ctas%3Atyler" className="zocial linkedin icon">LinkedIn</i></li>
          <li><i href="https://twitter.com/lefnire?lang=en" className="zocial twitter icon">Twitter</i></li>
          <li><i href="https://github.com/lefnire" className="zocial github icon">Github</i></li>
        </ul>
        <hr/>
        <p className="description">Tyler is a full Stack JavaScript developer and has spent 10 years in web & mobile. He is focused on Node,
          React / React Native, and Angular / Ionic. He is the also creator of HabitRPG, a startup begun on Kickstarter which now has
          800k+ users. Tyler built an enterprise PDF-creation service employed by 1.5k sites, and websites for clients such as Adidas,
          BigFix, and UCSF. Currently obsessed with machine learning, he labels himself a "bonafide singularitarian".
          Available starting April for remote work in React, Angular / Ionic, Node, and/or Python.</p>
        <hr/>
        <PortfolioList items={this.tyler}/>
        <hr/>
        <ContactForm />
      </div>
    );
  }
}
