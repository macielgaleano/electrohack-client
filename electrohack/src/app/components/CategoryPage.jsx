import React from "react";
import Categories from "./Categories";
import Nav from "./Nav/Nav";
import "./CategoryPage.css";
export default function CategoryPage() {
  return (
    <>
      <Nav />
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-5">
            <Categories />
          </div>
          <div className="col-md-7">
            <div className="box-image">
              <img
                src="https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
