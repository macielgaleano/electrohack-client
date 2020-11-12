import React, { useState, useEffect } from "react";

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
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide mt-5 "
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          {products &&
            products.map((item, index) => {
              return (
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to={index}
                  key={index}
                ></li>
              );
            })}
        </ol>
        {/* <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="..." className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="..." className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="..." className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a> */}
      </div>
    </div>
  );
};

export default ListOfStading;
