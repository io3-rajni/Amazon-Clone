import React from "react";
import Carousel from "react-multi-carousel";
import WithScrollbar from "react-multi-carousel";
import Typography from "@mui/material/Typography";

// import Typography from "@mui/material/Typography";
import { carouselImage } from "../DataConfig";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "../Header/Navbar/mainnavbar.css";
// import { Typography } from "@mui/material";
const CarouselProduct = () => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 7,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };
  // const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  //   const {
  //     carouselState: { currentSlide },
  //   } = rest;
  //   return (
  //     <div
  //       className="carousel-button-group gap-4 flex justify-end
  //       items-center w-full  btn"
  //     >
  //       <button className=" left-btn" onClick={() => previous()}>
  //         <KeyboardArrowLeftIcon
  //           className="Arrow"
  //           sx={{ height: "18rem", fontSize: "6rem", color: "#7a7373" }}
  //         />
  //       </button>
  //       <button onClick={() => next()} className="right-btn">
  //         <span className="block p-3 bg-slate-300 ">
  //           <KeyboardArrowRightIcon
  //             className="Arrow"
  //             sx={{
  //               height: "18rem",
  //               fontSize: "6rem",
  //               color: "#7a7373",
  //             }}
  //           />
  //         </span>
  //       </button>
  //     </div>
  //   );
  // };
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      // autoPlay
      // autoPlaySpeed={1}
      centerMode={false}
      className="carouselBagSection"
      containerClass="container-with-dots"
      customTransition="all 1s linear"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={true}
      renderDotsOutside={false}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={2}
      swipeable
      transitionDuration={1000}
      responsive={responsive}
    >
      {carouselImage.map((item, index) => {
        return (
          <Typography>
            <img
              src={item.img}
              style={{
                width: "12rem",
                height: "12rem",
              }}
            />
          </Typography>
        );
      })}
    </Carousel>
  );
};

export default CarouselProduct;
