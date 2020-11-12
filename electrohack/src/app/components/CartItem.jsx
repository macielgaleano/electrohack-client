import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import "./CartPage.css";
import { useDispatch } from "react-redux";

export default function CartItem({ item }) {
  if (item.cuantity < 1) {
    return <></>;
  } else {
    return (
      <div className="box-item">
        <div className="row">
          <div className="col-lg-2">
            <div className="box-image m-3">
              <img className="img-fluid" src={item.pictures[0]} alt="FOTO" />
            </div>
          </div>
          <div className="col-lg-6">
            <h3>{item.name}</h3>
            <p>{item.brand}</p>
            <p>{item.description}</p>
          </div>
          <div className="col-lg-2 d-flex justify-content-center align-items-center">
            <RemoveCircleIcon />
            <span className="m-2">{item.cuantity}</span>
            <AddCircleIcon />
          </div>
          <div className="col-lg-1 d-flex justify-content-center align-items-center">
            $ {Math.round(item.price)}
          </div>
          <div className="col-lg-1 d-flex justify-content-center align-items-center">
            $ {Math.round(item.price * item.cuantity)}
          </div>
        </div>
      </div>
    );
  }
}
