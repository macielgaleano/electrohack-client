import React from "react";
import CartItem from "./CartItem";
import "./CartPage.css";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./CartPage.css";
import axios from "axios";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const total = useSelector((state) => state.salesReducer);
  const history = useHistory();

  function sendOrder(order) {
    axios
      .post("https://electrohack-server.vercel.app/api/pedidos", {
        products: order,
      })
      .then((res) => {
        history.push("/saludos");
      });
  }

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
      <>
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
        <div className="pay-box">
          <h5>TOTAL DEL CARRITO</h5>
          <p>
            Total : $ <strong>{Math.round(total)}</strong>
          </p>
          <button
            onClick={() => sendOrder(cart)}
            className="btn btn-info active"
            style={{ width: "100%" }}
          >
            Pagar
          </button>
        </div>
      </>
    );
  }
}
