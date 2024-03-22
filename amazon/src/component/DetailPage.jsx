import React from "react";
import ReactImageMagnify from "react-image-magnify";
import bag from "../assets/bag1.jpg";
const DetailPage = () => {
  return (
    <div style={{ width: "20%", height: "20%" }}>
      {/* <img src={bag} /> */}
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "image",
            isFluidWidth: true,
            src: bag,
            width: 140,
            height: 162,
          },
          largeImage: {
            src: bag,
            width: 7000,
            height: 1000,
          },
        }}
      />
    </div>
  );
};

export default DetailPage;
