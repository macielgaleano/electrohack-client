import React from "react";
// import LoginRegister from "./components/loginRegister/LoginRegister";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./app/components/Routers/PrivateRoute";
import PublicRoute from "./app/components/Routers/PublicRoute";
import Login from "./app/components/Login/Login";
import Register from "./app/components/Register/Register";
import Home from "./app/components/Home/Home";
import CartPage from "./app/components/Cart/CartPage";
import CategoryPage from "./app/components/Category/CategoryPage";
import BrandsPage from "./app/components/Brands/BrandsPage";
import OneBrandPage from "./app/components/Brand/OneBrandPage";
import OneCategoryPage from "./app/components/CategoryProducts/OneCategoryPage";
import EditPage from "./app/components/Edit/EditPage";
import OneProductPage from "./app/components/Product/OneProductPage";
import UserOrders from "./app/components/UserOrders";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PublicRoute restricted={false} exact path="/login" component={Login} />
          <PrivateRoute
            restricted={false}
            exact
            path="/usuarios/cuenta"
            component={EditPage}
          />
          <PublicRoute restricted={false} exact path="/carrito" component={CartPage} />

          <PublicRoute restricted={false} exact path="/registro" component={Register} />
          <PublicRoute
            restricted={false}
            exact
            path="/productos/categorias"
            component={CategoryPage}
          />
          <PublicRoute restricted={false} exact path="/" component={Home} />
          <PublicRoute
            restricted={false}
            exact
            path="/productos/marcas"
            component={BrandsPage}
          />
          <PublicRoute
            restricted={false}
            exact
            path="/productos/marcas/:brand"
            component={OneBrandPage}
          />
          <PublicRoute
            restricted={false}
            exact
            path="/productos/categorias/:category"
            component={OneCategoryPage}
          />
          <PublicRoute
            restricted={false}
            exact
            path="/productos/:slug"
            component={OneProductPage}
          />

          <PrivateRoute restricted={true} exact path="/ordenes" component={UserOrders} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
