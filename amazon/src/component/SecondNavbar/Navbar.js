import * as React from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "../Navbar/mainnavbar.css";
import { NavlinkData } from "../DataConfig";
import shoppingEsay from "../../assets/shopping esay.jpg";
const preventDefault = (event) => event.preventDefault();

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#203040",
        }}
        onClick={preventDefault}
      >
        {/* <Link
          href="#"
          underline="none"
          color="#fff"
          backgroundColor="#203040"
          fontSize="14px"
        >
        </Link> */}

        <IconButton sx={{ ml: 1, color: "#fff", p: 0 }} className="menuIcon">
          <MenuIcon />
          <Typography
            component="span"
            sx={{ p: 1, lineHeight: 1, fontSize: "13px" }}
          >
            All
          </Typography>
        </IconButton>
        {NavlinkData?.map((item, i) => {
          return (
            <>
              {item?.btn ? (
                <Tooltip title="Add" arrow>
                  <Button
                    className="tooltips"
                    sx={{ textTransform: "capitalize", color: "#fff" }}
                  >
                    {item?.title} <ArrowDropDownIcon />
                  </Button>
                </Tooltip>
              ) : (
                <Button
                  className="services"
                  sx={{
                    textTransform: "none",
                    fontSize: "15px",
                    p: "9px",
                    color: "#fff",
                    fontSize: "13px",
                  }}
                >
                  {item?.title}
                </Button>
                // <Link
                //   href="#"
                //   underline="none"
                //   color="#fff"
                //   sx={{ p: 1.3, width: " 78%" }}
                //   className="services"
                // >
                //   {item?.title}
                // </Link>
              )}
            </>
          );
        })}
        <Typography
          component="div"
          sx={{ width: "2%", backgroundColor: "#203040" }}
        ></Typography>
        <img
          src={shoppingEsay}
          alt="image"
          sx={{ width: "21%" }}
          className="shoppingEasyLine"
        />
      </Box>
    </>
  );
};
export default Navbar;
