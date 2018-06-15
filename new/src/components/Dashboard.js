import React from 'react';


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
          <div className="side-container side-container__info">
                <div className="stacked-headers">
                    <h3> OCDevel </h3>
                    <br />
                    <br />
                    <h2 className="stacked__name">Machine Learning Developer</h2>
                    <h2>Creator of the Machine Learning Guide Podcast</h2>
                </div>
          </div>
          <div className="side-container card-container">
              {this.state.hasClicked ?
                <div className="info info-back">
                    <div className="section side-container__media">
                    <div className="section button-title">
                        <div className="back-button" onClick={this.handleClick}>
                          <i className="fas fa-chevron-circle-left fa-3x"></i>
                        </div>
                        <div className="side-container__title">
                          <h1> About OCDevel's Creator </h1>
                        </div>
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
                    <div className="section side-container__bio">

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
                :
                <div className="info info-front">
                  <h1> Highlight Reel </h1>
                  <div className="project-container">
                    <div className="project">
                      <img src="/images/MLG-logo-80.jpg" alt="MLG Logo" />
                      <div className="blurb-container">
                        <h3>Machine Learning Podcast</h3>
                        <p className="blurb">
                          This series aims to teach you the high level fundamentals of machine learning
                          from A to Z. We discuss languages and frameworks, deep learning, and more.
                          At the end of every episode I’ll provide the best-of-the-best resources curated from around the web for
                          you to learn each episode’s details.
                        </p>
                      </div>
                    </div>
                    <div className="project">
                      <img src="/images/habitica-logo-80.png" alt="MLG Logo" />
                      <div className="blurb-container">
                        <h3>Habitica</h3>
                        <p className="blurb">
                           I built the website (Angular, Node / Express, Mongo),
                           mobile apps (Ionic / Cordova, iOS, Android), and Chrome Extension.
                           Managed dev-ops on Heroku and Amazon Web Services.
                           This was a deep-dive into scalability, marketing, fundraising, hiring, and more.
                           I managed an open source community of 200+ contributors (github.com/habitrpg/habitrpg).
                           Was a one-man-band running this 800k+ user-base for 1.5y before hiring.
                           Lots of startup lessons to bear!
                        </p>
                      </div>
                    </div>
                    <div className="project">
                      <img src="/images/OCDevel-logo-sq-80.jpg" alt="MLG Logo" />
                        <div className="blurb-container OCD">
                        <h3>Other OCDevel Projects</h3>
                        <ul className="blurb">
                          <li>Bitcoin Trading Bot </li>
                          <li>ExecVision</li>
                          <li>Jobpig</li>
                          <li>Humana</li>
                        </ul>
                      </div>
                    </div>
                  </div>


                </div>
              }



            </div>
      </div>
    )};
  };


// const DashboardPage = () => (
// <div className="page-container">
//     <div className="side-container side-container__info">
//           <div className="stacked-headers">
//               <h3> ocDevel </h3>
//               <br />
//               <br />
//               <h2 className="stacked__name">Full-Stack Dev</h2>
//               <h2>Machine Learning Guide Podcast</h2>
//           </div>
//     </div>
//     <div className="side-container card-container">
//         <div className="info info-front">
//           <h1> ...Get to know us </h1>
//         </div>
//         <div className="info info-back">
//             <div className="side-container__media">
//                   <div className="side-container__title">
//                     <h1> About <br /> ocDevels <br /> Creator </h1>
//
//                   </div>
//                   <div className="side-container__item side-container__picName">
//                        <img className="side-container__profilePic" src="/images/profile_pic.jpeg" alt="Profile picture" />
//                   </div>
//                  <div className="side-container__icons">
//                       <a target="_blank" href="https://www.facebook.com/lefnire">
//                         <i className="fab fa-facebook-square fa-3x"></i>
//                       </a>
//                       <a target="_blank" href="https://www.linkedin.com/in/lefnire">
//                       <i className="fab fa-linkedin fa-3x"></i>
//                       </a>
//                       <a target="_blank" href="https://twitter.com/lefnire">
//                         <i className="fab fa-twitter-square fa-3x"></i>
//                       </a>
//                       <a target="_blank" href="https://github.com/lefnire">
//                         <i className="fab fa-github-square fa-3x"></i>
//                       </a>
//                  </div>
//
//              </div>
//             <div className="side-container__bio">
//
//                 <p>
//                   Tyler is a full-stack Senior JavaScript developer and has spent 10 years in web &
//                   mobile. He is focused on Node,
//                   React / React Native, and Angular / Ionic. He is the also creator of HabitRPG, a startup begun on Kickstarter
//                   which now has
//                   800k+ users. Tyler built an enterprise PDF-creation service employed by 1.5k sites, and websites for clients
//                   such as Adidas,
//                   BigFix, and UCSF. Currently obsessed with machine learning, he labels himself a "bonafide singularitarian".
//                   Available starting April for remote work in React, Angular / Ionic, Node, and/or Python.
//                 </p>
//
//             </div>
//         </div>
//
//       </div>
// </div>
//
//
// // <div className="vl"></div>
//
//
// );

export default DashboardPage;
