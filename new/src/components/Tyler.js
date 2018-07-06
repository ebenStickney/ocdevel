import React from 'react';

const Tyler = (props) => (
  <div className="info info-back">
      <div className="side-container__media">
          <div className="side-container__title">
            <h1> About OCDevel's Creator </h1>
          </div>

            <div className="pic-links">
                <div className="side-container__picName">
                     <img className="side-container__profilePic" src="/images/profile_pic.jpeg" alt="Profile picture" />
                </div>
               <div className="side-container__icons">
                    <a target="_blank" href="https://www.facebook.com/lefnire">
                      <i className="fab fa-facebook-square fa-3x"></i>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/lefnire">
                    <i className="fab fa-linkedin fa-3x"></i>
                    </a>
                    <a target="_blank" href="https://twitter.com/lefnire">
                      <i className="fab fa-twitter-square fa-3x"></i>
                    </a>
                    <a target="_blank" href="https://github.com/lefnire">
                      <i className="fab fa-github-square fa-3x"></i>
                    </a>
               </div>
              </div>
       </div>
      <div className="side-container__bio">
          <div className="jump-button" onClick={props.onClick}>
            <h3>Recent Projects</h3>
            <i className="fas fa-play fa-2x"></i>
          </div>
          <p>
            I am a full-stack Senior JavaScript developer and
            has spent 10 years in web & mobile. I am focused on Node,
            React / React Native, and Angular / Ionic.
            I am the also creator of HabitRPG, a startup begun on
             Kickstarter which now has 800k+ users.
            I built an enterprise PDF-creation service employed by 1.5k sites,
            and websites for clients such as Adidas, BigFix, and UCSF.
             Currently obsessed with machine learning, I label myself a
             "bonafide singularitarian". Available starting April for
             remote work in React, Angular / Ionic, Node, and/or Python.
          </p>
        </div>

  </div>
);

export default Tyler;
