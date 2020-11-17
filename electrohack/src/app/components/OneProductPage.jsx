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
import Carousel from "react-bootstrap/Carousel";

const OneProduct = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://electrohack-server.vercel.app/productos/${slug}`)
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
                      <div className="col-md-12 " key={index}>
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
                      <h1 className="col-12 mt-5">Fotos del producto </h1>
                      <div className="col-md-6 mt-5 mx-auto" style={{ height: 700 }}>
                        <Carousel>
                          {productSlug &&
                            productSlug[0].pictures.map((item, index) => {
                              return (
                                <Carousel.Item>
                                  <img
                                    className="d-block w-100"
                                    src={item}
                                    alt="First slide"
                                  />
                                </Carousel.Item>
                              );
                            })}
                        </Carousel>
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
