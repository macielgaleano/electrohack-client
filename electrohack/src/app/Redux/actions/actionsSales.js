function increment(value) {
  return {
    type: "INCREMENT",
    payload: value,
  };
}

function decrement(value) {
  return {
    type: "DECREMENT",
    payload: value,
  };
}

export { increment, decrement };
