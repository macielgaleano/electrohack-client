import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { green } from "@material-ui/core/colors";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./home.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/actions/actionsCart";
import { Link } from "react-router-dom";
import { increment } from "../../Redux/actions/actionsSales";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Product({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="col-sm-6 col-12 col-md-3 ">
      <div className="card text-white mt-3 mb-4 d-flex flex-column">
        <Link to={`/productos/${item.slug}`}>
          <img
            className="card-img-top img-fluid image imgHome"
            src={item.pictures[0]}
            alt=""
          />
        </Link>
        <div className=" card-body card-body-home d-flex flex-column ">
          <div className="d-flex flex-column">
            <Link to={`/productos/${item.slug}`}>
              <h4 className="lead text-dark name">
                {item.name.length > 40
                  ? item.name.slice(0, 30) + "..."
                  : item.name}
              </h4>
            </Link>
          </div>
          <div
            className="d-flex flex-column justify-content-end"
            style={{ height: "120px" }}
          >
            <p className="price text-dark"> ${Math.round(item.price)}</p>
            <div>
              <Button
                onClick={() => {
                  dispatch(addProduct(item));
                  dispatch(increment(item.price));
                }}
                variant="contained"
                color="secondary"
              >
                Comprar
                <ShoppingCartIcon
                  style={{
                    color: green[5000],
                    fontSize: "18px",
                    marginRight: "5px",
                  }}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
