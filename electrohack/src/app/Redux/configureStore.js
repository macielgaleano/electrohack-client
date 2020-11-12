import { persistStore, persistReducer } from "redux-persist";
import { combineReducers, createStore, applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";
import logger from "redux-logger";
import user from "./reducers/userReducer";
import product from "./reducers/productReducer";
import cart from "./reducers/cartReducer";

const rootReducer = combineReducers({
  user,
  product,
  cart,
});

const persistConfig = {
  key: "root",
  storage,
};

const middleware = applyMiddleware(thunk, logger);

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer, middleware);
let persistor = persistStore(store);
export { store, persistor };
