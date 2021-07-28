import React from "react";
import "./projects.css";
import mernlandingpage from "./mern_landingpage.PNG";
import landingpage1 from "./landingpage.PNG";
import todo from "./todolist.PNG";
// https://mernuserauth.herokuapp.com/
// https://my-landing-page-1.herokuapp.com/
// https://my-todolist1.herokuapp.com/

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
                  src={mernlandingpage}
                  alt="mern landing page"
                  className="project__img"
                />
                <div className="project__description">
                  <h3 className="project__description--title">
                    Landing Page with MERN
                  </h3>
                  <h4 className="project__description--sub-title">
                    React, Node, Express, MongoDB Atlas, Bcryptjs,
                    Jsonwebtoken
                  </h4>
                  <p className="project__description--para">
                    A demo landing page website with user sign-in & sign-up
                    functionalities.Once a user creates their account and sign's
                    in , their user session period on the website will be of 1
                    minute.User can also edit or delete their profile , only
                    when they are signed in.User's password are hashed and saved
                    in the database, so data privacy is also secured.Website is
                    also fully responsive so it is also mobile friendly.
                  </p>
                  <div className="project__description--links">
                    <a
                      href="https://github.com/bdamor5/Landingpage_MERN"
                      target="_blank"
                      className="project__description--link"
                      title="Github Project"
                    >
                      <i class="fab fa-github"></i>{" "}
                    </a>
                    <a
                      href="https://mernuserauth.herokuapp.com/"
                      target="_blank"
                      className="project__description--link"
                      title="Live Project"
                    >
                      <i class="fas fa-link"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li className="project">
              <div className="project__wrapper">
                <img
                  src={landingpage1}
                  alt="landing page"
                  className="project__img"
                />
                <div className="project__description">
                  <h3 className="project__description--title">
                    Landing Page with smooth scrolling
                  </h3>
                  <h4 className="project__description--sub-title">
                    React
                  </h4>
                  <p className="project__description--para">
                    A demo landing page website with a smooth scrolling
                    feature.I also added a video in the background , in the
                    header which gives a professional look that entices users.
                  </p>
                  <div className="project__description--links">
                    <a
                      href="https://github.com/bdamor5/Landing_page_1"
                      target="_blank"
                      className="project__description--link"
                      title="Github Project"
                    >
                      <i class="fab fa-github"></i>{" "}
                    </a>
                    <a
                      href="https://my-landing-page-1.herokuapp.com/"
                      target="_blank"
                      className="project__description--link"
                      title="Live Project"
                    >
                      <i class="fas fa-link"></i>{" "}
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
                      title="Github Project"
                    >
                      <i class="fab fa-github"></i>{" "}
                    </a>
                    <a
                      href="https://my-todolist1.herokuapp.com/"
                      target="_blank"
                      className="project__description--link"
                      title="Live Project"
                    >
                      <i class="fas fa-link"></i>{" "}
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
