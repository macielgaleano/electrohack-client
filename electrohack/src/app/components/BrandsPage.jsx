import React from "react";
import Brands from "./Brands";

export default function BrandsPage() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Brands />
          </div>
          <div className="col-md-10">
            <img
              src="https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
