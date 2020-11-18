import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import Nav from "../Nav/Nav";
import Product from "../Home/Product";
// import FixedCart from "../Home/FixedCart";

export default function OneCategoryPage() {
  const { category } = useParams();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`https://electrohack-server.vercel.app/productos/categorias/${category}`)
      .then((data) => data.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <>
      {/* <FixedCart></FixedCart> */}
      <Nav />
      <div className="container mt-4 pt-5">
        <h2 className="text-center">{category}</h2>
        <div className="row ">
          {categories &&
            categories.map((category) => {
              return <Product item={category} />;
            })}
        </div>
      </div>
    </>
  );
}
