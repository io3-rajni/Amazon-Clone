import React from "react";
import Carousel from "react-multi-carousel";
import Typography from "@mui/material/Typography";
import { carouselImage } from "../DataConfig";
// import { Typography } from "@mui/material";
const CarouselProduct = () => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
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

  console.log("item", carouselImage);
  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
      >
        <Typography>
          {carouselImage.map((item, index) => {
            console.log("item1", item);

            return (
              <>
                <img
                  src={item.img}
                  style={{ height: "20rem", width: "20rem", display: "flex" }}
                />
              </>
            );
          })}
        </Typography>
      </Carousel>
    </div>
  );
};

export default CarouselProduct;
