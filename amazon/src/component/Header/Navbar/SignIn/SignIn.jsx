import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import {
  Button,
  CardActions,
  Card,
  Typography,
  InputBase,
  Box,
  InputLabel,
  FormControl,
  Stack,
  CardContent,
  // buttonBase,
} from "@mui/material";
import amazone from "../../../../assets/amazone.png";
import "../../Navbar/mainnavbar.css";
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(1),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    border: "1px solid",
    fontSize: 16,
    width: "18.1rem",
    height: "0.6rem",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    },
  },
}));
// const buttonStyle = styled()(({}) => ({
//   width: "20rem",
// }));
const SignIn = () => {
  return (
    <>
      <Box
        component="div"
        sx={{ display: "grid", justifyContent: "center", marginTop: "5%" }}
      >
        <img src={amazone} style={{ height: "5rem" }} />
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Sign in
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "14px", fontWeight: "bold", color: "black" }}
            >
              Email or mobile phone number
              <Box component="form" noValidate>
                <FormControl variant="standard" sx={{ width: "20rem" }}>
                  <BootstrapInput id="bootstrap-input" />
                </FormControl>
              </Box>
            </Typography>
          </CardContent>
          <Box sx={{ marginTop: "10%" }}>
            {/* // marginTop: " 9%", */}
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Stack direction="row">
                <Button
                  variant="contained"
                  sx={{
                    width: "19.6rem",
                    height: "1.7rem",
                    textTransform: "capitalize",
                    background: "#FFD814",
                    color: "#000",
                  }}
                  className="buttonStyle"
                >
                  Continue
                </Button>
              </Stack>
            </CardActions>
            <Typography
              sx={{
                fontSize: " 11px",
                marginTop: " 9%",
                width: "19rem",
                margin: "auto",
                // marginTop: " 7%",
              }}
            >
              By continuing, you agree to Amazon's
              <a href="#">Conditions of Use</a>
              and<a href="#"> Privacy Notice</a> Privacy Notice.
            </Typography>
            <Typography
              sx={{
                fontSize: " 11px",
                marginTop: " 9%",
                width: "19rem",
                margin: "auto",
                // marginTop: " 7%",
              }}
            >
              <a href="#">Need Help</a>
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "14px", fontWeight: "bold", color: "black" }}
            >
              Buying for work?
              <Typography
                sx={{
                  fontSize: " 11px",
                  marginTop: " 9%",
                  width: "19rem",
                  margin: "auto",
                  // marginTop: " 7%",
                }}
              >
                <a href="#">Shop on Amazon Business</a>
              </Typography>
            </Typography>{" "}
            <hr />
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Stack direction="row">
                <Button
                  variant="contained"
                  sx={{
                    width: "19.6rem",
                    height: "1.7rem",
                    textTransform: "capitalize",

                    color: "#000",
                  }}
                  className="buttonStyle"
                >
                  Continue
                </Button>
              </Stack>
            </CardActions>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default SignIn;
