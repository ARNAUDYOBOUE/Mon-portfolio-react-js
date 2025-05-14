import React from "react";

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-transparent navbar-light bg-light fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#about-me">Arnaud YOBOUE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto">
                            <a className="nav-link active" href="#about-me">About me</a>
                            <a className="nav-link" href="#skills">Skills</a>
                            <a className="nav-link" href="#projects">Projects</a>
                            <a className="nav-link" href="#experiences">Work</a>
                            <a className="nav-link" href="#services">Services</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;