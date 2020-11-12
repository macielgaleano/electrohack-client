import React from "react";
import ListOfProducts from "./ListOfProducts";
import Nav from "../Nav/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      <Nav className="mb-4"></Nav>
      <ListOfProducts></ListOfProducts>
    </div>
  );
};

export default Home;
