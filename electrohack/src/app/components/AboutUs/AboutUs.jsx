import React from "react";
import Nav from "../Nav/Nav";
import "./AboutUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function AboutUs() {
  return (
    <div className="about-body">
      <Nav />
      <div className="poster-bg m-0 p-0 " style={{ height: "700px" }}>
        <div className="container ">
          <div className="row d-flex align-items-center">
            <div className="col-8">
              <h1 className="pb-4 pt-5 mt-5 text-white">Presentación del proyecto</h1>
              <p className="lead text-white">
                ELECTROHACK es un e-commerce que realizamos como proyecto final del coding
                bootcamp de Hack-Academy. Para la parte del Back-End y base de datos
                utilizamos las siguientes tecnologías:
              </p>
              <div className="row mt-5 ">
                <div className="col-11 mx-auto ">
                  <div className="row ">
                    <div className="col-3 mr-3 alert bg-primary text-center">React</div>
                    <div className="col-2 mr-3 alert text-dark bg-warning text-center">
                      Express
                    </div>
                    <div className="col-3 mr-3 alert bg-success text-center">Node</div>
                    <div className="col-4 mr-3 alert bg-danger text-center">Redux</div>
                    <div className="col-3 mr-3 alert bg-primary text-center">MongoDB</div>
                    <div className="col-3 mr-3 alert bg-success text-center">
                      Mongoose
                    </div>
                    <div className="col-2 mr-3 alert bg-dark text-center">Persist</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 border-rounded" style={{ marginTop: "100px" }}>
              <img
                src={window.location.origin + "/mobile.PNG"}
                style={{ borderRadius: "20px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-12 mx-auto text-center">
            <div className="row">
              <h1 className="pb-2 pt-5 mt-5 text-white">
                Como ingresar a nuestras aplicaciones:
              </h1>
              <div className="col-8 border-rounded" style={{ marginTop: "100px" }}>
                <img
                  src={window.location.origin + "/Home2.PNG"}
                  style={{ borderRadius: "20px" }}
                />
              </div>
              <div className="col-4 d-flex align-items-center justify-content-center flex-column">
                <h3 className="pb-4 pt-5 mt-5 text-white">Cliente</h3>
                <p className="lead text-white">
                  Aplicacion que ve el cliente
                  <ul className="mt-4" style={{}}>
                    <li>Registrarse</li>
                    <li>Iniciar sesion</li>
                  </ul>
                  <button className="btn btn-primary">Reiniciar datos</button>
                </p>
              </div>
              <div className="col-8 border-rounded" style={{ marginTop: "100px" }}>
                <img
                  src={window.location.origin + "/dashboard.png"}
                  style={{ borderRadius: "20px" }}
                />
              </div>
              <div className="col-4 d-flex align-items-center justify-content-center flex-column">
                <h3 className="pb-4 pt-5 mt-5 text-white">Dashboard</h3>
                <p className="lead text-white">
                  Aplicacion que ven los administradores
                  <ul className="mt-4">
                    <li>Admin: root@gmail.com</li>
                    <li>Password: 1234</li>
                  </ul>
                </p>
                <button className="btn btn-primary">Reiniciar datos</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row ">
          <div className="colfa-rotate-90 mx-auto text-center">
            <h2 className="mb-5">Quienes Somos</h2>
            <p className="lead pb-5">
              Somos un grupo de 3 Desarrolladores Web Jr. que nos encontramos trabajando
              en este proyecto con el fin de que el mismo pueda ser testeado por nuestros
              futuros entrevistadores y utilizarlo como vidriera.
              <br></br> En un tiempo de algo mas de 2 semanas obtuvimos este producto con
              el cual estamos conformes pero seguiremos actualizando los próximos días.
            </p>
          </div>
          <div className="col-4">
            <div className="card text-dark" style={{ width: "18rem" }}>
              <img
                style={{ height: "300px" }}
                src="https://media-exp1.licdn.com/dms/image/C4E03AQEbyabDp8TpmQ/profile-displayphoto-shrink_200_200/0?e=1611187200&v=beta&t=O7AnHyyhjm0IsV98sy-TOa98pyljWq9TWwjsRA9ZGaA"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Sebastián César</h5>
                <p className="card-text" style={{ height: "200px" }}>
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
              <img
                style={{ height: "300px" }}
                src={window.location.origin + "/gallardo.jpeg"}
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Maciel Galeano</h5>
                <p className="card-text" style={{ height: "200px" }}>
                  Para mi fue toda una aventura este proyecto, desde mi punto de vista los
                  tres formamos un equipo increible, la forma de trabajo fue lo mejor.
                  Espero seguir perfeccionado con estas dos grandes personas.
                  https://www.linkedin.com/in/maciel-galeano-22665a194/
                  https://github.com/macielgaleano
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card text-dark" style={{ width: "18rem" }}>
              <img
                src="..."
                className="card-img-top"
                alt="..."
                style={{ height: "300px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Martin Magnone</h5>
                <p className="card-text" style={{ height: "200px" }}>
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
        <div className="row mx-auto">
          <div className="col-6 mx-auto">
            <h2 className="mb-4">Por venir...</h2>
            <ul className="lead mb-5">
              <li>Queremos pulir algunos bugs del dashboard</li>
              <li>Trabajaremos aún más la estética del sitio</li>
              <li>Integraremos MercadoPago y PayPal</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
