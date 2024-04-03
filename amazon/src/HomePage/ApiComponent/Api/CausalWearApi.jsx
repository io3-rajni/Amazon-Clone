import axios from "axios";
import React, { useEffect, useState } from "react";
import { productApi2 } from "./ProductApi";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import DoneIcon from "@mui/icons-material/Done";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const CausalWearApi = () => {
  const [dress, setDress] = useState([]);
  const [value, setValue] = React.useState(2);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(productApi2)
      .then((res) => {
        setDress(res.data);
        // console.log("productApi2", res.data);
      })
      .catch(() => console.log("error"));
  }, []);
  const handleCausalWearApi = (item) => {
    navigate("/DetailPageSecond", {
      state: {
        item,
      },
    });

    console.log("bfhvcndsjdf", item);
  };
  return (
    <>
      <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {dress.map((item, index) => {
            return (
              <Grid item xs={2} sm={3} md={3} key={index}>
                <Card
                  sx={{ maxWidth: 330, paddingLeft: "25px" }}
                  key={index}
                  onClick={() => handleCausalWearApi(item)}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="220px"
                      display="flex"
                      flexWrap="wrap"
                      width="149px"
                      margin=" auto"
                      image={item?.image}
                      alt="green iguana"
                      sx={{ objectFit: "contain" }}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        {item?.title}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="div">
                        {item?.category}
                      </Typography>
                      <Typography
                        variant="h4"
                        color="text.secondary"
                        sx={{ display: "flex" }}
                      >
                        <Typography>₹</Typography>
                        <Typography sx={{ color: "#353434" }}>
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
                          {item?.rating?.rate?.count}
                        </Typography>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <Typography component="div" sx={{ display: "flex" }}>
                    <DoneIcon sx={{ color: "#DC9622" }} />
                    <Typography variant="h6" sx={{ fontSize: "13px" }}>
                      <b style={{ color: "#007185" }}>prime</b> Get it by
                      Tomorrow, 13 March <br></br>FREE Delivery over ₹499.
                      Fulfilled by Amazon
                    </Typography>
                  </Typography>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default CausalWearApi;
