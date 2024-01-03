import React from "react";
// import { Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Navbar/mainnavbar.css";
import Cards from "./Cards/Cards";
const CarouselComp = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel responsive={responsive}>
        <div>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img24/Consumables/SVD/Jan24/GW/Unrec_PC_Hero_3000x1200_ICICI._CB585113227_.jpg"
            alt="link"
            className="image"
          />
        </div>
        <div>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img24/Sports/January/GFD/GW/Final/PC/5298-Sports---GFD-Jan-hero-S4-PC._CB587070515_.jpg"
            alt="link"
            className="image-1"
          />
        </div>
        <div>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img24/Beauty/GW/atf/jan/PC-2._CB585328329_.jpg"
            alt="link"
            className="image-2"
          />
        </div>
        <div>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img23/Fashion/Gw/Dec/one/Monthly/Deals-Unrec-PC-3000._CB586257034_.jpg"
            alt="link"
            className="image-3"
          />
        </div>
        <div>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img23/Softlines_JWL_SH_GW_Assets/jan2024/EOSS/Unrec/apay/sports/3000._CB586996054_.jpg"
            alt="link"
            className="image-4"
          />
        </div>
        <div>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg"
            alt="link"
            className="image-5"
          />
        </div>
      </Carousel>
      <Cards />
    </div>
  );
};

export default CarouselComp;
