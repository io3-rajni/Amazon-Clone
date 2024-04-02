import React from "react";
import ReactImageMagnify from "react-image-magnify";
import cup from "../assets/cup.jpg";
import Box from "@mui/material/Box";

const DetailPageSecond = () => {
  return (
    // <Box></Box>
    <Box sx={{ width: "40%" }}>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "image",
            isFluidWidth: true,
            src: cup,
            width: 200,
            height: 800,
            sizes: "(min-width: 500px) 33.5vw, (min-width: 315px) 50vw, 100vw",
          },
          largeImage: {
            src: cup,
            width: 600,
            height: 600,
          },
        }}
      />
    </Box>
  );
};

export default DetailPageSecond;
