import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://electrohack-server.vercel.app/productos/lista/categorias")
      .then((res) => {
        setCategories(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <>
      {categories &&
        categories.map((category, index) => {
          return (
            <p key={index}>
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "25px",
                }}
                to={`/productos/categorias/${category.name}`}
              >
                {category.name}
              </Link>
            </p>
          );
        })}
    </>
  );
}
