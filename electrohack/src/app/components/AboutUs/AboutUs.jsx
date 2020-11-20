import React from "react";
import Nav from "../Nav/Nav";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-body">
      <Nav />
      <div className="container">
        <div className="row ">
          <div className="col-6">
            <h2 className="pb-5 pt-5">Presentación del proyecto</h2>
            <p>
              ELECTROHACK es un e-commerce que realizamos como proyecto final
              del coding bootcamp de Hack-Academy.
            </p>
            <p>
              Para la parte del Back-End y base de datos utilizamos las
              siguientes tecnologías:
            </p>
            <ul>
              <li>Node</li>
              <li>Express</li>
              <li>Amazon Web Service SDK</li>
              <li>JWT</li>
              <li>Mongoose</li>
              <li>MongoDB (Atlas)</li>
            </ul>

            <h6>Para el cliente : </h6>
            <ul>
              <li>ReactJS</li>
              <li>Material UI</li>
              <li>Redux</li>
              <li>Persist</li>
            </ul>
            <h6>Para el dashboard: </h6>
            <ul>
              <li>Utilizamos un template hecho en react-bootstrap</li>
            </ul>
          </div>
          <div className="col-6"></div>
        </div>
        <div className="row ">
          <div className="col-12">
            <h2 className="mb-4">Quienes Somos</h2>
            <p>
              Somos un grupo de 3 Desarrolladores Web Jr. que nos encontramos
              trabajando en este proyecto con el fin de que el mismo pueda ser
              testeado por nuestros futuros entrevistadores y utilizarlo como
              vidriera.
            </p>
            <p className="pb-5">
              En un tiempo de algo mas de 2 semanas obtuvimos este producto con
              el cual estamos conformes pero seguiremos actualizando los
              próximos días.
            </p>
          </div>
          <div className="col-4">
            <div className="card text-dark" style={{ width: "18rem" }}>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4E03AQEbyabDp8TpmQ/profile-displayphoto-shrink_200_200/0?e=1611187200&v=beta&t=O7AnHyyhjm0IsV98sy-TOa98pyljWq9TWwjsRA9ZGaA"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Sebastián César</h5>
                <p className="card-text">
                  Personalmente fue mi primer experiencia en un proyecto
                  completo pasando por Back-End, Front-End y base de datos.
                  <br />
                  Quedé muy conforme y con muchas ganas de perfeccionar y pulir
                  muchas cosas en futuros proyectos
                </p>
                <a href="https://www.linkedin.com/in/sebastian-cesar">
                  Visitame en LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card text-dark" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Maciel Galeano</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card text-dark" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Martin Magnone</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h2 className="mb-4">Por venir...</h2>
            <ul>
              <li>Queremos pulir algunos bugs del dashboard</li>
              <li>Trabajaremos aún más la estética del sitio</li>
              <li>Integraremos MercadoPago y PayPal</li>
            </ul>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </div>
  );
}
