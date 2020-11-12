import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { green } from "@material-ui/core/colors";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useParams } from "react-router-dom";

export default function OneBrand({}) {
  const { brand } = useParams();
  console.log("brand", brand);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://electrohack-server.vercel.app/productos/${brand}`)
      .then((data) => data.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return <p>ACA VIENEN LOS PRODUCTOS POR MARCA</p>;
}

/* <div className="col-3">
      <div class="card text-white mt-3 mb-4">
        <img class="card-img-top img-fluid image" src={} alt="" />
        <div class="card-body d-flex justify-content-between align-items-start">
          <div className="d-flex flex-column justify-content-end align-items-end">
            <h4 class="lead text-dark name">{brand.item.name}</h4>
          </div>
          <div className="d-flex flex-column justify-content-end align-items-end">
            <p className="price text-dark ml-3"> ${item.price}</p>
            <div>
              <ShoppingCartIcon
                style={{ color: green[500], fontSize: "40px" }}
              ></ShoppingCartIcon>
            </div>
          </div>
        </div>
      </div>
    </div> */
