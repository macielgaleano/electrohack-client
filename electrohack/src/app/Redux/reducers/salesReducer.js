function salesReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      console.log(action.payload);
      return state + action.payload;

    case "DECREMENT":
      return state - action.payload;

    case "RESTART_TOTAL":
      return 0;

    default:
      return state;
  }
}

export default salesReducer;
