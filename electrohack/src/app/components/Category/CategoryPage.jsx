import React from "react";
import Categories from "./Categories";
import Nav from "../Nav/Nav";
import "./CategoryPage.css";
import FixedCart from "../Home/FixedCart";

export default function CategoryPage() {
  return (
    <>
      <Nav />
      {/* <FixedCart></FixedCart> */}
      <div className="container">
        <h2 className="text-center pb-5">Categorías</h2>
        <div className="row" style={{ paddingBottom: "400px" }}>
          <div className="col-md-6 d-flex flex-column justify-content-center mb-4 alig-items-center">
            <Categories />
          </div>
          <div className="col-md-6">
            <div>
              <img
                className="box-image"
                src="https://images.unsplash.com/photo-1580897275296-87979517bd4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
