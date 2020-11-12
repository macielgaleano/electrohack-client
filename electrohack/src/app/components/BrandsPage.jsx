import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListOfProducts from "./Home/ListOfProducts";
import Product from "./Home/Product";
import { Link } from "react-router-dom";

//MUESTRA LISTADO DE MARCAS

export default function BrandsPage({}) {
  const [brand, setBrand] = useState();
  useEffect(() => {
    fetch(`https://electrohack-server.vercel.app/productos/${brand}`)
      .then((data) => data.json())
      .then((data) => {
        setBrand(data);
      });
  }, []);
  return (
    <div>
      <ul>
        {brand &&
          brand.map((item) => {
            return (
              <li>
                <Link>{item.brand}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
