import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import Product from "./Product";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {},
}));

const ListOfProducts = () => {
  const classes = useStyles();
  const [products, setProducts] = useState(false);
  // let listProducts = useSelector((state) => state);

  useEffect(() => {
    fetch("https://electrohack-server.vercel.app/productos")
      .then((data) => data.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  // useDispatch(actionListProducts(products));

  return (
    <div className="container-fluid ">
      <div className="row mt-5">
        {products &&
          products.map((item) => <Product item={item} key={item._id}></Product>)}
      </div>
    </div>
  );
};

export default ListOfProducts;
