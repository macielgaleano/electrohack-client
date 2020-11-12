import React from "react";
import Categories from "./Categories";
export default function CategoryPage() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Categories />
          </div>
          <div className="col-md-10">
            <img
              src="https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
