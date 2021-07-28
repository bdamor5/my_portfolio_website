import React from "react";
import "./Languages.css";
import express from "./express.ico";

const Languages = () => {
  return (
    <section id="languages">
      <div className="language_container">
        <div className="row">
          <h1 className="section__title">
            This is my <span className="text--purple">technology stack</span>{" "}
          </h1>
          <div className="language__list">
            <div className="language">
              <figure class="language__img--wrapper">
                <img
                  src="https://img.icons8.com/color/240/000000/c-programming.png"
                  alt="C Logo"
                  class="language__img"
                />
              </figure>
              <span class="language__name">C </span>
            </div>

            <div className="language">
              <figure class="language__img--wrapper">
                <img
                  src="https://img.icons8.com/color/240/000000/c-plus-plus-logo.png"
                  alt="C++ Logo"
                  class="language__img"
                />
              </figure>
              <span class="language__name">C++</span>
            </div>

            <div className="language">
              <figure class="language__img--wrapper">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
                  alt="Html Logo"
                  class="language__img"
                />
              </figure>
              <span class="language__name">HTML</span>
            </div>
            <div class="language">
              <figure class="language__img--wrapper">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
                  alt="CSS Logo"
                  class="language__img"
                />
              </figure>
              <span class="language__name">CSS</span>
            </div>

            <div class="language">
              <figure class="language__img--wrapper">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
                  alt="JavaScript Logo"
                  class="language__img"
                />
              </figure>
              <span class="language__name">JavaScript</span>
            </div>

            <div class="language">
              <figure class="language__img--wrapper">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
                  alt="React Logo"
                  class="language__img"
                />
              </figure>
              <span class="language__name">ReactJS</span>
            </div>

            <div class="language">
              <figure class="language__img--wrapper">
                <img
                  src="https://img.icons8.com/color/240/000000/redux.png"
                  alt="Redux Logo"
                  class="language__img"
                />
              </figure>
              <span class="language__name">React-Redux</span>
            </div>

            <div class="language">
              <figure class="language__img--wrapper">
                <img
                  src="https://img.icons8.com/color/240/000000/nodejs.png"
                  alt="Nodejs Logo"
                  class="language__img"
                />
              </figure>
              <span class="language__name">NodeJS</span>
            </div>

            <div class="language">
              <figure class="language__img--wrapper">
                <img src={express} alt="express Logo" class="language__img" />
              </figure>

              <span class="language__name">ExpressJS</span>
            </div>

            <div class="language">
              <figure class="language__img--wrapper">
                <img
                  src="https://img.icons8.com/color/240/000000/mongodb.png"
                  alt="MongoDB Logo"
                  class="language__img"
                />
              </figure>
              <span class="language__name">MongoDB</span>
            </div>

            <div class="language">
              <figure class="language__img--wrapper">
                <img
                  src="https://img.icons8.com/color/240/000000/azure-1.png"
                  alt="Azure Logo"
                  class="language__img"
                />
              </figure>
              <span class="language__name">Microsoft Azure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
