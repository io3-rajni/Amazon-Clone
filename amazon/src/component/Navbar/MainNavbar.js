import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Navlogo from "../../assets/ama.png";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./mainnavbar.css";
import { TextField } from "@mui/material";
import DropdownButton from "./DropdownButton";
import AccountList from "./AccountList";
const Search = styled("div")(({ theme }) => ({
  // position: "relative",
  borderRadius: theme.shape.borderRadius,
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  // "&:hover": {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  // marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const MainNavbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }} class="main-nav">
      <AppBar position="static" sx={{ background: "#000" }}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, background: "#fff" }}
          > */}
          {/* <MenuIcon /> */}
          {/* </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <img src={Navlogo} alt="amazon logo" class="amazone-img" />
          </Typography>
          <Typography>
            <Typography className="deliveryAndupdate">
              {/* <FmdGoodOutlinedIcon /> */}
              <Typography
                variant="h6"
                component="span"
                sx={{ display: { xs: "none", sm: "block", fontSize: "13px" } }}
                className="delivery-add"
              >
                Delivering to Ludhiana 141016
              </Typography>
              <Typography
                component="div"
                sx={{ display: "flex", marginTop: "8px" }}
              >
                <Typography component="div">
                  <FmdGoodOutlinedIcon />
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    display: {
                      xs: "none",
                      sm: "block",
                      fontSize: "13px",
                      fontWeight: "900",
                    },
                  }}
                  className="update-location"
                >
                  Updated Location
                </Typography>
              </Typography>
            </Typography>
          </Typography>

          <Typography
            component="div"
            background="#fff"
            border="2px solid orange"
            height="44px"
            sx={{
              border: "1px solid black",
              background: "#fff",
              marginLeft: "22px",
              width: "46%",
              borderRadius: "6px",
            }}
            display="flex"
            className="amazone-search"
          >
            <DropdownButton />
            <Typography variant="h6" component="div" display="flex">
              <TextField
                placeholder="search here"
                sx={{ width: "34.3rem", height: "1rem" }}
              />
              <Typography
                sx={{
                  color: "#000",
                  background: "orange",
                  padding: "9px 0px 2px 6px",
                }}
                borderRadius="0px 6px 6px 0px"
                component="div"
              >
                <SearchIcon />
              </Typography>
            </Typography>
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              width: " 31%",
            }}
          >
            <AccountList />
            <Box
              sx={{
                marginTop: "6px",
                width: "5rem",
                // border: "1px solid white",
              }}
              className="returnOrder"
            >
              <Typography sx={{ fontSize: "13px" }}>Returns</Typography>
              <Typography sx={{ fontWeight: "700" }}>& Order</Typography>
            </Box>
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",

                  marginTop: "6px",
                },
              }}
              className="cartIcon"
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: "36px" }} />
              <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
                Cart
              </Typography>
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};
export default MainNavbar;
