import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { green } from "@material-ui/core/colors";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/actions/actionsCart";
import { increment } from "../../Redux/actions/actionsSales";
import FixedCart from "../Home/FixedCart";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function OneCategory({ category }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="col-sm-6 col-12 col-md-3">
        <div className="card text-white mt-3 mb-4">
          <Link to={`/productos/${category.slug}`}>
            {" "}
            <img
              className="card-img-top img-fluid image"
              src={category.pictures[0]}
              alt=""
            />{" "}
          </Link>
          <div className="card-body d-flex justify-content-between align-items-start">
            <div className="d-flex flex-column justify-content-end align-items-end">
              <Link to={`/productos/${category.slug}`}>
                <h4 className="lead text-dark name">
                  {category.name} - <strong>{category.brand}</strong>
                </h4>
              </Link>
            </div>
            <div className="d-flex flex-column justify-content-end align-items-end">
              <p className="price text-dark ml-3"> ${category.price}</p>
              <div>
                <Button
                  onClick={() => {
                    dispatch(addProduct(category));
                    dispatch(increment(category.price));
                  }}
                  variant="contained"
                  color="secondary"
                >
                  Comprar
                  <ShoppingCartIcon
                    style={{ color: green[5000], fontSize: "17px" }}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
