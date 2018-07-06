import React from 'react';
import { CardStack, Card } from 'react-cardstack';


const Projects = (props) => (

  <div className="info info-front">
    <div className="highlight-header">
      <div className="back-button" onClick={props.onClick}>
        <i className="fas fa-chevron-circle-left fa-3x"></i>
      </div>
      <h1> Highlight Reel </h1>
    </div>
    <div className="project-container">
      <CardStack
        height={400}
        width={500}
        background='#0c1720'
        hoverOffset={25}>

        <Card background='#4C8077'>
          <div className="project">
            <img src="/images/MLG-logo-80.jpg" alt="MLG Logo" />
            <div className="blurb-container">
              <h3>Machine Learning Podcast</h3>
              <br />
              <br />

              <p className="blurb">
                This series aims to teach you the high level fundamentals of machine learning
                from A to Z. We discuss languages and frameworks, deep learning, and more.
                At the end of every episode I’ll provide the best-of-the-best resources curated from around the web for
                you to learn each episode’s details.
              </p>
            </div>
          </div>
        </Card>

        <Card background='#C4FCF0'>
          <div className="project">
            <img src="/images/habitica-logo-80.png" alt="Habitica Logo" />
            <div className="blurb-container">
              <h3>Habitica</h3>
                <br />
                <br />

              <p className="blurb">
                 I built the website, mobile apps, and Chrome Extension.
                 Managed dev-ops on Heroku and Amazon Web Services.
                 This was a deep-dive into scalability, marketing, fundraising, hiring, and more.
                 I managed an open source community of 200+ contributors.
                 Was a one-man-band running this 800k+ user-base for 1.5y before hiring.

              </p>
            </div>
          </div>
        </Card>
        <Card background='#4C8077'>
          <div className="project">
            <img src="/images/OCDevel-logo-sq-80.jpg" alt="OCDevel Logo" />
              <div className="blurb-container OCD">
              <h3>Other OCDevel Projects</h3>
                <br />
                <br />

              <p className="blurb">
                -Bitcoin Trading Bot <br />
              -ExecVision <br />
            -Jobpig <br />
          -Humana <br />
            </p>

            </div>
          </div>
        </Card>
      </CardStack>
    </div>
  </div>
);

export default Projects;
