import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

//MUESTRA LISTADO DE MARCAS

export default function Brands() {
  const [brand, setBrand] = useState([]);
  useEffect(() => {
    fetch(`https://electrohack-server.vercel.app/productos/${brand}`)
      .then((data) => data.json())
      .then((data) => {
        setBrand(data);
      });
  }, []);

  console.log(brand);

  return (
    <>
      {brand &&
        brand.map((item) => {
          return (
            <p>
              <Link to={`/productos/marcas/${item.brand}`}>{item.brand}</Link>
            </p>
          );
        })}
    </>
  );
}
