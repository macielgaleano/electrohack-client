import React from "react";
import Brands from "./Brands";
import "./BrandsPage.css";
import FixedCart from "../Home/FixedCart";
export default function BrandsPage() {
  return (
    <>
      {/* <FixedCart></FixedCart> */}
      <div className="container">
        <h2 className="text-center pb-5">Marcas</h2>
        <div className="row">
          <div className="col-md-6">
            <Brands />
          </div>
          <div className="col-md-6">
            <img
              className="imgMarcas"
              src="https://images.unsplash.com/photo-1590795769046-b197fb723a22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
