import React from 'react';
import { CardStack, Card } from 'react-cardstack';

//bump up headlines.  make into link.  
class DashboardPage extends React.Component {
  state = {
    hasClicked: true
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
                  <div className="stacked-headers-box">
                    <h3> OCDevel </h3>
                  </div>
                  <div className="stacked-headers-box">
                    <h2 className="stacked__name">Machine Learning Developer</h2>
                    <h2>Creator of the Machine Learning Guide Podcast</h2>
                  </div>

                </div>

          </div>
          <div className="side-container card-container">
              {this.state.hasClicked ?
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
                        <div className="jump-button" onClick={this.handleClick}>
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
                :
                <div className="info info-front">
                  <div className="highlight-header">
                    <div className="back-button" onClick={this.handleClick}>
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
