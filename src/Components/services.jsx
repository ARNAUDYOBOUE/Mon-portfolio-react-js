import React from "react";
import "../index";

function Services() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="fw-bold text-center">Mes services</h2>
        <p className="text-center fw-white">
        Des dignités plus strictes de la vie, voulant l'évasion complète des malaises, accusent des alias cependant providentiels.
         <br /> Ils détestent toute douleur quelconque.
        </p>
        <div className="row gy-4 mt-4">
          <div className="col-12 col-md-5 col-lg-3 offset-md-1 shadow p-3 mb-5 bg-light rounded service-card">
            <div className="row">
              <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-desktop fa-2x me-3 text-primary"></i>
                </div>
              </div>
              <div className="col offset-md-1">
                <h4>Développement Web</h4>
                <p></p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-5 col-lg-3 offset-md-1 shadow p-3 mb-5 bg-light rounded service-card">
            <div className="row">
              <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-gear fa-2x me-3 text-primary"></i>
                </div>
              </div>
              <div className="col offset-md-1">
                <h4>Data Analyst</h4>
                <p></p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-5 col-lg-3 offset-md-1 shadow p-3 mb-5 bg-light rounded service-card">
            <div className="row">
              <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-pencil fa-2x me-3 text-primary"></i>
                </div>
              </div>
              <div className="col offset-md-1">
                <h4>Référencement web (SEO)</h4>
                <p></p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-5 col-lg-3 offset-md-1 shadow p-3 mb-5 bg-light rounded service-card">
            <div className="row">
              <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-user-secret fa-2x me-3 text-primary"></i>
                </div>
              </div>
              <div className="col offset-md-1">
                <h4>Marketing Digital</h4>
                <p></p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-5 col-lg-3 offset-md-1 shadow p-3 mb-5 bg-light rounded service-card">
            <div className="row">
              <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-o fa-2x me-3 text-primary"></i>
                </div>
              </div>
              <div className="col offset-md-1">
                <h4>Intégration et maintenance</h4>
                <p></p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-5 col-lg-3 offset-md-1 shadow p-3 mb-5 bg-light rounded service-card">
            <div className="row">
              <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-glasses fa-2x me-3 text-primary"></i>
                </div>
              </div>
              <div className="col offset-md-1">
                <h4>Conseils &amp; Accompagnement</h4>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;