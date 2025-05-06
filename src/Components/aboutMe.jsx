import React from "react";
import '../index';
import ResumeButton from "./resumebutton";
import '../index.css';

function AboutMe() {
    return (
        <section>
            <div className="container-fluid aboutMe">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 col-xs-12">
                            <img className="profile-image" src="/profil.jpg" alt="arnaud" />
                        </div>
                        <div className="col-12 col-md-3 col-lg-6 col-xs-12 text-center">
                            <h1>
                                About me
                            </h1>
                           <p> Diplômé en Informatique et passionné de programmation, je me suis spécialisé dans le developpement d'applications Web et l'Analyse de données à partir des langages de programmation HTML, CSS, DAX, POWER BI, JAVASCRIPT & REACT . Je suis à la recherche de nouvelles expériences en développement d'application Web afin de développer davantage mes compétences.</p>
                           <ResumeButton/>
                        </div>
                    </div>
            
                </div>
            </div>
        </section>
    )
}

export default AboutMe;