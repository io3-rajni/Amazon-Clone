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
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
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
    giftCardData,
    giftCardTitle,
  } = props;
  const navigate = useNavigate();
  const handleClose = () => {
    setOpenRightSideDrawer(false);
  };
  const handleNavigate = (data) => {
    switch (data) {
      case "Watches":
        navigate("/CausalWearApi");
        break;
      case "Bags & Luggage":
        navigate("/CausalWearApi");
        break;
      case "Jewellery":
        navigate("/CausalWearApi");
        break;
      case "Sunglasses":
        navigate("/CausalWearApi");
        break;
      case "Wallets":
        navigate("/CausalWearApi");
        break;
      case "Watches":
        navigate("/CausalWearApi");
        break;
      case "Handbags & Clutches":
        navigate("/CausalWearApi");
        break;
      case "Gold Diamond Jewellery":
        navigate("/CausalWearApi");
        break;
      case "Fashion & Silver Jewellery":
        navigate("/CausalWearApi");
        break;
      case "Sunglasses":
        navigate("/CausalWearApi");
        break;
      default:
        navigate("./ProductComponent");
        break;
    }
    console.log("second ", data);
  };
  const handleNavigate1 = (data) => {
    switch (data) {
      case "Clothing":
        navigate("/CausalWearApi");
        break;
      case "T-Shirt Polos":
        navigate("/CausalWearApi");
        break;
      case "Shirt":
        navigate("/CausalWearApi");
        break;
      case "Jeans":
        navigate("/CausalWearApi");
        break;
      case "innerWear":
        navigate("/CausalWearApi");
        break;
      case "Clothing":
        navigate("/CausalWearApi");
        break;
      case "Western Wear":
        navigate("/CausalWearApi");
        break;
      case "Lingerie & NightWear":
        navigate("/CausalWearApi");
        break;
      case "TopBrands":
        navigate("/CausalWearApi");
        break;
      default:
        navigate("./ProductComponent");
        break;
    }
    console.log("first", data);
  };
  const handleNavigate2 = (data) => {
    switch (data) {
      case "Shoes":
        navigate("/CausalWearApi");
        break;
      case "Sport Shoes":
        navigate("/CausalWearApi");

        break;
      case "Formal Shoes":
        navigate("/CausalWearApi");

        break;
      case "Casual Shoes":
        navigate("/CausalWearApi");
        break;
      case "Fashion Sandals":
        navigate("/CausalWearApi");
        break;
      case "Ballerinas":
        navigate("/CausalWearApi");
        break;
      default:
        navigate("./ProductComponent");
        break;
    }

    console.log("third", data);
  };
  const heading = {
    display: "flex",
    justifyContent: "space-around",
    fontWeight: 800,
  };
  // console.log("subSideBarData", subSideBarData);
  const list = (anchor) => {
    // console.log("data", subSideBarTitle);
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
            {giftCardData?.map((text, index) => {
              // console.log("Textbfbg", text?.title);

              return (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text?.title} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          {/* Program & features */}
          <Typography variant="h6" sx={heading}>
            {subSideBarTitle}
          </Typography>
          <List>
            {subSideBarData?.map((text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={text?.title}
                    onClick={() => handleNavigate1(text?.title)}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          {/* Echo Alex Components */}
          <Typography variant="h6" sx={heading}>
            {subSideBarSubTitle}
          </Typography>
          <List>
            {subSideBarSubData?.map((text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={text?.title}
                    onClick={() => handleNavigate(text?.title)}
                  />
                </ListItemButton>
                <Divider />
              </ListItem>
            ))}
          </List>
          {/* Shop By Catagory
           */}
          <Typography variant="h6" sx={heading}>
            {subSideBarSecondTitle}
          </Typography>
          <List>
            {subSideBarSecondData?.map((text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={text?.title}
                    onClick={() => handleNavigate2(text?.title)}
                  />
                </ListItemButton>
                <Divider />
              </ListItem>
            ))}
          </List>
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
