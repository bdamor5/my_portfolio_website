import React from "react";
import "./projects.css";
import blog from "./myblogweb.png";
import starmart from "./starmart.png";
import todo from "./todolist.PNG";
import videochat from './videochat.png';

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
                    React, Redux, Redux-thunk, Node, Express, MongoDB Atlas, Jsonwebtoken, Cloudinary, Stripe.js
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

            <li className="project">
              <div className="project__wrapper">
                <img src={todo} alt="todolist" className="project__img" />
                <div className="project__description">
                  <h3 className="project__description--title">
                    Todo list app with local storage
                  </h3>
                  <h4 className="project__description--sub-title">
                    React
                  </h4>
                  <p className="project__description--para">
                    A ToDo list app in which you can add, edit & delete any
                    item.The list gets stored in your browser's local storage so
                    even if you refresh the webpage, the list wont be removed.
                  </p>
                  <div className="project__description--links">
                    <a
                      href="https://github.com/bdamor5/My_Todolist"
                      target="_blank"
                      className="project__description--link"
                      title="Github"
                    >
                      <i class="fab fa-github"></i>{" "}
                    </a>
                    <a
                      href="https://my-todolist1.herokuapp.com/"
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
