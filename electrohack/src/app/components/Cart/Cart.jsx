import React from "react";
import CartItem from "./CartItem";
import "./CartPage.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./CartPage.css";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  if (cart.length === 0) {
    return (
      <div className="mt-5 pt-5 empty-cart">
        <h2 className="d-flex justify-content-center">
          Comienza a disfrutar de nuestras increibles ofertas
        </h2>
        <h2 className="mt-4 d-flex justify-content-center">
          Visita nuestra tienda
          <Link to="/" className="pl-2">
            AQUI
          </Link>
        </h2>
      </div>
    );
  } else {
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
}
