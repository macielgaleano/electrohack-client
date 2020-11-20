import React from "react";
import Nav from "../Nav/Nav";
import "./AboutUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function AboutUs() {
  return (
    <div className="about-body">
      <Nav />
      <div className="poster-bg m-0 p-0 d-flex align-items-center">
        <div className="container">
          <div className="col-12">
            <h1 className="pb-4 pt-5 mt-5 text-white">Presentación del proyecto</h1>
            <p className="lead text-white">
              ELECTROHACK es un e-commerce que realizamos como proyecto final del coding
              bootcamp de Hack-Academy. Para la parte del Back-End y base de datos
              utilizamos las siguientes tecnologías:
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-1 mr-2-0 alert bg-primary text-center">React</div>
            <div className="col-1 mr-2 alert bg-primary text-center">Express</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-7"></div>
          <div className="col-6 border-rounded" style={{ marginTop: "140px" }}>
            <img src={window.location.origin + "/mobile.PNG"} />
          </div>
          <div className="col-6 border-rounded" style={{ marginTop: "140px" }}>
            <img src={window.location.origin + "/mobile.PNG"} />
          </div>
        </div>
        <div className="row ">
          <div className="col-9">
            <h2 className="mb-4">Quienes Somos</h2>
            <p>
              Somos un grupo de 3 Desarrolladores Web Jr. que nos encontramos trabajando
              en este proyecto con el fin de que el mismo pueda ser testeado por nuestros
              futuros entrevistadores y utilizarlo como vidriera.
            </p>
            <p className="pb-5">
              En un tiempo de algo mas de 2 semanas obtuvimos este producto con el cual
              estamos conformes pero seguiremos actualizando los próximos días.
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
                  Personalmente fue mi primer experiencia en un proyecto completo pasando
                  por Back-End, Front-End y base de datos.
                  <br />
                  Quedé muy conforme y con muchas ganas de perfeccionar y pulir muchas
                  cosas en futuros proyectos
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
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
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
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
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
