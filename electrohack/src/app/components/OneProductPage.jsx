import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav/Nav";
import { green } from "@material-ui/core/colors";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/actions/actionsCart";
import "./OneProduct.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import FixedCart from "../components/Home/FixedCart";
import { increment } from "../Redux/actions/actionsSales";

const OneProduct = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/productos/${products}`)
      .then((data) => data.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const productSlug = products.filter((product) => product.slug === slug);

  return (
    <>
      <Nav />
      <FixedCart></FixedCart>

      <div
        className="container mt-5 pt-5"
        style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: "400px" }}
      >
        <div>
          <Link to="/" name="" id="" className="btn btn-info mb-3">
            <ArrowBackIcon></ArrowBackIcon>Volver al inicio
          </Link>
          <div className="box-product">
            {productSlug &&
              productSlug.map((product, index) => {
                return (
                  <div key={index}>
                    <h1>{product.name}</h1>
                    <div className="row">
                      <div className="col-md-8 " key={index}>
                        <p className="mt-2 pt-2">
                          <strong>Descripción:</strong> {product.description}
                        </p>

                        <p key={index}>
                          <strong>Marca: </strong>
                          <Link to={`/productos/marcas/${product.brand}`}>
                            {product.brand}
                          </Link>
                        </p>

                        <p className="mb-5">
                          <strong>Precio:</strong> ${product.price}
                        </p>
                        <div>
                          <ShoppingCartIcon
                            key={index}
                            style={{ color: green[500], fontSize: "40px" }}
                            onClick={() => {
                              dispatch(addProduct(product));
                              dispatch(increment(product.price));
                            }}
                          ></ShoppingCartIcon>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <img src={product.pictures[0]} alt="" />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OneProduct;
