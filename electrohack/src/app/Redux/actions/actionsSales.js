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

function restartTotal() {
  return {
    type: "RESTART_TOTAL",
  };
}

export { increment, decrement, restartTotal };
