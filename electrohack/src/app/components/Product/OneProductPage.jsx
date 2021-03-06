import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../Nav/Nav";
import { green } from "@material-ui/core/colors";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/actions/actionsCart";
import "./OneProduct.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import FixedCart from "../../components/Home/FixedCart";
import { increment } from "../../Redux/actions/actionsSales";
import Carousel from "react-bootstrap/Carousel";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

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
      {/* <FixedCart></FixedCart> */}

      <div
        className="container mt-5 pt-5"
        style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: "400px" }}
      >
        <div>
          <Link to="/" name="" id="" className="text-secondary mb-5">
            <ArrowBackIcon></ArrowBackIcon>Volver al inicio
          </Link>
          <div className="">
            {productSlug &&
              productSlug.map((product, index) => {
                return (
                  <div key={index}>
                    <div className="row mt-5">
                      <div className="col-md-8 mt-5 mx-auto col-11 col-sm-11">
                        <img src={product.pictures[0]} alt="" />
                      </div>
                      <div
                        className="col-md-4 mt-5 col-11 col-sm-11 mx-auto "
                        key={index}
                      >
                        <h1>{product.name}</h1>
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
                          <Button
                            onClick={() => {
                              dispatch(addProduct(product));
                              dispatch(increment(product.price));
                            }}
                            variant="contained"
                            color="secondary"
                          >
                            Comprar
                            <ShoppingCartIcon
                              style={{ color: green[5000], fontSize: "17px" }}
                            />
                          </Button>
                        </div>
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
