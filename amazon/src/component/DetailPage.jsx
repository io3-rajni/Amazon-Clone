import React, { useEffect, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import Rating from "@mui/material/Rating";
import DoneIcon from "@mui/icons-material/Done";
import { Box, Typography, Button } from "@mui/material";
// import { productApi2 } from "../HomePage/ApiComponent/Api/ProductApi";
import { useLocation } from "react-router-dom";

const DetailPage = () => {
  const location = useLocation();
  const [image, setImage] = useState(location.state.item.thumbnail);
  const [value, setValue] = React.useState(2);

  // console.log("productApi2", productApi2);
  const handleImage = (item) => {
    setImage(item);
  };
  // console.log("bghdv", image);
  // console.log("location", location);
  // console.log("imAGE", location.state.item.images);
  return (
    <Box sx={{ width: "100%", height: "100vh", display: "flex" }}>
      <Box
        sx={{
          display: "inline",
          width: "6%",
          paddingTop: "35px",
          paddingLeft: "2%",
        }}
      >
        {location.state.item.images.map((item, index) => {
          // console.log("image", item);

          return (
            <>
              <Box onClick={() => handleImage(item)} key={index}>
                <img src={item} style={{ height: "69px", width: "59px" }} />
              </Box>
            </>
          );
        })}
      </Box>
      <Box sx={{ width: "40%" }}>
        <ReactImageMagnify
          {...{
            imageStyle: { marginTop: "6%", height: "50vh" },
            smallImage: {
              alt: "image",
              isFluidWidth: true,
              src: image,
              sizes:
                "(min-width: 500px) 33.5vw, (min-width: 315px) 50vw, 100vw",
            },
            largeImage: {
              src: image,
              width: 1200,
              height: 1800,
            },
          }}
        />{" "}
      </Box>
      <Box
        height={200}
        // my={4}
        // display="flex"
        alignItems="center"
        gap={4}
        p={2}
        sx={{ width: "40%", marginTop: "3%" }}
      >
        <Typography component="div" sx={{ fontSize: "x-large" }}>
          {location.state.item.description}
        </Typography>
        <Typography component="div" sx={{ display: "flex" }}>
          <DoneIcon sx={{ color: "#DC9622" }} />
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            <b style={{ color: "#007185" }}>prime</b> Get it by Tomorrow, 13
            March <br></br>FREE Delivery over $499. Fulfilled by Amazon
          </Typography>
        </Typography>
        <hr />
        <Typography variant="h5" sx={{ display: "flex" }}>
          <Button
            sx={{
              size: "small",
              width: "20%",
              background: "#B12704",
              color: "#fff",
              zIndex: -1,
            }}
          >
            {location.state.item.discountPercentage}
            <b>%</b>
          </Button>
          <Typography sx={{ marginLeft: "10px" }}>off</Typography>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {location.state.item.title}
        </Typography>
        <Typography
          variant="h3"
          color="text.secondary"
          sx={{ display: "flex" }}
        >
          <Typography>$</Typography>
          <Typography sx={{ color: "#353434" }}>
            {location.state.item.price}
          </Typography>
          <Typography sx={{ marginLeft: "10px" }}>
            {location.state.item.category}
          </Typography>
        </Typography>
        <Typography variant="h5" sx={{ display: "flex" }}>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            sx={{ zIndex: -1 }}
          />
          <Typography
            component="div"
            sx={{
              marginLeft: "20px",
              color: "#007185",
              fontSize: "15px",
            }}
          >
            {location.state.item.rating}
          </Typography>
        </Typography>
        <hr />
        <hr />
        <Typography component="h5" sx={{ fontWeight: "bold" }}>
          About this item
        </Typography>
        <br />
        <Typography component="div">
          <Typography component="div" sx={{ fontSize: "14px" }}>
            After ordering, for activation code and download link, check
            'Buyer/Seller messages' under Message Centre at "amazon.in/msg" or
            check your Amazon regd. email ID; Fulfilment will be done within 6
            hours of ordering
          </Typography>

          <Typography
            component="div"
            sx={{ fontSize: "14px", margin: "10px 0px 10px 0px" }}
          >
            E-mails will be sent only to e-mail ID registered on Amazon.in; If
            you have not registered your e-mail ID, please do so before
            purchasing this product; This code only works in India IP address
            devices
          </Typography>

          <Typography component="div" sx={{ fontSize: "14px" }}>
            Easy to use, automatically detects and removes viruses, Trojans,
            malware; Keeps your device safe, secure, protects against malicious
            virus attacks
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default DetailPage;
