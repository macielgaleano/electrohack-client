import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { green } from "@material-ui/core/colors";
import { addProduct } from "../../Redux/actions/actionsCart";
import { increment } from "../../Redux/actions/actionsSales";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function OneBrand({ brand }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="col-sm-6 col-12 col-md-3">
        <div className="card text-white mt-3 mb-4">
          <Link to={`/productos/${brand.slug}`}>
            <img
              className="card-img-top img-fluid image"
              src={brand.pictures[0]}
              alt=""
            />
          </Link>
          <div className="card-body d-flex justify-content-between align-items-start">
            <div className="d-flex flex-column justify-content-end align-items-end">
              <Link to={`/productos/${brand.slug}`}>
                <h4 className="lead text-dark name">{brand.name}</h4>
              </Link>
            </div>
            <div className="d-flex flex-column justify-content-end align-items-end">
              <p className="price text-dark ml-3"> ${brand.price}</p>
              <div>
                <Button
                  onClick={() => {
                    dispatch(addProduct(brand));
                    dispatch(increment(brand.price));
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
