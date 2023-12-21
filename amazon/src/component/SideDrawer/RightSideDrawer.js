import React, { useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { GiftCardData, Recharge } from "../DataConfig";
import { Typography } from "@mui/material";
// import CollapseButton from "../CollapseButton";
const RightSideDrawer = (props) => {
  const { DigitalContentData, openRightSideDrawer, setOpenRightSideDrawer } =
    props;
  const handleClose = () => {
    setOpenRightSideDrawer(false);
  };
  const heading = {
    display: "flex",
    justifyContent: "space-around",
    fontWeight: 800,
  };
  const list = (anchor) => {
    console.log("anchor", anchor);
    return (
      <Box
        sx={{
          width: anchor === "top" || anchor === "bottom" ? "auto" : 350,
          padding: "0px",
        }}
        role="presentation"
      >
        <Typography variant="h6" sx={heading}>
          <ListItemIcon>
            <ArrowBackIcon onClick={handleClose} />
          </ListItemIcon>
          Main Menu
        </Typography>
        <Divider />
        <Typography variant="h6" sx={heading}>
          Gift Card
        </Typography>
        <List>
          {GiftCardData?.map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemText primary={text?.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {Recharge?.map((text, index) => (
            <ListItem key={index} disablePadding>
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
    // <>
    <React.Fragment>
      <SwipeableDrawer
        anchor="left"
        open={openRightSideDrawer}
        onClose={handleClose}
      >
        {list()}
      </SwipeableDrawer>
    </React.Fragment>
    // </>
  );
};
export default RightSideDrawer;
