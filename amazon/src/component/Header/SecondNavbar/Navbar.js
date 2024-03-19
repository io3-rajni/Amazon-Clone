import * as React from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "../../Header/Navbar/mainnavbar.css";
import { NavlinkData } from "../../DataConfig";
import shoppingEsay from "../../../assets/shopping esay.jpg";
import SideBar from "../../CommonComponent/SideDrawer/SideBar";
import { useNavigate } from "react-router-dom";

const preventDefault = (event) => event.preventDefault();
const Navbar = () => {
  const [openSideBar, setOpenSideBar] = React.useState(false);
  const navigate = useNavigate();
  const handleProductApi = (index) => {
    if (index === 1 || index === 2 || index === 10) {
      console.log("Carousel", index);
      navigate("/CausalWearApi");
    } else {
      navigate("/ProductComponent");
      console.log("error");
    }
    // console.log("rajni");
  };
  const handleAll = () => {
    setOpenSideBar(true);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#203040",
        }}
        onClick={preventDefault}
      >
        <IconButton sx={{ ml: 1, color: "#fff", p: 0.1 }} className="menuIcon">
          <MenuIcon />
          <Typography
            onClick={handleAll}
            component="span"
            sx={{ lineHeight: 1, fontSize: "13px" }}
          >
            All
          </Typography>
        </IconButton>
        {NavlinkData?.map((item, i) => {
          console.log("config index", i);
          return (
            <>
              {item?.btn ? (
                <Tooltip title="Add" arrow key={i}>
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
                  key={i}
                  sx={{
                    textTransform: "none",
                    fontSize: "15px",
                    p: "9px",
                    color: "#fff",
                    fontSize: "13px",
                  }}
                  onClick={() => handleProductApi(i)}
                >
                  {item?.title}
                </Button>
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

      {openSideBar && (
        <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      )}
    </>
  );
};
export default Navbar;
