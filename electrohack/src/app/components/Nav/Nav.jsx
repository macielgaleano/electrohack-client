import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ListIcon from "@material-ui/icons/List";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "bootstrap/dist/css/bootstrap.min.css";
import { navStyles } from "./navStyles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionLogout } from "../../Redux/actions/actionLoggout";
import axios from "axios";

const useStyles = navStyles;

export default function Nav(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function isEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }

    return true;
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  let user = useSelector((state) => state.user);

  const loggout = () => {
    axios.patch("https://electrohack-server.vercel.app/logout", {
      email: user.user.email,
    });
    dispatch(actionLogout());
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <h5 className="text-center pt-2 mb-3">
        {!isEmpty(user) &&
          user.user.firstname !== undefined &&
          user.user.firstname + " " + user.user.lastname}
      </h5>
      <MenuItem>
        {!useSelector((state) => state.user.token) && (
          <Link to="/login" className="text-dark">
            {" "}
            <ExitToAppIcon className="mr-2" />
            Iniciar sesión
          </Link>
        )}
      </MenuItem>
      <MenuItem>
        {useSelector((state) => state.user.token) && (
          <Link to="/usuarios/cuenta" className="text-dark">
            {" "}
            <SettingsIcon className="mr-2" />
            Configuración
          </Link>
        )}
      </MenuItem>
      <MenuItem>
        {useSelector((state) => state.user.token) && (
          <Link to="/ordenes" className="text-dark">
            <AccountBalanceWalletIcon className="mr-2" />
            Órdenes
          </Link>
        )}
      </MenuItem>
      <MenuItem>
        <Link to="/carrito" className="text-dark">
          {" "}
          <ShoppingCartIcon className="mr-2" />
          Carro de compras
        </Link>
      </MenuItem>
      <MenuItem>
        {useSelector((state) => state.user.token) && (
          <Link to="/" onClick={loggout} className="text-dark">
            {" "}
            <ExitToAppIcon className="mr-2" />
            Cerrar sesión
          </Link>
        )}
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {!useSelector((state) => state.user.token) && (
        <MenuItem>
          <p>
            <Link to="/login">Iniciar sesión</Link>
          </p>
        </MenuItem>
      )}
      <MenuItem>
        <p>
          {" "}
          <Link to="/carrito" className="text-dark">
            Carro de compras
          </Link>
        </p>
      </MenuItem>
      {useSelector((state) => state.user.token) && (
        <div>
          <MenuItem className="d-flex align-items-center justify-contentent-center">
            <p>
              {" "}
              <Link className="text-dark" to="/ordenes">
                Órdenes
              </Link>
            </p>
          </MenuItem>

          <MenuItem onClick={handleProfileMenuOpen}>
            <p>
              {" "}
              <Link className="text-dark" to="/usuarios/cuenta">
                Configuración
              </Link>
            </p>
          </MenuItem>
          <MenuItem onClick={handleProfileMenuOpen}>
            <p>
              {" "}
              <Link className="text-dark" onClick={loggout} to="/">
                Cerrar sesión
              </Link>
            </p>
          </MenuItem>
        </div>
      )}
    </Menu>
  );

  return (
    <div>
      <div className={classes.nav}>
        <AppBar position="fixed" className={classes.nav} id="back-to-top-anchor">
          <Toolbar>
            <Link to="/" className="text-white">
              <Typography className={classes.title} variant="h5" noWrap>
                ELECTROHACK
              </Typography>
            </Link>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Buscar..."
                classes={{
                  mr5: classes.mr5,
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <Link to="/productos/categorias" className="text-white mr-1">
              <Typography className={classes.title} variant="subtitle1" noWrap>
                Categorías /
              </Typography>
            </Link>
            <Link to="/productos/marcas" className="text-white mr-4">
              <Typography className={classes.title} variant="subtitle1" noWrap>
                Marcas
              </Typography>
            </Link>
            <div className={classes.grow} />

            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge
                badgeContent={useSelector((state) => state.cart.length)}
                color="secondary"
              >
                <Link
                  to="/carrito"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  <ShoppingCartIcon />
                </Link>
              </Badge>
            </IconButton>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Link to="/" className="text-white" style={{ textDecoration: "none" }}>
                <HomeIcon />
              </Link>
            </IconButton>

            <div className={classes.sectionDesktop}>
              <IconButton
                aria-label="show 17 new notifications"
                spacing={3}
                color="inherit"
              >
                <Badge color="secondary">
                  <Link
                    to="/ordenes"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    <ListIcon />
                  </Link>
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
            <div className="ml-2 username-nav">
              <Typography className={classes.title} variant="subtitle1" noWrap>
                {!isEmpty(user) &&
                  user.user.firstname !== undefined &&
                  user.user.firstname + " " + user.user.lastname}
              </Typography>
            </div>
          </Toolbar>
        </AppBar>

        {renderMobileMenu}
        {renderMenu}
      </div>
      <Link
        to="/sobre-nosotros"
        style={{
          position: "fixed",
          bottom: "20px",
          left: "10px",
          zIndex: 1000000,
        }}
        className="btn btn-primary"
      >
        Sobre Nosotros
      </Link>
    </div>
  );
}
