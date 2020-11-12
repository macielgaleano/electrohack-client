import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import "./CartPage.css";

export default function CartItem({ item }) {
  const [cuantity, setCuantity] = useState(1);
  if (cuantity < 1) {
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
            <RemoveCircleIcon
              onClick={() => {
                setCuantity((p) => p - 1);
              }}
            />
            <span className="m-2">{cuantity}</span>
            <AddCircleIcon
              onClick={() => {
                setCuantity((p) => p + 1);
              }}
            />
          </div>
          <div className="col-lg-1 d-flex justify-content-center align-items-center">
            {item.price}
          </div>
          <div className="col-lg-1 d-flex justify-content-center align-items-center">
            {item.price * cuantity}
          </div>
        </div>
      </div>
    );
  }
}
