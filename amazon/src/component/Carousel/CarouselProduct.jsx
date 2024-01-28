import React from "react";
import Carousel from "react-multi-carousel";
import Typography from "@mui/material/Typography";
import { carouselImage } from "../DataConfig";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "../Header/Navbar/mainnavbar.css";
// import { Typography } from "@mui/material";
const CarouselProduct = () => {
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
      // arrows
      autoPlay
      // autoPlaySpeed={1000}
      infinite
      containerClass="container"
      className="Carousel"
      responsive={responsive}
      renderButtonGroupOutside={true}
      customButtonGroup={<ButtonGroup />}
    >
      <Typography>
        {carouselImage.map((item, index) => {
          return (
            <>
              <img src={item.img} />
            </>
          );
        })}
      </Typography>
    </Carousel>
  );
  // <CarouselProduct />;
};

export default CarouselProduct;
