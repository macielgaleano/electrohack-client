import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import Button from "@material-ui/core/Button";

export default function Poster() {
  return (
    <div className="poster-bg d-flex align-items-center">
      <div className="container ">
        <div className="row mt-5 ">
          <div className="col-12 mx-auto">
            <h1 className="text-white">ELECTROHACK</h1>
            <h2 className="text-white subtitle">
              La mejor calidadad del mercado,{" "}
              <span>los productos que estabas buscando.</span>
            </h2>
            <div className="d-flex justify-content-between" style={{ width: "400px" }}>
              <Button className="mt-5" variant="contained" color="secondary">
                Seguir viendo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
