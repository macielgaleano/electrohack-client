import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import FixedCart from "../Home/FixedCart";

//MUESTRA LISTADO DE MARCAS

export default function Brands() {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch(`https://electrohack-server.vercel.app/productos/${brands}`)
      .then((data) => data.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);
  let brands_aux = [];
  for (let g = 0; g < brands.length; g++) {
    brands_aux.push(brands[g].brand);
  }

  function removeDups(names) {
    let unique = {};
    names.forEach(function (i) {
      if (!unique[i]) {
        unique[i] = true;
      }
    });
    return Object.keys(unique);
  }

  brands_aux = removeDups(brands_aux);

  return (
    <div>
      <Nav />

      {brands_aux &&
        brands_aux.map((item, index) => {
          return (
            <p key={index}>
              <Link
                to={`/productos/marcas/${item}`}
                style={{
                  textDecoration: "none",
                  fontSize: "25px",
                }}
              >
                {item}{" "}
              </Link>
            </p>
          );
        })}
    </div>
  );
}
