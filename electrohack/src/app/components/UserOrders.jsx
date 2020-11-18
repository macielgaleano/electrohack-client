import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Nav from "./Nav/Nav";

export default function UserOrders() {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetch(`https://electrohack-server.vercel.app/api/pedidos`)
      .then((data) => data.json())
      .then((data) => {
        setOrder(data);
      });
  }, []);

  console.log("order", order);

  return (
    <>
      <Nav />
      <p className="mt-5 pt-5">HOLA</p>
    </>
  );
}
