import React from "react";
import Nav from "../Nav/Nav";
import "./AboutUs.css";
import axios from "axios";

export default function AboutUs() {
  let useRestoreDatabase = async () => {
    await axios
      .get("https://electrohack-server.vercel.app/data")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="about-body">
      <Nav />
      <div className="poster-bg m-0 p-0 " style={{ height: "700px" }}>
        <div className="container ">
          <div className="row d-flex align-items-center">
            <div className="col-md-8 col-sm-12 col-12">
              <h1 className="pb-4 pt-5 mt-5 text-white">Presentación del proyecto</h1>
              <p className="lead text-white">
                ElectroHack es un e-commerce que desarrollamos como proyecto final del
                Coding Bootcamp en Hack-Academy, en los 3 meses de duración del curso
                utilizamos distintas tecnologías.
              </p>
              <p className="lead text-white">
                Para este proyecto utilizamos las <strong>siguientes:</strong>
              </p>
              <div className="row mt-2 ">
                <div className="col-12 mx-auto ">
                  <div className="row ">
                    <div className="col-md-3 col-3 mr-3 alert bg-primary text-center">
                      React
                    </div>
                    <div className="col-md-2 col-4 mr-3 alert text-dark bg-warning text-center">
                      Express
                    </div>
                    <div className="col-md-3 col-3 mr-3 alert bg-success text-center">
                      Node
                    </div>
                    <div className="col-md-4 col-4 mr-3 alert bg-danger text-center">
                      Redux
                    </div>
                    <div className="col-md-4  col-4 mr-3 alert bg-primary text-center">
                      MongoDB
                    </div>
                    <div className="col-md-3  col-4 mr-3 alert bg-success text-center">
                      Mongoose
                    </div>
                    <div className="col-md-2 col-4 mr-3 alert bg-dark text-center">
                      Persist
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 d-sm-none d-none d-md-block border-rounded"
              style={{ marginTop: "100px" }}
            >
              <img
                src={window.location.origin + "/mobile.PNG"}
                style={{ borderRadius: "20px" }}
                alt="Aplicacin mobile"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-md-12 mx-auto ">
            <div className="row">
              <div className=" col-sm-12 col-md-12 col-12"></div>
              <div className="col-12">
                <h1 className="pb-2 pt-5 mt-5 text-white">
                  Como ingresar a nuestras aplicaciones:
                </h1>
              </div>
              <div
                className="col-md-8 col-12 col-sm-12 mt-5 mb-5 border-rounded"
                style={{ marginTop: "100px" }}
              >
                <img
                  src={window.location.origin + "/Home2.PNG"}
                  style={{ borderRadius: "20px" }}
                  alt="Aplicacion home"
                />
              </div>

              <div className="col-md-4 col-12 col-6s d-flex align-items justify-content-center flex-column">
                <h3 className="pb-4 mt-5 text-white">Cliente</h3>
                <p className="lead text-warning">
                  Aplicación que ve el cliente
                  <ul className="mt-4 lists text-white" style={{}}>
                    <li>Registrarse</li>
                    <li>Iniciar sesión</li>
                  </ul>
                </p>
                <button className="btn btn-primary" onClick={useRestoreDatabase}>
                  Reiniciar datos
                </button>
              </div>
              <div className="col-md-8 border-rounded" style={{ marginTop: "100px" }}>
                <img
                  alt="Imagen del dashboard"
                  src={window.location.origin + "/dashboard.png"}
                  style={{ borderRadius: "20px" }}
                />
              </div>
              <div className="col-md-4 d-flex align-items justify-content-center flex-column">
                <h3 className="pb-4 pt-5 mt-5 text-white">Dashboard</h3>
                <p className="lead text-warning">
                  Aplicación que ven los administradores
                  <ul className="mt-4 lists text-white">
                    <li>Admin: root@gmail.com</li>
                    <li>Password: 1234</li>
                  </ul>
                </p>
                <button className="btn btn-primary" onClick={useRestoreDatabase}>
                  Reiniciar datos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row ">
          <div className="colfa-rotate-90 mx-auto ">
            <h2 className="mb-5">Quienes Somos</h2>
            <p className="lead pb-5">
              Somos un grupo de tres Desarrolladores Web Jr. que nos encontramos
              trabajando en este proyecto con el fin de que el mismo pueda ser testeado
              por nuestros futuros entrevistadores y utilizarlo como ejemplo de lo que
              podemos lograr.
              <br></br> En 2 semanas obtuvimos este producto con el cual estamos
              conformes, aunque lo continuaremos actualizando los próximos días.
            </p>
          </div>
          <div className="col-md-4 col-sm-12 col-12 mb-4 d-flex justify-content-center">
            <div className="card text-dark" style={{ width: "18rem" }}>
              <img
                alt="Imagen"
                style={{ height: "300px" }}
                src="/img/seba.png"
                className="card-img-top"
              />
              <div className="card-body card-responsive">
                <h5 className="card-title">Sebastián César</h5>
                <p className="card-text  text-dev" style={{ height: "200px" }}>
                  Personalmente fue mi primer experiencia en un proyecto completo,
                  Back-End, Front-End y base de datos.
                  <br />
                  Quedé muy conforme con el equipo y con muchas ganas de perfeccionar y
                  pulir muchas cosas en futuros proyectos.
                  <br />
                  <br />
                  <a href="https://www.linkedin.com/in/sebastian-cesar">
                    Visitame en LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-12 mx-auto mb-4  d-flex justify-content-center">
            <div className="card text-dark" style={{ width: "18rem" }}>
              <img
                alt="Maciel imagen"
                style={{ height: "300px" }}
                src={window.location.origin + "/gallardo.jpeg"}
                className="card-img-top img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Maciel Galeano</h5>
                <p className="card-text text-dev" style={{ height: "200px" }}>
                  Para mi fue toda una aventura este proyecto, desde mi punto de vista los
                  tres formamos un equipo increible, la forma de trabajo fue lo mejor.
                  Espero seguir perfeccionado con estas dos grandes personas.
                  <br />
                  <br />
                  <a href="  https://github.com/macielgaleano">Visitame en GitHub</a>
                  <br />
                  <a href="https://www.linkedin.com/in/maciel-galeano-22665a194/">
                    Visitame en LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-12 mb-4 d-flex justify-content-center">
            <div className="card text-dark" style={{ width: "18rem" }}>
              <img
                alt="Imagen"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQHFpmI1HuUHTw/profile-displayphoto-shrink_200_200/0/1605801494715?e=1611187200&v=beta&t=m4lsaqpS4BDdZhRa_GWujopHGnoA5Us5cr0HbZpsfrg"
                className="card-img-top"
                style={{ height: "300px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Martín Magnone</h5>
                <p className="card-text text-dev" style={{ height: "20px" }}>
                  Este es el primer proyecto grande en el que trabajo. Fue una experiencia
                  buenísima. Formamos un gran equipo y nos complementamos de una gran
                  manera. Estoy muy contento con el trabajo realizado hasta el momento.
                  <br />
                  <br />
                  <a href="https://www.linkedin.com/in/martin-magnone">
                    Visitame en LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-auto">
          <div className="col-md-6  col-sm-12 col-12">
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
