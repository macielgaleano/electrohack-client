import React from "react";
import ListOfProducts from "./ListOfProducts";
import Nav from "../Nav/Nav";
import ScrollTop from "../Nav/ScrollTop";
import Fab from "@material-ui/core/Fab";
import PropTypes from "prop-types";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = (props) => {
  return (
    <div>
      <Nav className="mb-4"></Nav>
      <ListOfProducts></ListOfProducts>
      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default Home;
