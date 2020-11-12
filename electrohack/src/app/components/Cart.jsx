import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import axios from "axios";
import "./CartPage.css";

export default function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("https://electrohack-server.vercel.app/productos").then((res) => {
      setItems(res.data);
    });
  }, []);

  return (
    <div className="container">
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
      {items &&
        items.map((item) => {
          return <CartItem item={item} />;
        })}
    </div>
  );
}
