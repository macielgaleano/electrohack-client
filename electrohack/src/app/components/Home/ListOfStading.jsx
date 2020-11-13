import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

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
    <div className="container mt-5">
      <div className="row mt-5">
        <h3 className="mt-5 col-12 text-center mb-3">Nuestros productos destacados</h3>
        <div className="col-6 mt-5">
          <Carousel>
            {products &&
              products.map((item, index) => {
                return (
                  <Carousel.Item interval={1000}>
                    <img
                      className="d-block w-100 image_carrousel img-fluid "
                      src={item.pictures[0]}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3 className=" bg-dark">{item.name}</h3>
                      <p className=" bg-dark">{item.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
          </Carousel>
        </div>
        <div className="col-6 mt-5">
          <Carousel>
            {products &&
              products.map((item, index) => {
                return (
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-100 image_carrousel img-fluid "
                      src={item.pictures[0]}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3 className=" bg-dark">{item.name}</h3>
                      <p className=" bg-dark">{item.description}</p>
                    </Carousel.Caption>
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
