import React from 'react';
import Collapsible from 'react-collapsible';


const projects = [
  {
    title: "Machine Learning Guide Podcast >",
    image: "/images/MLG-logo-80.jpg",
    link: "/mlg",
    blurb: "This series aims to teach you the high level fundamentals of machine learning from A to Z. We discuss languages and frameworks, deep learning, and more. At the end of every episode I’ll provide the best-of-the-best resources curated from around the web for you to learn each episode’s details."
  },
  {
    title: "Habitica >",
    image: "/images/habitica-logo-80.png",
    link: "https://habitica.com/",
    blurb: "I built the website, mobile apps, and Chrome Extension. Managed dev-ops on Heroku and Amazon Web Services. This was a deep-dive into scalability, marketing, fundraising, hiring, and more. I managed an open source community of 200+ contributors. Was a one-man-band running this 800k+ user-base for 1.5y before hiring."
  }
]



const Projects = (props) => (

  <div className="info info-front">
    <div className="highlight-header">
      <div className="back-button" onClick={props.onClick}>
        <i className="fas fa-chevron-circle-left fa-3x"></i>
      </div>
      <h1> Highlight Reel </h1>
    </div>
    <div className="project-container">
        {projects.map(project => {
          return (
            <Collapsible trigger={project.title}>
              <a href={project.link} target="_blank"><img src={project.image} alt={project.title} /></a>
              <p className='blurb'>{project.blurb}</p>
            </Collapsible>
          )
        })}
        <Collapsible trigger="Other Projects >">
          <img src="/images/OCDevel-svg-dark.svg" alt="OCDevel" />
          <p className='blurb'>
            -Bitcoin Trading Bot <br />
            -ExecVision <br />
            -Jobpig <br />
            -Humana <br />
          </p>
        </Collapsible>

    </div>
  </div>
);

export default Projects;









// <Collapsible trigger="Machine Learning Guide Podcast">
//   <p className='blurb'>  This series aims to teach you the high level fundamentals of machine learning from A to Z. We discuss languages and frameworks, deep learning, and more. At the end of every episode I’ll provide the best-of-the-best resources curated from around the web for you to learn each episode’s details.
//    </p>
// </Collapsible>
// <Collapsible trigger="Habitica">
//   <p className='blurb'>   I built the website, mobile apps, and Chrome Extension.
//      Managed dev-ops on Heroku and Amazon Web Services.
//      This was a deep-dive into scalability, marketing, fundraising, hiring, and more.
//      I managed an open source community of 200+ contributors.
//      Was a one-man-band running this 800k+ user-base for 1.5y before hiring.
//    </p>
// </Collapsible>
// <Collapsible trigger="Other Projects">
  <p className='blurb'>
    -Bitcoin Trading Bot <br />
    -ExecVision <br />
    -Jobpig <br />
    -Humana <br />
  </p>
// </Collapsible>
