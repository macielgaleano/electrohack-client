import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionListProducts } from "../../Redux/actions/actionListProducts";
import Product from "./Product";

const ListOfProducts = () => {
  const [products, setProducts] = useState();
  let listProducts = useSelector((state) => state);

  useEffect(() => {
    fetch("http://localhost:8000/productos")
      .then((data) => data.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  // useDispatch(actionListProducts(products));

  return (
    <div className="container-fluid">
      <div className="row d-flex">
        {products &&
          products.map((item) => {
            return <Product item={item}></Product>;
          })}
      </div>
    </div>
  );
};

export default ListOfProducts;
