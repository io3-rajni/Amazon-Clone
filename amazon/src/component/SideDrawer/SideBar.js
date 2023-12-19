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
import "./mainnavbar.css";
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
  // const [showAll, setAllData] = useState(false);
  // const [featureData, setFeatureData] = useState(false);
  const { openSideBar, setOpenSideBar } = props;
  const [rightDrawerData, setRightDrawerData] = useState(false);
  const handleOpenSideDrawer = () => {
    setOpenSideBar(true);
  };
  console.log("setOpenSide", openSideBar);

  // console.log("show", showAll);
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
  const handleRightData = () => {
    setRightDrawerData(true);
  };
  console.log("map", SideBarTrendingData);
  // const handleChildren = (e) => {
  //   console.log("ashu", e);
  //   setRightDrawerData(true);
  // };
  const list = (anchor) => {
    console.log("anchor", anchor);
    return (
      <Box
        // onClick={handleChildren}
        sx={{
          width: anchor === "top" || anchor === "bottom" ? "auto" : 350,
          padding: "0px",
        }}
        role="presentation"

        //   onKeyDown={toggleDrawer(anchor, false)}
      >
        <Typography variant="h6" sx={heading} onClick={handleRightData}>
          Trending
        </Typography>

        <List sx={Product}>
          {SideBarTrendingData?.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton sx={{ padding: "0px" }}>
                <ListItemText primary={text?.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* ShowData */}

        <Divider />
        {/* 2nd */}
        <Typography variant="h6" sx={heading}>
          Digital Content And Devices
        </Typography>
        <List sx={Product}>
          {DigitalContentDevices.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton sx={{ padding: "0px" }}>
                <ListItemIcon />
                <ListItemText primary={text?.title} />
                <KeyboardArrowRightIcon />
                {console.log("Text", text)}
              </ListItemButton>
            </ListItem>
          ))}
          <CollapseButton
            // setAllData={setAllData}
            // showAll={showAll}
            collapseData={ShopCategoryMoreData}
          />
        </List>
        <Divider />

        {/* 3rd */}
        <Typography variant="h6" sx={heading}>
          Shop By Category
        </Typography>
        <List>
          {ShopByCategory.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton sx={{ padding: "0px" }}>
                <ListItemIcon />
                <ListItemText primary={text?.title} />
                <KeyboardArrowRightIcon />
                {console.log("Text", text)}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />

        {/* 4th */}
        {/* <Typography variant="h6" sx={heading}> */}
        <Divider />

        {/* 5th */}
        <Typography variant="h6" sx={heading}>
          Program & Features
        </Typography>
        <List>
          {ProgramFeatures.map((text, index) => (
            <ListItem key={text} disablePadding onClick={handleRightData}>
              <ListItemButton sx={{ padding: "0px" }}>
                <ListItemIcon />
                <ListItemText primary={text?.title} />
                {text?.btn === true ? <KeyboardArrowRightIcon /> : ""}
                {console.log("Text", text)}
              </ListItemButton>
            </ListItem>
          ))}
          <CollapseButton
            // setAllData={setAllData}
            // showAll={showAll}
            collapseData={ProgramFeaturesMoreData}
          />
        </List>

        <Divider />

        {/* 6th */}
        <Typography variant="h6" sx={heading}>
          Helps & Setting
        </Typography>
        <List>
          {helpSetting.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton sx={{ padding: "0px" }}>
                <ListItemIcon />
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
      {/* <Button onClick={printName}>Button</Button> */}
      <Button onClick={handleOpenSideDrawer} />
      <SwipeableDrawer
        anchor="left"
        open={openSideBar}
        onClose={handleClose}
        onOpen={handleOpenSideDrawer}
        allowSwipeInChildren={true}
        // swipeAreaWidth={20}
      >
        {list()}
      </SwipeableDrawer>
      <RightSideDrawer
        openSideBar={rightDrawerData}
        setOpenSideBar={setRightDrawerData}
      />
    </>
  );
};
export default SideBar;
