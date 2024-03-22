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
import "../../Header/Navbar/mainnavbar.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  SideBarTrendingData,
  DigitalContentDevices,
  ShopByCategory,
  ProgramFeatures,
  helpSetting,
  ProgramFeaturesMoreData,
  ShopCategoryMoreData,
  resources,
  echoAlexSubData,
  ContentResources,
  FireTv,
  KindleRenderBooks,
  KindleEbooks,
  AudibleAudioBooks,
  AmazonPrimeVideo,
  AmazonPrimeMusic,
  MobilesComputer,
  ComputersAccessories,
  TVElectronic,
  Appliances,
  MenFashion,
  Accessories,
  MenShoes,
  menStores,
  HomeKitchen,
  HomeKitchenPets,
  PetSupplies,
  WomenFashion,
  womenAccessories,
  womenShoes,
  womenStores,
  BeautyHealth,
  GroceryGourmetFoods,
  SportsFitness,
  BagsLuggage,
  CarMotorbike,
  IndustrialSupplies,
  ToysBabyProducts,
  KidsFashion,
  Books,
  AudibleAudiobooks,
  MoviesTvShows,
  GiftCards,
  Recharge,
} from "../../DataConfig";
import { Typography } from "@mui/material";
import CollapseButton from "../CollapseButton";
import RightSideDrawer from "./RightSideDrawer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
const SideBar = (props) => {
  const { openSideBar, setOpenSideBar } = props;
  const [openRightSideDrawer, setOpenRightSideDrawer] = useState(false);
  const [subSideBarTitle, setSubSideBarTitle] = useState("");
  const [subSideBarData, setSubSideBarData] = useState([]);
  const [subSideBarSubData, setSubSideBarSubData] = useState([]);
  const [subSideBarSubTitle, setSubSideBarSubTitle] = useState("");
  const [subSideBarSecondData, setSubSideBarSecondData] = useState([]);
  const [subSideBarSecondTitle, setSubSideSecondTitle] = useState("");
  const [subSideBarThirdTitle, setSubSideBarThirdTitle] = useState("");
  const [subSideBarThirdData, setSubBarThirdData] = useState([]);
  const navigate = useNavigate();

  const handleOpenSideDrawer = () => {
    setOpenSideBar(true);
  };

  const handleClose = () => {
    // this flag state close the sidebar
    setOpenSideBar(false);
  };

  const heading = {
    display: "flex",
    justifyContent: "space-around",
    fontWeight: 600,
    fontSize: "18px",
    letterSpacing: "0px",
    cursor: "pointer",
    justifyContent: "left",
    margin: "2rem 0rem 0rem 1rem",
    color: "#232F3E",
  };

  const Product = {
    fontSize: "12px",
  };
  const handleRightSideDrawer = (text) => {
    // this flag state open the sun sideDrawer
    setOpenRightSideDrawer(true);
    switch (text?.title) {
      case "Echo & Alex":
        // this state set the value of title inside the sub sidebar
        setSubSideBarTitle(text.title);
        // this state set the value of that particular item where we click
        setSubSideBarData(echoAlexSubData);
        setSubSideBarSubData(ContentResources);
        setSubSideBarSubTitle("Content & Resources");
        setSubSideSecondTitle("");
        setSubSideBarSecondData([]);
        setSubSideBarThirdTitle("");
        setSubBarThirdData([]);
        break;
      case "Fire TV":
        // this state set the value of title inside the sub sidebar
        setSubSideBarTitle(text.title);
        setSubSideBarData(FireTv);
        setSubSideSecondTitle("");
        setSubSideBarSecondData([]);
        setSubSideBarThirdTitle("");
        setSubBarThirdData([]);
        break;
      case "Kindle E-Reader & e-Books":
        // this state set the value of title inside the sub sidebar
        setSubSideBarTitle(text.title);
        setSubSideBarData(KindleRenderBooks);
        setSubSideBarSubData(KindleEbooks);
        setSubSideBarSubTitle("Kindle Ebooks");
        setSubSideSecondTitle("");
        setSubSideBarSecondData([]);
        setSubSideBarThirdTitle("");
        setSubBarThirdData([]);
        break;
      case "Audible Audiobooks":
        setSubSideBarTitle(text.title);
        // setSubSideBarData(text.title);
        setSubSideBarData(AudibleAudioBooks);
        setSubSideSecondTitle("");
        setSubSideBarSecondData([]);
        setSubSideBarThirdTitle("");
        setSubBarThirdData([]);
        break;
      case "Amazon Prime video":
        setSubSideBarTitle(text.title);
        setSubSideBarData(AmazonPrimeVideo);
        setSubSideSecondTitle("");
        setSubSideBarSecondData([]);
        setSubSideBarThirdTitle("");
        setSubBarThirdData([]);
        break;
      case "Amazon Prime Music":
        setSubSideBarTitle(text.title);
        setSubSideBarData(AmazonPrimeMusic);
        setSubSideSecondTitle("");
        setSubSideBarSecondData([]);
        setSubSideBarThirdTitle("");
        setSubBarThirdData([]);
        break;
      case "Mobiles & Computer":
        setSubSideBarTitle("Mobiles, Tablets & More");
        setSubSideBarData(MobilesComputer);
        setSubSideBarSubData(ComputersAccessories);
        setSubSideBarSubTitle("  Computers & Accessories");
        setSubSideSecondTitle("");
        setSubSideBarSecondData([]);
        setSubSideBarThirdTitle("");
        setSubBarThirdData([]);
        // ComputersAccessories;
        break;
      case "TV,Appliances,Electronic":
        setSubSideBarTitle("Tv, Audio & Cameras");
        setSubSideBarData(TVElectronic);
        setSubSideBarSubData(Appliances);
        setSubSideBarSubTitle("  Appliances");
        setSubSideSecondTitle("");
        setSubSideBarSecondData([]);
        setSubSideBarThirdTitle("");
        setSubBarThirdData([]);
        break;
      //
      case "Men's Fashion":
        setSubSideBarTitle("Men's Clothing");
        setSubSideBarData(MenFashion);
        setSubSideBarSubData(Accessories);
        setSubSideBarSubTitle("Accessories");
        setSubSideSecondTitle("Men's Shoes");
        setSubSideBarSecondData(MenShoes);
        setSubSideBarThirdTitle("Stores");
        setSubBarThirdData(menStores);
        break;
      case "Women's Fashion":
        setSubSideBarTitle("Women's Clothing");
        setSubSideBarData(WomenFashion);
        setSubSideBarSubData(womenAccessories);
        setSubSideBarSubTitle("Accessories");
        setSubSideSecondTitle("Women's Shoes,");
        setSubSideBarSecondData(womenShoes);
        setSubSideBarThirdTitle("Stores");
        setSubBarThirdData(womenStores);
        break;
      case "Home,Kitchen,Pets":
        setSubSideBarTitle("Home & Kitchen");
        setSubSideBarData(HomeKitchen);
        setSubSideBarSubData(PetSupplies);
        setSubSideBarSubTitle("Pet Supplies");
        setSubSideSecondTitle("Home, Kitchen, Pets");
        setSubSideBarSecondData(HomeKitchenPets);
        setSubSideBarThirdTitle("");
        setSubBarThirdData([]);
        break;
      case "Beauty,Health,Grocery":
        setSubSideBarTitle("Beauty & Health");
        setSubSideBarData(BeautyHealth);
        setSubSideBarSubData(GroceryGourmetFoods);
        setSubSideBarSubTitle("Grocery & Gourmet Foods");
        setSubSideSecondTitle("");
        setSubSideBarSecondData([]);
        setSubSideBarThirdTitle("");
        setSubBarThirdData([]);
        break;
      case "Sports,Fitness,Bags,Luggage":
        setSubSideBarTitle("Sports & Fitness");
        setSubSideBarData(SportsFitness);
        setSubSideBarSubData(BagsLuggage);
        setSubSideBarSubTitle("Bags & Luggage");
        setSubSideSecondTitle("");
        setSubSideBarSecondData([]);
        setSubSideBarThirdTitle("");
        setSubBarThirdData([]);
        break;
      case "Toys,Baby Products,Kid's Fashion":
        setSubSideBarTitle("Toys & Baby Products");
        setSubSideBarData(ToysBabyProducts);
        setSubSideBarSubData(KidsFashion);
        setSubSideBarSubTitle("Kid'sFashion");
        setSubSideSecondTitle("");
        setSubSideBarSecondData([]);
        setSubSideBarThirdTitle("");
        setSubBarThirdData([]);
        break;
      case "Car,Moterbile,Industrial":
        setSubSideBarTitle("Car & Motorbike");
        setSubSideBarData(CarMotorbike);
        setSubSideBarSubData(IndustrialSupplies);
        setSubSideBarSubTitle("IndustrialSupplies");
        setSubSideSecondTitle("");
        setSubSideBarSecondData([]);
        setSubSideBarThirdTitle("");
        setSubBarThirdData([]);
        break;
      case "Books":
        setSubSideBarTitle("Books");
        setSubSideBarData(Books);
        setSubSideBarSubData(AudibleAudiobooks);
        setSubSideBarSubTitle("AudibleAudiobooks");
        setSubSideSecondTitle("");
        setSubSideBarSecondData([]);
        setSubSideBarThirdTitle("");
        setSubBarThirdData([]);
        break;

      case "Movies,Music,& Video Games":
        setSubSideBarTitle(" Movies & Tv Shows");
        setSubSideBarData(MoviesTvShows);
        setSubSideSecondTitle("");
        setSubSideBarSecondData([]);
        setSubSideBarThirdTitle("");
        setSubBarThirdData([]);
        break;

      case "Gift Card & Mobile Recharge":
        // this state set the value of title inside the sub sidebar
        setSubSideBarTitle(text.title);
        // this state set the value of that particular item where we click
        setSubSideBarData(GiftCards);
        // setSubSideBarSubData(ContentResources);
        setSubSideBarSubData(Recharge);
        setSubSideBarSubTitle("Recharge");
        setSubSideSecondTitle("");
        setSubSideBarSecondData([]);
        setSubSideBarThirdTitle("");
        setSubBarThirdData([]);
        break;
      default:
        setSubSideBarData([]);
        break;
    }
  };
  const handleNavigate = (index) => {
    console.log("side bar", index);
    if (index === 0) {
      navigate("/CausalWearApi");
      setOpenSideBar(false);
    } else {
      navigate("/ProductComponent");
      setOpenSideBar(false);
    }
  };
  const openSignInPage = (index) => {
    switch (index) {
      case "Your Account":
        navigate("/CreateAccount");
        setOpenSideBar(false);
        break;
      case "Sign in":
        navigate("/Sign-in");
        setOpenSideBar(false);
        break;
      default:
        break;
    }
    console.log("You Account", index);
  };
  const signInData = JSON.parse(localStorage.getItem("Data set"));
  const list = (anchor) => {
    return (
      <Box
        sx={{
          width: anchor === "top" || anchor === "bottom" ? "auto" : 350,
          fontSize: "10px",
        }}
        role="presentation"
      >
        <Typography
          component="div"
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            cursor: "pointer",
            background: "#232F3E",
          }}
        >
          <Typography component="div">
            <AccountCircleIcon
              className="UserIcon"
              sx={{
                width: "2.5rem",
                height: "2.5rem",
                color: "#fff",
                paddingLeft: "19px",
              }}
            />
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "800",
              paddingTop: "6px",
              color: "#fff",
              paddingLeft: "10px",
            }}
          >
            Hello,{signInData.name ? signInData.name : " Sign in"}
          </Typography>
        </Typography>

        <Divider />

        <Typography variant="h6" sx={heading}>
          Trending
        </Typography>

        <List>
          {SideBarTrendingData?.map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={text?.title}
                  onClick={() => handleNavigate(index)}
                />
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
              <ListItemButton onClick={() => handleRightSideDrawer(text)}>
                <ListItemText primary={text?.title} />
                <ListItemIcon>
                  <KeyboardArrowRightIcon />
                </ListItemIcon>
                {console.log("Text", text)}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />

        {/* 3rd */}
        <Typography variant="h6" sx={heading}>
          Shop By Category
        </Typography>
        <List>
          {ShopByCategory.map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => handleRightSideDrawer(text)}>
                <ListItemText primary={text?.title} />
                <KeyboardArrowRightIcon />
              </ListItemButton>
            </ListItem>
          ))}
          <CollapseButton
            collapseData={ShopCategoryMoreData}
            handleRightSideDrawer={handleRightSideDrawer}
          />
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
                <ListItemButton onClick={() => handleRightSideDrawer(text)}>
                  <ListItemText primary={text?.title} />
                  <ListItemIcon>
                    <KeyboardArrowRightIcon />
                  </ListItemIcon>
                </ListItemButton>
              ) : (
                <ListItemButton>
                  <ListItemText primary={text?.title} />
                </ListItemButton>
              )}
            </ListItem>
          ))}
          <CollapseButton
            collapseData={ProgramFeaturesMoreData}
            handleRightSideDrawer={handleRightSideDrawer}
          />
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
                <ListItemText
                  primary={text?.title}
                  onClick={() => openSignInPage(text?.title)}
                />
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
      <SwipeableDrawer anchor="left" open={openSideBar} onClose={handleClose}>
        {list()}
      </SwipeableDrawer>
      <RightSideDrawer
        setOpenRightSideDrawer={setOpenRightSideDrawer}
        openRightSideDrawer={openRightSideDrawer}
        subSideBarTitle={subSideBarTitle}
        subSideBarData={subSideBarData}
        subSideBarSubData={subSideBarSubData}
        subSideBarSubTitle={subSideBarSubTitle}
        subSideBarSecondData={subSideBarSecondData}
        subSideBarSecondTitle={subSideBarSecondTitle}
        subSideBarThirdTitle={subSideBarThirdTitle}
        subSideBarThirdData={subSideBarThirdData}
      />
    </>
  );
};
export default SideBar;
