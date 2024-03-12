import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

const CountryButton = (props) => {
  const [apiData, setApiData] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { className } = props;
  // const [countryData, setCountryData] = useState(anchorEl);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setApiData(response?.data);
        console.log("res", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "white", textTransform: "capitalize" }}
        // className="countryDropdown"
        className={className}
      >
        Country
        {/* {countryData} */}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {apiData.map((item, index) => {
          // console.log("item in menu", item);
          return (
            <MenuItem onClick={handleClose} sx={{ width: "9.8rem" }}>
              {/* <Typography onChange={handleData}> */}
              <img
                src={item?.flags?.svg}
                style={{ height: "12px", width: "14px" }}
              />
              {item?.name?.common}
              {/* </Typography> */}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default CountryButton;
