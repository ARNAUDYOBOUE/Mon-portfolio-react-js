import React from "react"; 
import'../index';

function Header() {
    return (
        <nav>
         <nav className="navbar navbar-expand-lg navbar-transparent navbar-light bg-light ">
            <div className="container">
                <a className="navbar-brand" href="Bonjour">Arnaud YOBOUE</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <a className="nav-link active" aria-current="page" href="Bonjour">About me</a>
                        <a className="nav-link" href="Bonjour">Skills</a>
                        <a className="nav-link" href="Bonjour">Projects</a>
                        <a className="nav-link" href="Bonjour">Work</a>
                        <a className="nav-link" href="Bonjour">Resume</a>
                    </div>
                </div>
            </div>
            </nav>
        </nav>
       
    );
}
export default Header;