import React from "react";
// import LoginRegister from "./components/loginRegister/LoginRegister";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./app/components/Routers/PrivateRoute";
import PublicRoute from "./app/components/Routers/PublicRoute";
import Login from "./app/components/Login/Login";
import Register from "./app/components/Register/Register";
import Home from "./app/components/Home/Home";
import CartPage from "./app/components/Cart/CartPage";
import CategoryPage from "./app/components/CategoryPage";
import BrandsPage from "./app/components/BrandsPage";
import OneBrandPage from "./app/components/OneBrandPage";
import OneCategoryPage from "./app/components/OneCategoryPage";
import EditPage from "./app/components/Edit/EditPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PublicRoute
            restricted={false}
            exact
            path="/login"
            component={Login}
          ></PublicRoute>
          <PublicRoute
            restricted={false}
            exact
            path="/usuarios/cuenta"
            component={EditPage}
          ></PublicRoute>
          <PublicRoute
            restricted={false}
            exact
            path="/carrito"
            component={CartPage}
          ></PublicRoute>

          <PublicRoute
            restricted={false}
            exact
            path="/registro"
            component={Register}
          ></PublicRoute>
          <PublicRoute
            restricted={false}
            exact
            path="/productos/categorias"
            component={CategoryPage}
          ></PublicRoute>
          <PublicRoute
            restricted={false}
            exact
            path="/"
            component={Home}
          ></PublicRoute>
          <PublicRoute
            restricted={false}
            exact
            path="/productos/marcas"
            component={BrandsPage}
          ></PublicRoute>
          <PublicRoute
            restricted={false}
            exact
            path="/productos/marcas/:brand"
            component={OneBrandPage}
          ></PublicRoute>
          <PublicRoute
            restricted={false}
            exact
            path="/productos/categorias/:category"
            component={OneCategoryPage}
          ></PublicRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
