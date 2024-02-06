import React from "react";
import Carousel from "react-multi-carousel";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
// import { homeDecor } from "../DataConfig";

const CarouselProduct2 = (props) => {
  const { CarouselProduct2 } = props;
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
    <div>
      <Typography component="div">
        <Typography variant="h6" sx={{ marginLeft: "3rem", fontWeight: "700" }}>
          Today's Deal Up to 70% off | Exclusive collections
          <a href="#" style={{ fontSize: "12px" }}>
            See All Deals
          </a>
        </Typography>

        <Carousel
          additionalTransfrom={0}
          arrows
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
          {CarouselProduct2.map((item, index) => {
            return (
              <Typography>
                <img
                  src={item.image}
                  style={{
                    width: "12rem",
                    height: "12rem",
                    fontSize: "0.7rem",
                  }}
                />
                <Typography component="div" sx={{ fontSize: "2rem" }}>
                  <Button
                    style={{
                      fontSize: "12px",
                      textTransform: "capitalize",
                      background: "#CC0C39",
                      color: "#fff",
                      height: "1.5rem",
                    }}
                  >
                    {item.btn}
                  </Button>
                  <Typography
                    component="span"
                    style={{
                      fontSize: "12px",
                      color: "#CC0C39",
                      marginLeft: "10px",
                    }}
                  >
                    {item?.offer}
                  </Typography>
                  <Typography component="div" style={{ fontSize: "12px" }}>
                    {item?.Description}
                  </Typography>
                </Typography>
              </Typography>
            );
          })}
        </Carousel>
      </Typography>
    </div>
  );
};

export default CarouselProduct2;
