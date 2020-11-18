import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import Nav from "../Nav/Nav";
import OneBrand from "./OneBrand";
import FixedCart from "../Home/FixedCart";

export default function OneBrandPage() {
  const { brand } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://electrohack-server.vercel.app/productos/${products}`)
      .then((data) => data.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const brandProducts = products.filter((product) => product.brand === brand);
  return (
    <>
      <FixedCart></FixedCart>
      <Nav />

      <div className="container mt-5 pt-5">
        <h1 className="text-center">{brand}</h1>
        <div className="row mt-5">
          {brandProducts && brandProducts.map((brand) => <OneBrand brand={brand} />)}
        </div>
      </div>
    </>
  );
}
