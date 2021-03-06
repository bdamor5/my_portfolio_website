import React from "react";
import "./projects.css";
import starmart from "./starmart.png";
import videochat from './videochat.png';
import landing from './landingpage.PNG'
import netflix from './netflix.PNG';

const Projects = () => {
  return (
    <section id="projects">
      <div className="project_container">
        <div className="row">
          <h1 className="section__title">
            Here are some of my <span className="text--purple">projects</span>
          </h1>
          <ul className="project__list">
            <li className="project">
              <div className="project__wrapper">
                <img
                  src={starmart}
                  alt="ecommerce website"
                  className="project__img"
                />
                <div className="project__description">
                  <h3 className="project__description--title">
                    Ecommerce App using MERN 
                  </h3>
                  <h4 className="project__description--sub-title">
                    React, Redux, Redux-thunk, Node, Express, MongoDB Atlas, Jsonwebtoken, Cloudinary, Stripe.js, Node-Mailer
                  </h4>
                  <p className="project__description--para">
                   An ecommerce app with admin dashboard.<br/>Admin credentials are : <br/>Email - admin@gmail.com <br/> Password - admin123
                  </p>
                  <div className="project__description--links">
                    <a
                      href="https://github.com/bdamor5/StarMart_ecommerce_app"
                      target="_blank"
                      className="project__description--link"
                      title="Github"
                    >
                      <i class="fab fa-github"></i>{" "}
                    </a>
                    <a
                      href="https://starmart-ecommerce.herokuapp.com"
                      target="_blank"
                      className="project__description--link"
                      title="Live Project"
                    >
                      <i class="fas fa-link">&nbsp;Live Project</i>{" "}
                    </a>
                    <br/>
                      <p style={{color:'white'}}>(App might take few mins to load up because of heroku dynos)</p>
                  </div>
                </div>
              </div>
            </li>

            <li className="project">
              <div className="project__wrapper">
                <img src={netflix} alt="todolist" className="project__img" />
                <div className="project__description">
                  <h3 className="project__description--title">
                    A Simple Netflix Clone
                  </h3>
                  <h4 className="project__description--sub-title">
                  React, Redux, Redux-thunk, Node, Express, MongoDB Atlas, Jsonwebtoken, Cloudinary
                  </h4>
                  <p className="project__description--para">
                    
                  </p>
                  <div className="project__description--links">
                    <a
                      href="https://github.com/bdamor5/my_netflix"
                      target="_blank"
                      className="project__description--link"
                      title="Github"
                    >
                      <i class="fab fa-github"></i>{" "}
                    </a>
                    <a
                      href="https://netflix-5.herokuapp.com/"
                      target="_blank"
                      className="project__description--link"
                      title="Live Project"
                    >
                      <i class="fas fa-link">&nbsp;Live Project</i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li className="project">
              <div className="project__wrapper">
                <img src={landing} alt="todolist" className="project__img" />
                <div className="project__description">
                  <h3 className="project__description--title">
                    A Landing Page Website
                  </h3>
                  <h4 className="project__description--sub-title">
                    React, Bootstrap
                  </h4>
                  <p className="project__description--para">
                    
                  </p>
                  <div className="project__description--links">
                    <a
                      href="https://github.com/bdamor5/trvl_landing_page1"
                      target="_blank"
                      className="project__description--link"
                      title="Github"
                    >
                      <i class="fab fa-github"></i>{" "}
                    </a>
                    <a
                      href="https://landing-page-trvl.netlify.app"
                      target="_blank"
                      className="project__description--link"
                      title="Live Project"
                    >
                      <i class="fas fa-link">&nbsp;Live Project</i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li className="project">
              <div className="project__wrapper">
                <img src={videochat} alt="todolist" className="project__img" />
                <div className="project__description">
                  <h3 className="project__description--title">
                    A Video Chatting App
                  </h3>
                  <h4 className="project__description--sub-title">
                    React, NodeJs, Socket.io, webRTC 
                  </h4>
                  <p className="project__description--para">
                    You can enter you username under 'Name' field and that name will be displayed to you and to your calling mate.To make a call , copy your id by clicking on the respective button and then pass it to your friend.Now tell your friend to paste that id to 'ID to Call' field and then to click on the call button.A notification will pop-up whether to answer or hang up the call.
                  </p>
                  <div className="project__description--links">
                    <a
                      href="https://github.com/bdamor5/video_callingapp"
                      target="_blank"
                      className="project__description--link"
                      title="Github"
                    >
                      <i class="fab fa-github"></i>{" "}
                    </a>
                    <a
                      href="https://video-chat-app5.netlify.app"
                      target="_blank"
                      className="project__description--link"
                      title="Live Project"
                    >
                      <i class="fas fa-link">&nbsp;Live Project</i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </li>

            

            
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
