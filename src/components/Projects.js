import React from 'react';



const Projects = (props) => (

  <div className="info info-front">
    <div className="highlight-header">
      <div className="back-button" onClick={props.onClick}>
        <i className="fas fa-chevron-circle-left fa-3x"></i>
      </div>
      <h1> Highlight Reel </h1>
    </div>
    <div className="project-container">
        Filler
    </div>
  </div>
);

export default Projects;


//there is a bug that developer needs to fix, leaving this off for now.
// import { CardStack, Card } from 'react-cardstack';
// <CardStack
//   height={400}
//   width={350}
//   background='#0c1720'
//   hoverOffset={25}>
// <Card background='#4C8077'>
//   <div className="project">
//     <div className="project__header">
//       <img src="/images/MLG-logo-80.jpg" alt="MLG Logo" />
//       <h3>Machine Learning Podcast</h3>
//     </div>
//     <div className="blurb-container">
//
//       <br />
//
//
//       <p className="blurb">
//         This series aims to teach you the high level fundamentals of machine learning
//         from A to Z. We discuss languages and frameworks, deep learning, and more.
//         At the end of every episode I’ll provide the best-of-the-best resources curated from around the web for
//         you to learn each episode’s details.
//       </p>
//       <a href="https://habitica.com" target="_blank">visit</a>
//     </div>
//   </div>
// </Card>
//
// <Card background='#C4FCF0'>
//   <div className="project">
//     <div className="project__header">
//       <img src="/images/habitica-logo-80.png" alt="Habitica Logo" />
//       <h3>Habitica</h3>
//     </div>
//
//     <div className="blurb-container">
//
//         <br />
//
//
//       <p className="blurb">
//          I built the website, mobile apps, and Chrome Extension.
//          Managed dev-ops on Heroku and Amazon Web Services.
//          This was a deep-dive into scalability, marketing, fundraising, hiring, and more.
//          I managed an open source community of 200+ contributors.
//          Was a one-man-band running this 800k+ user-base for 1.5y before hiring.
//
//       </p>
//       <a href="https://habitica.com" target="_blank">visit</a>
//     </div>
//   </div>
// </Card>
// <Card background='#4C8077'>
//   <div className="project">
//     <div className="project__header">
//       <img src="/images/OCDevel-logo-sq-80.jpg" alt="OCDevel Logo" />
//       <h3>Other OCDevel Projects</h3>
//     </div>
//       <div className="blurb-container OCD">
//
//         <br />
//
//
//       <p className="blurb">
//         -Bitcoin Trading Bot <br />
//       -ExecVision <br />
//     -Jobpig <br />
//   -Humana <br />
//     </p>
//
//     </div>
//   </div>
// </Card>
// </CardStack>
