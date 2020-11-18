import React from "react";
import Brands from "./Brands";
import "./BrandsPage.css";
import FixedCart from "../Home/FixedCart";
export default function BrandsPage() {
  return (
    <>
      {/* <FixedCart></FixedCart> */}
      <div className="container pt-5 mt-5">
        <div className="row">
          <div className="col-md-3">
            <Brands />
          </div>
          <div className="col-md-9">
            <img
              className="imgMarcas"
              src="https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
