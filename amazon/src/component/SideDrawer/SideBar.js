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
import "../Navbar/mainnavbar.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  SideBarTrendingData,
  DigitalContentDevices,
  ShopByCategory,
  ProgramFeatures,
  helpSetting,
  ProgramFeaturesMoreData,
  ShopCategoryMoreData,
} from "../DataConfig";
import { Typography } from "@mui/material";
import CollapseButton from "../CollapseButton";
import RightSideDrawer from "././RightSideDrawer";

const SideBar = (props) => {
  const { openSideBar, setOpenSideBar } = props;
  const [openRightSideDrawer, setOpenRightSideDrawer] = useState(false);
  const { cardData, setCardData } = useState(false);
  const [DigitalContentData, setDigitalContentData] = useState("");
  const handleOpenSideDrawer = () => {
    setOpenSideBar(true);
  };
  console.log("setOpenSide", openSideBar);
  const handleClose = () => {
    setOpenSideBar(false);
  };

  const heading = {
    display: "flex",
    justifyContent: "space-around",
    fontWeight: 600,
    fontSize: "17px",
    letterSpacing: "0px",
  };

  const Product = {
    fontSize: "12px",
  };
  const handleRightSideDrawer = () => {
    setOpenRightSideDrawer(true);
  };
  console.log("map", SideBarTrendingData);

  const list = (anchor) => {
    // console.log("anchor", anchor);

    const handleCardData = () => {
      setCardData(true);
    };
    const handleIcon = (event, text) => {
      // event.preventDefault();
      setDigitalContentData(text.title);
    };
    console.log("icon", DigitalContentData);
    return (
      <Box
        sx={{
          width: anchor === "top" || anchor === "bottom" ? "auto" : 350,
          fontSize: "10px",
        }}
        role="presentation"
      >
        <Typography variant="h6" sx={heading}>
          Trending
        </Typography>

        <List>
          {SideBarTrendingData?.map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemText primary={text?.title} />
                {console.log("data rajni", text, "rajni2", index)}
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />
        {/* 2nd */}
        <Typography variant="h6" sx={heading}>
          Digital Content And Devices
        </Typography>
        <List sx={Product}>
          {DigitalContentDevices.map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={(event) => handleIcon(event, text)}>
                {/* <ListItemIcon /> */}
                <ListItemText primary={text?.title} />
                <KeyboardArrowRightIcon />
                {/* {console.log("Text", index)} */}
              </ListItemButton>
            </ListItem>
          ))}
          <CollapseButton collapseData={ShopCategoryMoreData} />
        </List>
        <Divider />

        {/* 3rd */}
        <Typography variant="h6" sx={heading}>
          Shop By Category
        </Typography>
        <List>
          {ShopByCategory.map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemText primary={text?.title} />
                <KeyboardArrowRightIcon />
                {console.log("Text", text)}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />

        {/* 4th */}

        <Divider />

        {/* 5th */}
        <Typography variant="h6" sx={heading}>
          Program & Features
        </Typography>
        <List>
          {ProgramFeatures.map((text, index) => (
            <ListItem key={index} disablePadding>
              {text?.btn === true ? (
                <ListItemButton onClick={handleRightSideDrawer}>
                  <ListItemText primary={text?.title} />
                  <ListItemIcon>
                    <KeyboardArrowRightIcon onClick={handleCardData} />
                  </ListItemIcon>
                  {cardData}
                </ListItemButton>
              ) : (
                <ListItemButton>
                  {/* <ListItemIcon /> */}
                  <ListItemText primary={text?.title} />
                </ListItemButton>
              )}
            </ListItem>
          ))}
          <CollapseButton collapseData={ProgramFeaturesMoreData} />
        </List>

        <Divider />

        {/* 6th */}
        <Typography variant="h6" sx={heading}>
          Helps & Setting
        </Typography>
        <List>
          {helpSetting.map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                {/* <Typography>
                  <ListItemIcon />
                </Typography> */}
                <ListItemText primary={text?.title} />

                {console.log("Text", text)}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };

  return (
    <>
      <Button onClick={handleOpenSideDrawer} />
      <SwipeableDrawer
        anchor="left"
        open={openSideBar}
        onClose={handleClose}
        // onOpen={handleOpenSideDrawer}
        // allowSwipeInChildren={true}
        // swipeAreaWidth={20}
      >
        {list()}
      </SwipeableDrawer>
      <RightSideDrawer
        setOpenRightSideDrawer={setOpenRightSideDrawer}
        openRightSideDrawer={openRightSideDrawer}
        DigitalContentData={DigitalContentData}
      />
    </>
  );
};
export default SideBar;
