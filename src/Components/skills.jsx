import React, { useState } from "react";

import "../index";

function Skills() {
  const [activeTab, setActiveTab] = useState("technical");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="skills text-center">
      <div className="container">
        <h1>Skills</h1>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === "technical" ? "active" : ""}`}
                  onClick={() => handleTabChange("technical")}
                  href="#technical-skills"
                >
                  Compétences Techniques
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === "soft" ? "active" : ""}`}
                  onClick={() => handleTabChange("soft")}
                  href="#soft-skills"
                >
                  Compétences Transversales (Soft skills)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="row mt-5"
          id="technical-skills"
          style={{ display: activeTab === "technical" ? "flex" : "none" }}
        >
          <div className="col-12 col-md-6 col-lg-6">
            <p className="text-start">HTML</p>
            <div className="progress mb-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="text-start mt-2">MONGO DB</p>
            <div className="progress mb-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="text-start">CSS</p>
            <div className="progress mb-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "60%" }}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="text-start">PYTHON</p>
            <div className="progress mb-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="text-start">DAX</p>
            <div className="progress mb-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <p className="text-start">JAVASCRIPT</p>
            <div className="progress mb-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "70%" }}
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="text-start mt-2">Odoo</p>
            <div className="progress mb-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "70%" }}
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="text-start">TRELLO</p>
            <div className="progress mb-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "90%" }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="text-start">POWER BI</p>
            <div className="progress mb-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="text-start">REACT</p>
            <div className="progress mb-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        <div
          className="row mt-5"
          id="soft-skills"
          style={{ display: activeTab === "soft" ? "flex" : "none" }}
        >
          <div className="col-12 col-md-6 col-lg-6">
            <p className="text-start">ORIENTÉ OBJECTIF</p>
            <div className="progress mb-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="text-start mt-2">COLLABORATION</p>
            <div className="progress mb-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="text-start">RÉALISME</p>
            <div className="progress mb-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "90%" }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="text-start">ADAPTABILITÉ</p>
            <div className="progress mb-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "90%" }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="text-start">RÉSOLUTION DES PROBLÈMES</p>
            <div className="progress mb-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "90%" }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <p className="text-start">EMPATHIE</p>
            <div className="progress mb-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="text-start mt-2">ORGANISATION</p>
            <div className="progress mb-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="text-start">CRÉATIVITÉ</p>
            <div className="progress mb-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="text-start">CURIOSITÉ</p>
            <div className="progress mb-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "95%" }}
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="text-start">AUTONOMIE</p>
            <div className="progress mb-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "95%" }}
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skills