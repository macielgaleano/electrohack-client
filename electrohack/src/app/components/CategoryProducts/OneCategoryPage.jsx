import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { green } from "@material-ui/core/colors";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useParams } from "react-router-dom";
import Nav from "../Nav/Nav";
import OneCategory from "./OneCategory";

export default function OneCategoryPage() {
  const { category } = useParams();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(
      `https://electrohack-server.vercel.app/productos/categorias/${category}`
    )
      .then((data) => data.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  console.log("category", category);
  console.log("categories", categories);
  console.log(
    `https://electrohack-server.vercel.app/productos/categorias/${category}`
  );

  return (
    <>
      <Nav />
      <div className="container mt-5 pt-5">
        <h2 className="text-center">{category}</h2>
        <div className="row ">
          {categories &&
            categories.map((category) => {
              return <OneCategory category={category} />;
            })}
        </div>
      </div>
    </>
  );
}
