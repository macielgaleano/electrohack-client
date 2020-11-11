export const actionListProducts = (data) => {
  return {
    type: "LIST_PRODUCTS",
    payload: { data: data },
  };
};
