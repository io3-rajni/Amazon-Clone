import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";
import republicSale from "../../../assets/republic-sale.jpg";
import amazone from "../../../assets/ama.png";
import { AllYourHomeImprovement } from "../../DataConfig";
const Cards = () => {
  // export default function MultiActionAreaCard() {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Typography component="div">
        <CardActionArea>
          <Typography gutterBottom variant="h5" component="div">
            Starts early for Prime members
          </Typography>
          <CardMedia
            component="img"
            sx={{ height: "80%" }}
            src={republicSale}
          />
        </CardActionArea>
        <CardActions>
          <Button size="small">Start 30 days Free Trial</Button>
        </CardActions>
      </Typography>
      <Typography component="div">
        <CardActionArea>
          <Typography gutterBottom variant="h5" component="div">
            Revamp your Home in Style
          </Typography>

          {AllYourHomeImprovement?.map(
            (item, index) => {
              console.log("i", item);
              return (
                <Card>
                  <Box>{item?.title}</Box>

                  {item?.child?.map((childData, i) => {
                    <CardMedia
                      component="img"
                      sx={{ height: "80%" }}
                     {childData[i]?.img}
                    />;
                  })}
                </Card>
              );
            }

            // console.log("cards", index, item)
          )}
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Typography>
      <Typography component="div">
        <CardActionArea>
          <Typography gutterBottom variant="h5" component="div">
            Sign in for your best experience
          </Typography>
          {/* <CardMedia component="img" height="140" src={amazone} /> */}
        </CardActionArea>
        <CardActions>
          <Button size="large" color="primary">
            Sign Iin securely
          </Button>
        </CardActions>
      </Typography>
      <Typography component="div">
        <CardActionArea>
          {/* <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography> */}
          <CardMedia component="img" height="140" src={amazone} />
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Typography>
    </Card>
  );
};
export default Cards;
