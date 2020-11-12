import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { green } from "@material-ui/core/colors";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./home.css";

export default function Product({ item }) {
  return (
    <div className="col-3">
      <div class="card text-white mt-3 mb-4">
        <img class="card-img-top img-fluid image" src={item.pictures[0]} alt="" />
        <div class="card-body d-flex justify-content-between align-items-start">
          <div className="d-flex flex-column justify-content-end align-items-end">
            <h4 class="lead text-dark name">{item.name}</h4>
          </div>
          <div className="d-flex flex-column justify-content-end align-items-end">
            <p className="price text-dark ml-3"> ${item.price}</p>
            <div>
              <ShoppingCartIcon
                style={{ color: green[500], fontSize: "40px" }}
              ></ShoppingCartIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
