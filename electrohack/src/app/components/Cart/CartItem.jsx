import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import "./CartPage.css";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../Redux/actions/actionsCart";
import { increment, decrement } from "../../Redux/actions/actionsSales";
import { Link } from "react-router-dom";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  if (item.cuantity < 1) {
    return <></>;
  } else {
    return (
      <div className="box-item mt-4">
        <div className="row">
          <div className="col-lg-2">
            <div className="box-image m-3">
              <img className="img-fluid" src={item.pictures[0]} alt="FOTO" />
            </div>
          </div>
          <div className="col-lg-6">
            <h3>
              <Link to={`/productos/${item.slug}`}>{item.name}</Link>
            </h3>
            <p>{item.brand}</p>
            <p>{item.description}</p>
          </div>
          <div className="col-lg-2 d-flex justify-content-center align-items-center">
            <RemoveCircleIcon
              onClick={() => {
                dispatch(removeProduct(item));
                dispatch(decrement(item.price));
              }}
            />
            <span className="m-2">{item.cuantity}</span>
            <AddCircleIcon
              onClick={() => {
                dispatch(addProduct(item));
                dispatch(increment(item.price));
              }}
            />
          </div>
          <div className="col-lg-1 d-flex justify-content-center align-items-center">
            $ {Math.round(item.price)}
          </div>
          <div className="col-lg-1 d-flex justify-content-center align-items-center">
            $ {Math.round(Math.round(item.price) * item.cuantity)}
          </div>
        </div>
      </div>
    );
  }
}
