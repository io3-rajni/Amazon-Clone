import React, { useEffect, useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Rating from "@mui/material/Rating";
import { productApi } from "./ProductApi";
import DoneIcon from "@mui/icons-material/Done";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProductComponent = () => {
  const [productData, setProductData] = useState([]);
  const [value, setValue] = React.useState(2);

  useEffect(() => {
    axios
      .get(productApi)
      .then((response) => {
        setProductData(response.data);
        console.log("res", response);
      })
      .catch((error) => console.error(error));
  }, []);
  console.log("hhgf", productData.products);
  return (
    <>
      {productData ? (
        <Box sx={{ flexGrow: 1, marginTop: "10px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 4 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {/* {Array.from(Array(6)).map((_, index) => ( */}
            {productData?.products?.map((item, index) => {
              console.log("item", item);
              return (
                <>
                  <Grid item xs={2} sm={3} md={3} key={index}>
                    <Card sx={{ maxWidth: 300 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image={item?.thumbnail}
                          alt=""
                        />
                        <CardContent>
                          {/* <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography> */}
                          <Typography variant="body2" color="text.secondary">
                            {item?.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions sx={{ display: "block" }}>
                        <Typography
                          variant="h6"
                          color="text.secondary"
                          sx={{ display: "flex" }}
                        >
                          <Typography>₹</Typography>
                          <Typography variant="h4" sx={{ color: "#353434" }}>
                            {item?.price}
                          </Typography>
                          <Typography sx={{ marginLeft: "10px" }}>
                            {item?.category}
                          </Typography>
                        </Typography>
                        <Typography variant="h5" sx={{ display: "flex" }}>
                          <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                          <Typography
                            component="div"
                            sx={{
                              marginLeft: "20px",
                              color: "#007185",
                              fontSize: "12px",
                            }}
                          >
                            {item?.rating}
                          </Typography>
                        </Typography>
                        <Typography variant="h5" sx={{ display: "flex" }}>
                          <Button
                            sx={{
                              size: "small",

                              background: "#B12704",
                              color: "#fff",
                            }}
                          >
                            {item?.discountPercentage}
                            <b>%</b>
                          </Button>
                          <Typography>off</Typography>
                        </Typography>
                        <Typography component="div" sx={{ display: "flex" }}>
                          <DoneIcon sx={{ color: "#DC9622" }} />
                          <Typography variant="h6" sx={{ fontSize: "13px" }}>
                            <b style={{ color: "#007185" }}>prime</b> Get it by
                            Tomorrow, 13 March <br></br>FREE Delivery over ₹499.
                            Fulfilled by Amazon
                          </Typography>
                        </Typography>
                      </CardActions>
                    </Card>

                    {/* <Item>xs=2</Item> */}
                  </Grid>
                </>
              );
            })}
            {/* ))} */}
          </Grid>
        </Box>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            // background: "red",
            margin: "20px",
            width: "100%",
            height: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {/* <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ background: "red", marginTop: "250px" }}
      >
        <CircularProgress />
      </Box> */}
    </>
  );
};

export default ProductComponent;
