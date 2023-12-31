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
  const {
    subSideBarSubTitle,
    subSideBarData,
    openRightSideDrawer,
    setOpenRightSideDrawer,
    subSideBarTitle,
    subSideBarSubData,
    subSideBarSecondTitle,
    subSideBarSecondData,
    // subSideBarThirdTitle,
    // subSideBarThirdData,
    giftCardData,
    giftCardTitle,
  } = props;
  const handleClose = () => {
    setOpenRightSideDrawer(false);
  };
  const heading = {
    display: "flex",
    justifyContent: "space-around",
    fontWeight: 800,
  };
  console.log("subSideBarData", subSideBarData);
  const list = (anchor) => {
    console.log("data", subSideBarTitle);
    // console.log("anchor", anchor);
    return (
      <>
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
            {giftCardTitle}
          </Typography>
          <List>
            {giftCardData?.map((text, index) => (
              // return
              // index .btn ? (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text?.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Typography variant="h6" sx={heading}>
            {subSideBarTitle}
          </Typography>
          <List>
            {subSideBarData?.map((text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text?.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          {/* <Typography variant="h6" sx={heading}>
Recharge
</Typography> */}
          <Divider />
          <Typography variant="h6" sx={heading}>
            {subSideBarSubTitle}
          </Typography>
          <List>
            {subSideBarSubData?.map((text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text?.title} />
                </ListItemButton>
                <Divider />
              </ListItem>
            ))}
          </List>
          <Typography variant="h6" sx={heading}>
            {subSideBarSecondTitle}
          </Typography>
          <List>
            {subSideBarSecondData?.map((text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text?.title} />
                </ListItemButton>
                <Divider />
              </ListItem>
            ))}
          </List>
          {/* <Typography variant="h6" sx={heading}>
            {subSideBarThirdTitle}
          </Typography>
          <List>
            {subSideBarThirdData?.map((text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text?.title} />
                </ListItemButton>
                <Divider />
              </ListItem>
            ))}
          </List> */}
        </Box>
      </>
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
