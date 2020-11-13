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

export { addProduct, removeProduct };
