import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Box,
  CardHeader,
} from "@mui/material";
import republicSale from "../../../assets/republic-sale.jpg";
import laptop from "../../../assets/Laptops.jpg";
import { CardsSection, secondCardSection } from "../../DataConfig";
const Cards = () => {
  return (
    <>
      <Typography
        sx={{
          display: "flex",
          position: "absolute",
          top: "68%",
          height: "67%",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <Card sx={{ maxWidth: 348, marginLeft: "20px" }}>
          <Typography component="div">
            <CardActionArea>
              <CardContent
                variant="h5"
                component="div"
                sx={{ fontWeight: "900 !important", fontSize: "1.3rem" }}
              >
                Starts early for Prime members
              </CardContent>
              <CardMedia
                component="img"
                sx={{
                  height: "80%",
                  width: " 90%",
                  padding: " 33px 18px",
                }}
                src={republicSale}
              />
            </CardActionArea>
            <CardActions>
              <Button size="small" sx={{ paddingTop: "20px" }}>
                Start 30 days Free Trial
              </Button>
            </CardActions>
          </Typography>
        </Card>

        <Typography
          component="div"
          sx={{ display: "flex", justifyContent: "space-evenly", width: "51%" }}
        >
          {CardsSection?.map((item, index) => {
            console.log("i", item);
            return (
              <Card sx={{ maxWidth: 348 }}>
                <CardContent
                  sx={{ fontWeight: "900 !important", fontSize: "1.2rem" }}
                  component="div"
                >
                  {item?.title}
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                  }}
                >
                  {item?.child?.map((childData, i) => {
                    console.log("image", childData);
                    return (
                      <>
                        <Box>
                          <CardMedia
                            component="img"
                            sx={{
                              height: "7rem",
                              width: "9rem",
                            }}
                            image={childData?.img}
                          />
                          <Typography
                            component="div"
                            sx={{
                              fontSize: "12px",
                              width: "6rem",
                            }}
                          >
                            {childData?.imgDescription}
                          </Typography>
                        </Box>
                      </>
                    );
                  })}
                </Box>
                <CardContent />
                <CardActions>
                  <Button size="small" color="primary">
                    {item?.btn}
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Typography>
        <Typography component="div" sx={{ maxWidth: 348, marginRight: "20px" }}>
          <Typography
            sx={{
              height: "11rem",
              borderRadius: "4px",
              background: "#fff",
            }}
          >
            <CardActionArea>
              <CardContent
                sx={{
                  fontWeight: "900 !important",
                  fontSize: "1.2rem",
                }}
              >
                Sign in for your best experience
              </CardContent>
            </CardActionArea>
            <CardActions sx={{}}>
              <Button
                size="large"
                sx={{
                  color: "black",
                  width: "17rem",
                  display: "flex",
                  marginLeft: " 10%",

                  borderRadius: "18px",
                  height: "28px",
                  background: "yellow",
                  textTransform: "capitalize",
                }}
              >
                Sign in securely
              </Button>
            </CardActions>
          </Typography>
          <Typography
            sx={{
              height: "16.4rem",
              marginTop: "26px",
              borderRadius: "4px",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                objectFit: "contain",
                width: "306px",
                height: "296px",
              }}
              src={laptop}
            />
          </Typography>
        </Typography>
      </Typography>
      {/* Second Line */}
      <Typography
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          // width: "51%",
          background: "red",
        }}
      >
        {secondCardSection?.map((item, index) => {
          console.log("i", item);
          return (
            <Card sx={{ maxWidth: 348 }}>
              <CardContent
                sx={{ fontWeight: "900 !important", fontSize: "1.2rem" }}
                component="div"
              >
                {item?.title}
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-evenly",
                }}
              >
                {item?.child?.map((childData, i) => {
                  console.log("image", childData);
                  return (
                    <>
                      <Box>
                        <CardMedia
                          component="img"
                          sx={{
                            height: "7rem",
                            width: "9rem",
                          }}
                          image={childData?.img}
                        />
                        <Typography
                          component="div"
                          sx={{
                            fontSize: "12px",
                            width: "6rem",
                            height: "3.2rem",
                          }}
                        >
                          {childData?.imgDescription}
                        </Typography>
                      </Box>
                    </>
                  );
                })}
              </Box>
              <CardContent />
              <CardActions>
                <Button size="small" color="primary">
                  {item?.btn}
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Typography>
    </>
  );
};
export default Cards;
