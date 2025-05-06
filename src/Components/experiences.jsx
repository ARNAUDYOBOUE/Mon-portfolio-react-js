import React from "react";
import "../index";

function Experiences() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold text-center">Mes expériences</h2>
        <p className="text-center fw-light">
        Des dignités plus strictes de la vie, voulant l'évasion complète des malaises, accusent des alias cependant providentiels. <br /> Ils détestent toute douleur quelconque.
        </p>
        <div className="row gy-4 mt-4">
          <div className="col-12 col-md-5 offset-md-1 shadow-sm p-3 mb-5 bg-white rounded service-card">
            <h5 className="fw-bold">Data Analyst, Informaticien</h5>
            <h6 className="fw-light fs-10 mt-2 mb-2">
            Janvier 2024 – Décembre 2024
            </h6>
            <h6 className="fw-bold">Global Export Commoditie</h6>
            <div>
              <ul>
                <li>
                  Personnalisation des modules existants pour r&eacute;pondre
                  aux besoins sp&eacute;cifiques des clients.
                </li>
                <li>
                Analyse et visualisation de données (Power BI, SQL, MongoDB)

Maintenance et installation des systèmes d'exploitation (Windows 10/11)

Déploiement de solutions cloud et gestion de l’infrastructure technique
                </li>
                <li>
                  Extension des fonctionnalit&eacute;s de base du syst&egrave;me
                  en fonction des exigences m&eacute;tiers
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-5 offset-md-1 shadow-sm p-3 mb-5 bg-white rounded service-card">
            <h5 className="fw-bold">Superviseur Commercial</h5>
            <h6 className="fw-light fs-10 mt-2 mb-2">
            Juillet 2021 – Octobre 2023
            </h6>
            <h6 className="fw-bold">Uniskip CI</h6>
            <div className="fw-light">
              <p>
                Sous la responsabilit&eacute; de la Responsable Commerciale
                :
              </p>

              <ul>
                <li>
                Supervision d’équipe commerciale et coordination des ventes

Définition et mise en œuvre des plans d’action commerciale

Négociation, fidélisation et relation client
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-5 offset-md-1 shadow-sm p-3 mb-5 bg-white rounded service-card">
            <h5 className="fw-bold">Responsable Marketing et Communication Digitale / Responsable Informatique</h5>
            <h6 className="fw-light fs-10 mt-2 mb-2">
            Septembre 2017 – Mars 2020
            </h6>
            <h6 className="fw-bold">Luxe Voyages</h6>
            <div className="fw-light">
              <p>
                <strong>
                  Direction informatique et marketing digital 
                </strong>
              </p>

              <ul>
                <li>
                Déploiement de la stratégie marketing digital : SEO, SEA, e-commerce

Conception et gestion du site web de Luxe Voyages

Organisation touristique et gestion des demandes de visas

Représentation à des événements : Eductour, SITA, Adayé Kessié
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-5 offset-md-1 shadow-sm p-3 mb-5 bg-white rounded service-card">
            <h5 className="fw-bold">Projets Personnels</h5>
            <h6 className="fw-light fs-10 mt-2 mb-2">
              mai 2017 - nos jours
            </h6>
            <h6 className="fw-bold">EMARKETAFRICA & TITROLOGUE D’ABIDJAN</h6>
            <div className="fw-light">
              <p>
                <strong>
                Data Analyst & Développeur Web
                </strong>
              </p>

              <ul>
                <li>
                Réalisation de dashboards interactifs avec Power BI

Utilisation de Power Query, DAX, modélisation sémantique

Analyse de données marketing et commerciales

Développement web : HTML, CSS, JS, Node.js, React.js, Bootstrap
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;