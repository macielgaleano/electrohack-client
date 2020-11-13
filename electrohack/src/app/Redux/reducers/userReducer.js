function userReducer(state = {}, action) {
  switch (action.type) {
    case "REGISTER":
      return { ...action.payload.data };
    case "LOGOUT":
      return {};

    default:
      return state;
  }
}
export default userReducer;
