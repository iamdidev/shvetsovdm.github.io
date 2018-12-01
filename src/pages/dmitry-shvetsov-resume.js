import React from 'react';

import '../components/resume.sass';

const Resume = () => (
  <div className="sdm-resume">
    <header className="sdm-resume--header">
      <h1 className="sdm-resume-title"><span className="sdm-accent">Dmitry Shvetsov</span> full stack web developer</h1>
      <div className="sdm-lead">
        Love to build software through communication, understanding, learning and sharing.
      </div>
    </header>
    <main className="sdm-resume--content">
      <div className="sdm-resume-column">
        <section>
          <h2 className="sdm-accent">Experience</h2>
          <div className="sdm-resume-block">
            <h3>Lead developer</h3>
            <p><a rel="external" href="https://farpostdevelopment.ru">Farpost Development</a> – Develop Rails applications. Introduced the process of TDD, code review, automated deployment.</p>
            <div className="sdm-resume-block--timeframe">Dec 2013 – Present</div>
          </div>
          <div className="sdm-resume-block">
            <h3>Back end developer</h3>
            <p><a rel="external" href="http://hifromlink.com">Link. (Hong Kong, remote)</a> – Develop an RPC API for an SPA client with Node.js, MongoDB, Docker. Launch project in production.</p>
            <div className="sdm-resume-block--timeframe">Mar 2017 – Present</div>
          </div>
          <div className="sdm-resume-block">
            <h3>Full stack web developer</h3>
            <p><span>Wireprize (Hong Kong, remote)</span> – Develop a mobile gaming platform with Node.js, MongoHQ.</p>
            <div className="sdm-resume-block--timeframe">Sep 2013 – Jul 2014</div>
          </div>
        </section>
      </div>
      <div className="sdm-resume-column">
        <section>
          <h2 className="sdm-accent">Education</h2>
          <div className="sdm-resume-block">
            <h3>BA Computer Science & Economics</h3>
            <p><a rel="external" href="https://www.s-vfu.ru/en">North-Eastern Federal University</a></p>
            <div className="sdm-resume-block--timeframe">Sep 2002 – Jun 2007</div>
          </div>
        </section>
        <section className="sdm-resume-skills">
          <h2 className="sdm-accent">Core skills</h2>
          <ul className="sdm-resume-list">
            <li>Ruby / Rails</li>
            <li>Node.JS / ExpressJS</li>
            <li>JavaScript / ES6</li>
            <li>HTML5 / CSS3</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>TDD / BDD</li>
            <li>OOP</li>
          </ul>
        </section>
      </div>
    </main>
    <footer className="sdm-resume--footer">
      <a className="sdm-resume-contact" href="mailto:shvetsovdm@gmail.com">
        <svg className="sdm-resume-contact--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C118.941 8 8 118.919 8 256c0 137.059 110.919 248 248 248 48.154 0 95.342-14.14 135.408-40.223 12.005-7.815 14.625-24.288 5.552-35.372l-10.177-12.433c-7.671-9.371-21.179-11.667-31.373-5.129C325.92 429.757 291.314 440 256 440c-101.458 0-184-82.542-184-184S154.542 72 256 72c100.139 0 184 57.619 184 160 0 38.786-21.093 79.742-58.17 83.693-17.349-.454-16.91-12.857-13.476-30.024l23.433-121.11C394.653 149.75 383.308 136 368.225 136h-44.981a13.518 13.518 0 0 0-13.432 11.993l-.01.092c-14.697-17.901-40.448-21.775-59.971-21.775-74.58 0-137.831 62.234-137.831 151.46 0 65.303 36.785 105.87 96 105.87 26.984 0 57.369-15.637 74.991-38.333 9.522 34.104 40.613 34.103 70.71 34.103C462.609 379.41 504 307.798 504 232 504 95.653 394.023 8 256 8zm-21.68 304.43c-22.249 0-36.07-15.623-36.07-40.771 0-44.993 30.779-72.729 58.63-72.729 22.292 0 35.601 15.241 35.601 40.77 0 45.061-33.875 72.73-58.161 72.73z"/></svg>
        shvetsovdm@gmail.com
      </a>
      <a className="sdm-resume-contact" href="https://shvetsovdm.github.io">
        <svg className="sdm-resume-contact--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"/></svg>
        https://shvetsovdm.github.io
      </a>
      <a className="sdm-resume-contact sdm-hide-on-print" rel="external" href="https://medium.com/@shvetsovdm">
        <svg className="sdm-resume-contact--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z"/></svg>
        medium
      </a>
      <a className="sdm-resume-contact sdm-hide-on-print" rel="external" href="https://twitter.com/shvetsovdm">
        <svg className="sdm-resume-contact--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
        twitter
      </a>
    </footer>

  </div>
);

export default Resume;
