function addProduct(product) {
  return {
    type: "ADD_PRODUCT",
    payload: product,
  };
}

function removeProduct(product) {
  return {
    type: "REMOVE_PRODUCT",
    payload: product,
  };
}

function restartCart(cart) {
  return {
    type: "RESTART_CART",
    payload: cart,
  };
}

export { addProduct, removeProduct, restartCart };
