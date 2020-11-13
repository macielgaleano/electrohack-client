import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { green } from "@material-ui/core/colors";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./home.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/actions/actionsCart";

export default function Product({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="col-sm-6 col-12 col-md-3">
      <div className="card text-white mt-3 mb-4">
        <img className="card-img-top img-fluid image" src={item.pictures[0]} alt="" />
        <div className="card-body d-flex justify-content-between align-items-start">
          <div className="d-flex flex-column justify-content-end align-items-end">
            <h4 className="lead text-dark name">{item.name}</h4>
          </div>
          <div
            className="d-flex flex-column justify-content-start align-items-end"
            style={{ height: "120px" }}
          >
            <p className="price text-dark ml-3"> ${Math.round(item.price)}</p>
            <div>
              <ShoppingCartIcon
                style={{ color: green[500], fontSize: "40px" }}
                onClick={() => dispatch(addProduct(item))}
              ></ShoppingCartIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
