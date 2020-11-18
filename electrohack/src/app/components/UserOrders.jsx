import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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
        <h2 className="text-center">Mis órdenes</h2>
        <p className="mt-3 pt-3">
          <strong>Nombre:</strong> {store.user.user.firstname}{" "}
          {store.user.user.lastname}
        </p>

        {orders.map((order) => {
          return (
            <div>
              {order.products.map((product) => {
                console.log("multip", product.quantity * product.price);
                return (
                  <p>
                    <strong>Producto:</strong> {product.name}
                    <strong>Cantidad:</strong> {product.quantity}
                  </p>
                );
              })}
              <p>
                <strong>TOTAL:</strong> {}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
