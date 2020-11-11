import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Product({ item }) {
  return (
    <div className="col-2">
      <div class="card text-white bg-danger mb-3">
        <img class="card-img-top" src={item.pictures[0]} alt="" />
        <div class="card-body pb-5" style={{ height: "300px" }}>
          <h4 class="card-title">{item.name}</h4>
          <p class="card-text">{item.description}</p>
        </div>
      </div>
    </div>
  );
}
