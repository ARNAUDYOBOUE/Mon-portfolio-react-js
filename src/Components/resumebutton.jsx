import React from "react";
import '../index'

function ResumeButton() {
    return (
        <div className="buttonSubmit">
            <a 
                href="https://drive.google.com/file/d/1M-vjfuGRFiG_8QlB9Whnf9VfGNrW6PkK/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-decoration-none"
                aria-label="Télécharger mon CV"
            >
                <button 
                    type="button" 
                    className="btn btn-outline-dark mx-2 resumeButton"
                    style={{ cursor: 'pointer' }}
                >
                    Télécharger mon CV
                </button>
            </a>
        </div>
    )
}

export default ResumeButton