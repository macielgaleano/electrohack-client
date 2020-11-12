import React from "react";
import Categories from "./Categories";
import Nav from "./Nav/Nav";
export default function CategoryPage() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Categories />
          </div>
          <div className="col-md-10">
            <div className="image">
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
