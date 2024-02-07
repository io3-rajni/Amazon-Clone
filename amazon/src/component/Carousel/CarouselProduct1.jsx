import React from "react";
import Carousel from "react-multi-carousel";
import Typography from "@mui/material/Typography";
import { Button, Card, CardMedia } from "@mui/material";
import "../Header/Navbar/mainnavbar.css";
const CarouselProduct1 = (props) => {
  const { CarouselProduct1, heading, link } = props;
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 6,
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
      items: 4,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <>
      <Typography component="div" sx={{ marginTop: "2rem" }}>
        <Typography variant="h6" sx={{ marginLeft: "3rem", fontWeight: "700" }}>
          {heading}
          <a href="#" style={{ fontSize: "12px" }}>
            {link}
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
          {CarouselProduct1?.map((item, index) => {
            return (
              <Card sx={{}}>
                <CardMedia
                  component="img"
                  image={item?.img}
                  alt="image"
                  sx={{
                    width: "12rem",
                    height: "12rem",
                    objectFit: "none",
                  }}
                />
                {item.btn && item.offer && item.Description && (
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
                )}
              </Card>
            );
          })}
        </Carousel>
      </Typography>

      {/* Second Line Card */}
    </>
  );
};

export default CarouselProduct1;
