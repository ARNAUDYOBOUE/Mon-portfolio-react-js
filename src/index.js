import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/header';
import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from './Components/aboutMe';

import Skills from './Components/skills';
import Projects from './Components/projets';
import Experiences from './Components/experiences';
import Services from './Components/services';
import Greetings from './Components/greetings';
import { BrowserRouter } from 'react-router-dom'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <AboutMe />
    <Skills />
    <Projects />
    <Experiences />
    <Services />
    <Greetings/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

