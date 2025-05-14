import React from "react";

function Footer() {
    return (
        <footer className="bg-dark text-center text-white text-lg-start w-100 h-100 position-relative">
            <div className="text-center p-3">
                © 2025 Arnaud YOBOUE
                <a className="text-dark" href="/">
                    <i className="bi bi-github"></i>
                </a>
                <a className="text-dark" href="/">
                    <i className="bi bi-linkedin"></i>
                </a>
                <a className="text-dark" href="/">
                    <i className="bi bi-twitter"></i>
                </a>
                <a className="text-dark" href="/">
                    <i className="bi bi-facebook"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;