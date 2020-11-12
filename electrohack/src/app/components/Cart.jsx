import React from "react";
import CartItem from "./CartItem";

import "./CartPage.css";
import { useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-lg-8 d-flex justify-content-center align-items-center">
          Producto
        </div>
        <div className="col-lg-2 d-flex justify-content-center align-items-center">
          Cantidad
        </div>
        <div className="col-lg-1 d-flex justify-content-center align-items-center">
          Precio unitario
        </div>
        <div className="col-lg-1 d-flex justify-content-center align-items-center">
          Precio total
        </div>
      </div>
      {cart &&
        cart.map((item) => {
          return <CartItem key={item.name} item={item} />;
        })}
    </div>
  );
}
