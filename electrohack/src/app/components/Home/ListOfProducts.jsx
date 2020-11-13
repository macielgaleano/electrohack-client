import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import Product from "./Product";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../Loading/Loading";

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
        !products && setProducts(data);
      });
  });

  let getData = () => {
    setProducts([...products, ...products]);
  };

  // useDispatch(actionListProducts(products));
  return (
    <div className="container ">
      <InfiniteScroll
        dataLength={products}
        next={getData}
        hasMore={true}
        loader={<Loading></Loading>}
      >
        <div className="row mt-5">
          {products &&
            products.map((item, index) => <Product item={item} key={index}></Product>)}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ListOfProducts;
