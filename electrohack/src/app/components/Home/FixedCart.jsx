import React from "react";
import "./fixedCart.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../Redux/actions/actionsCart";

const FixedCart = () => {
  const dispatch = useDispatch();
  let cart = useSelector((state) => state.cart);

  return (
    cart.length > 0 && (
      <div className="mx-auto d-flex justify-content-center">
        <div className="container cart  ">
          <h5 className="text-center mb-1  ">Tu carrito de compras</h5>
          <div className="row mx-auto d-flex align-items-center">
            <div className="col-10 bg-white p-0  mx-auto d-flex">
              {cart &&
                cart.map((item, index) => {
                  if (index < 4) {
                    return (
                      <div className="col-3" key={index}>
                        <ul className="list-group list-group-flush text-dark p-2 ">
                          <li className="list-group-item" key={index}>
                            {item.name.slice(0, 20)}
                            <br></br>
                            <h4 className="mt-4">
                              ${Math.round(item.cuantity * item.price)}
                            </h4>
                            {}
                            <RemoveCircleIcon
                              onClick={() => dispatch(removeProduct(item))}
                            />
                            <span className="m-2">{item.cuantity}</span>
                            <AddCircleIcon onClick={() => dispatch(addProduct(item))} />
                          </li>{" "}
                        </ul>
                      </div>
                    );
                  }
                })}
            </div>
            <div className="col-2 ">
              <button
                className="btn btn-danger active border-rounded mb-2"
                style={{ width: "100%" }}
              >
                <Link style={{ textDecoration: "none", color: "white" }} to="/cart">
                  Carrito
                </Link>
              </button>
              <button className="btn btn-info active" style={{ width: "100%" }}>
                Pagar
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default FixedCart;
