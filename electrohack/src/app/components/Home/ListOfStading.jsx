import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "./home.css";
import { Link } from "react-router-dom";

const ListOfStading = () => {
  const [products, setProducts] = useState(false);

  // let listProducts = useSelector((state) => state);

  useEffect(() => {
    fetch("https://electrohack-server.vercel.app/productos/?stading=true")
      .then((data) => data.json())
      .then((data) => {
        !products && setProducts(data);
      });
  });
  return (
    <div className="container mt-5 mb-5">
      <div className="row mt-5">
        <h3 className="mt-5 col-12 text-center mb-3">Nuestros productos destacados</h3>
        <div className="col-md-6 col-sm-12 col-12 mt-5">
          <Carousel>
            {products &&
              products.map((item, index) => {
                return (
                  <Carousel.Item interval={3000} key={index}>
                    <Link to={`/productos/${item.slug}`}>
                      <img
                        className="d-block w-100 image_carrousel img-fluid "
                        src={item.pictures[0]}
                        alt="First slide"
                      />
                    </Link>
                  </Carousel.Item>
                );
              })}
          </Carousel>
        </div>
        <div className="col-md-6 col-sm-12 col-12 mt-5">
          <Carousel>
            {products &&
              products.map((item, index) => {
                return (
                  <Carousel.Item interval={2000} key={index}>
                    <Link to={`/productos/${item.slug}`}>
                      <img
                        className="d-block w-100 image_carrousel img-fluid "
                        src={item.pictures[0]}
                        alt="First slide"
                      />
                    </Link>
                  </Carousel.Item>
                );
              })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ListOfStading;
