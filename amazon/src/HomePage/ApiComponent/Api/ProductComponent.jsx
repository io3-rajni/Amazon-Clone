import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Rating from "@mui/material/Rating";
import { productApi } from "./ProductApi";
import DoneIcon from "@mui/icons-material/Done";
import axios from "axios";
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
      {productData?.products?.map((item, index) => {
        console.log("item", item);
        return (
          <>
            <Card sx={{ maxWidth: 300 }} key={index}>
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
                  <Typography component="div" sx={{ display: "flex" }}>
                    <DoneIcon sx={{ color: "#DC9622" }} />
                    <Typography variant="h6" sx={{ fontSize: "13px" }}>
                      <b style={{ color: "#007185" }}>prime</b> Get it by
                      Tomorrow, 13 March <br></br>FREE Delivery over ₹499.
                      Fulfilled by Amazon
                    </Typography>
                  </Typography>
                </Typography>
              </CardActions>
            </Card>
          </>
        );
      })}
    </>
  );
};

export default ProductComponent;
