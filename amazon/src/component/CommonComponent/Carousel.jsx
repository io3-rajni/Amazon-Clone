import React from "react";
// import { Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Header/Navbar/mainnavbar.css";
import Cards from "./Cards/Cards";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// export const customLeftArrow = () => {
//   return (
//     <div>
//       <KeyboardArrowLeftIcon />
//     </div>
//   );
// };

// export const customRightArrow = () => {
//   return (
//     <div>
//       <KeyboardArrowRightIcon />
//     </div>
//   );
// };
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
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div
        className="carousel-button-group mb-4  gap-4 flex justify-end 
        items-center w-full  btn"
      >
        <button className=" left-btn" onClick={() => previous()}>
          <KeyboardArrowLeftIcon
            className="Arrow"
            sx={{ height: "18rem", fontSize: "6rem", color: "#7a7373" }}
          />
        </button>
        <button onClick={() => next()} className="right-btn">
          <span className="block p-3 bg-slate-300 ">
            <KeyboardArrowRightIcon
              className="Arrow"
              sx={{
                height: "18rem",
                fontSize: "6rem",
                color: "#7a7373",
              }}
            />
          </span>
        </button>
      </div>
    );
  };
  return (
    // <div>
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlaySpeed={3000}
      centerMode={false}
      containerClass="container"
      className="Carousel"
      responsive={responsive}
      // customLeftArrow={<customLeftArrow />}
      // customRightArrow={<customRightArrow />}
      renderButtonGroupOutside={true}
      customButtonGroup={<ButtonGroup />}
      // customLeftArrow
      // customRightArrow
      // rewind={false}
      // rewindWithAnimation={false}
      // rtl={false}
      // shouldResetAutoplay
      // showDots={false}
      // sliderClass=""
      // slidesToSlide={1}
      // swipeable
    >
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
    // <Cards />
    // </div>
  );
};

export default CarouselComp;
