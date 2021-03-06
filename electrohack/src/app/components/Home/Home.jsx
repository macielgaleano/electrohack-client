import React from "react";
import ListOfProducts from "./ListOfProducts";
import ListOfStading from "./ListOfStading";
import Nav from "../Nav/Nav";
import ScrollTop from "../Nav/ScrollTop";
import Fab from "@material-ui/core/Fab";
import PropTypes from "prop-types";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import "bootstrap/dist/css/bootstrap.min.css";
import FixedCart from "./FixedCart";
import Poster from "./Poster";
import "./fixedCart.css";

const Home = (props) => {
  return (
    <div>
      <Nav className="mb-4"></Nav>
      <Poster></Poster>
      {/* <FixedCart></FixedCart> */}
      <ListOfStading className="destacados"></ListOfStading>
      <ListOfProducts></ListOfProducts>
      {/* <ScrollTop {...props}>
        <Fab
          color="primary"
          style={{ background: "#1D4E89" }}
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon style={{ background: "#1D4E89", color: "white" }} />
        </Fab>
      </ScrollTop> */}
    </div>
  );
};

export default Home;
