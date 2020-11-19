import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Order.css";
// import { Link } from "react-router-dom";
import Nav from "./Nav/Nav";

export default function UserOrders() {
  const store = useSelector((state) => state);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    store.user.token &&
      fetch(`https://electrohack-server.vercel.app/api/pedidos`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${store.user.token}`,
        },
      })
        .then((data) => data.json())
        .then((data) => {
          setOrders(data);
        });
  }, []);
  console.log("store user", store.user);
  console.log("order", orders);

  return (
    <>
      <Nav />

      <div className="container">
        <h2 className="text-center mb-3">Mis órdenes</h2>

        {orders.map((order) => {
          return (
            <div className="box">
              {order.products.map((product) => {
                console.log("multip", product.quantity * product.price);
                return (
                  <p>
                    <strong>Artículo:</strong> {product.name} -{" "}
                    <strong>Cantidad:</strong> {product.quantity}
                  </p>
                );
              })}
              <div className="row">
                <div className="col-md-6">
                  <p>
                    <strong>Estado de la orden: </strong>
                    {order.state}
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="d-flex justify-content-end pr-3">
                    <p>
                      <strong>TOTAL:</strong> ${Math.round(order.total)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
