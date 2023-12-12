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
import { NavlinkData } from "./NavlinkData";
const preventDefault = (event) => event.preventDefault();

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          // typography: "body1",
          // "& > :not(style) ~ :not(style)": {
          //   ml: 2,
          //   fontSize: "14px",
          //   marginLeft: "15px",
          // },
          display: "flex",
          backgroundColor: "#131921",
        }}
        onClick={preventDefault}
      >
        <Link href="#" underline="none" color="#fff">
          <IconButton
            // size="large"
            // edge="start"
            // color="inherit"
            // aria-label="menu"
            sx={{ ml: 3, color: "#fff", p: 0 }}
          >
            <MenuIcon />
            <Typography component="span" sx={{ m: 2, lineHeight: 0.5 }}>
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
                  <Link href="#" underline="none" color="#fff" sx={{ m: 0.8 }}>
                    {item?.title}
                    {/* {'color="inherit"'} */}
                  </Link>
                )}
              </>
            );
          })}
        </Link>
        {/* <Link href="#" underline="none" color="#fff" sx={{ m: 0.8 }}>
          Amazon miniTV
        </Link>
        <Link href="#" underline="none" color="#fff" sx={{ m: 0.8 }}>
          Sell
        </Link>
        <Link href="#" underline="none" color="#fff" sx={{ m: 0.8 }}>
          Best Sellers
        </Link>
        <Link href="#" underline="none" color="#fff" sx={{ m: 0.8 }}>
          Today's Deals
        </Link>
        <Link href="#" underline="none" color="#fff" sx={{ m: 0.8 }}>
          Mobiles
        </Link>
        <Link href="#" underline="none" color="#fff" sx={{ m: 0.8 }}>
          Customer Services
        </Link>
        <Link href="#" underline="none" color="#fff" sx={{ m: 0.8 }}>
          Electronic
        </Link>
        <Tooltip title="Add" arrow>
          <Button
            className="tooltips"
            sx={{ textTransform: "capitalize", color: "#fff" }}
          >
            Arrow <ArrowDropDownIcon />
          </Button>
        </Tooltip>
        <Link href="#" underline="none" color="#fff">
          New Released
        </Link>
        <Link href="#" underline="none" color="#fff">
          Home&Kitchen
        </Link>
        <Link href="#" underline="none" color="#fff">
          Gift Ideas
        </Link>
        <Link href="#" underline="none" color="#fff">
          Gift Ideas
        </Link>
        <Link
          href="#"
          underline="none"
          // color="#fff"
          ml=" 6"
          //              sx={{ , marginLeft: "67px", fontSize: "21px", color: "red" }}
        >
          Shopping made easy | Download the App
        </Link> */}
      </Box>
    </>
  );
};
export default Navbar;
