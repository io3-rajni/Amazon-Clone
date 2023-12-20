import React, { useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import CloseIcon from "@mui/icons-material/Close";
import { GiftCardData, Recharge } from "../DataConfig";
import { Typography } from "@mui/material";
import CollapseButton from "../CollapseButton";
const RightSideDrawer = (props) => {
  const { openRightSideDrawer, setOpenRightSideDrawer } = props;

  // console.log("show", showAll);
  const handleClose = () => {
    setOpenRightSideDrawer(false);
  };

  const heading = {
    display: "flex",
    justifyContent: "space-around",
    fontWeight: 800,
  };
  // const handleClose=()=>{

  // }
  // console.log("map", SideBarTrendingData);
  const list = (anchor) => {
    console.log("anchor", anchor);
    return (
      <Box
        // onClick={handleClose}
        sx={{
          width: anchor === "top" || anchor === "bottom" ? "auto" : 350,
          padding: "0px",
        }}
        role="presentation"

        //   onKeyDown={toggleDrawer(anchor, false)}
      >
        <Typography variant="h6" sx={heading}>
          <ListItemIcon>
            <ArrowBackIcon onClick={handleClose} />
          </ListItemIcon>
          Main Menu
        </Typography>
        <Divider />
        <Typography variant="h6" sx={heading}>
          {/* <ArrowBackIcon onClick={handleClose} /> */}
          Gift Card
        </Typography>

        <List>
          {GiftCardData?.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text?.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* ShowData */}

        <Divider />
        <List>
          {Recharge?.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text?.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };

  return (
    <>
      <React.Fragment>
        {/* <Button onClick={printName}>Button</Button> */}
        {/* <Button onClick={handleOpenSideDrawer} /> */}
        <SwipeableDrawer
          anchor="left"
          open={openRightSideDrawer}
          onClose={handleClose}
          // onOpen={handleOpenSideDrawer}
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </>
  );
};
export default RightSideDrawer;
