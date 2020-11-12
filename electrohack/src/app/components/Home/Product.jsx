import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Product({ item }) {
  return (
    <div className="col-2">
      <div className="card text-white bg-danger mb-3">
        <img className="card-img-top" src={item.pictures[0]} alt="" />
        <div className="card-body pb-5" style={{ height: "300px" }}>
          <h4 className="card-title">{item.name}</h4>
          <p className="card-text">{item.description}</p>
        </div>
      </div>
    </div>
  );
}
