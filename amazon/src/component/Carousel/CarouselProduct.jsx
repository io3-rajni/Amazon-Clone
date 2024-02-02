import React from "react";
import Carousel from "react-multi-carousel";
import Typography from "@mui/material/Typography";
import { carouselImage, homeDecor } from "../DataConfig";
import "../Header/Navbar/mainnavbar.css";
import { Button } from "@mui/material";

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

  return (
    <>
      <Typography component="div" sx={{ marginTop: "2rem" }}>
        <Typography variant="h6" sx={{ marginLeft: "3rem", fontWeight: "700" }}>
          Today’s Deals
          <a href="#" style={{ fontSize: "12px" }}>
            See All Deals
          </a>
        </Typography>
        <Carousel
          additionalTransfrom={0}
          arrows
          // autoPlay
          // autoPlaySpeed={5}
          centerMode={false}
          className="carouselBagSection"
          containerClass="container-with-dots"
          customTransition="all 0.5s linear"
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
      </Typography>
      <Typography component="div">
        <Carousel
          additionalTransfrom={0}
          arrows
          // autoPlay
          // autoPlaySpeed={5}
          centerMode={false}
          className="carouselBagSection"
          containerClass="container-with-dots"
          customTransition="all 0.5s linear"
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
          responsive={responsive}
        >
          {homeDecor.map((item, index) => {
            return (
              <Typography>
                <img
                  src={item.image}
                  style={{
                    width: "12rem",
                    height: "12rem",
                  }}
                />
              </Typography>
            );
          })}
        </Carousel>
      </Typography>
    </>
  );
};

export default CarouselProduct;
