import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { green } from "@material-ui/core/colors";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

export default function OneCategory({ category }) {
  return (
    <>
      <div className="col-sm-6 col-12 col-md-3">
        <div className="card text-white mt-3 mb-4">
          <Link to={`/productos/${category.slug}`}>
            {" "}
            <img
              className="card-img-top img-fluid image"
              src={category.pictures[0]}
              alt=""
            />{" "}
          </Link>
          <div className="card-body d-flex justify-content-between align-items-start">
            <div className="d-flex flex-column justify-content-end align-items-end">
              <Link to={`/productos/${category.slug}`}>
                <h4 className="lead text-dark name">
                  {category.name} - <strong>{category.brand}</strong>
                </h4>
              </Link>
            </div>
            <div className="d-flex flex-column justify-content-end align-items-end">
              <p className="price text-dark ml-3"> ${category.price}</p>
              <div>
                <ShoppingCartIcon
                  style={{ color: green[500], fontSize: "40px" }}
                ></ShoppingCartIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
