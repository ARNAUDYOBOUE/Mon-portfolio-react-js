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
import Footer from './Components/Footer';

function App() {
    return (
        <div>
            <Header />
            <main>
                <section id="about-me">
                    <AboutMe />
                </section>
                <section id="skills">
                    <Skills />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="experiences">
                    <Experiences />
                </section>
                <section id="services">
                    <Services />
                </section>
            </main>
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);