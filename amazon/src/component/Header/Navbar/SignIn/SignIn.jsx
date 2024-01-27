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
  Divider,
  // Footer,
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
    width: "17.1rem",
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
      <Box component="div" sx={{ display: "grid", justifyContent: "center" }}>
        <img src={amazone} style={{ height: "5rem" }} />
        <Card sx={{ maxWidth: 350 }}>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Sign in
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "black",
                paddingLeft: "10px",
              }}
            >
              Email or mobile phone number
            </Typography>
            <Box component="form" noValidate>
              <FormControl variant="standard">
                <BootstrapInput
                  id="bootstrap-input"
                  sx={{
                    width: "20rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                />
              </FormControl>
            </Box>
          </CardContent>
          <Box>
            {/* // marginTop: " 9%", */}
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Stack direction="row">
                <Button
                  variant="contained"
                  sx={{
                    width: "18.6rem",
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
                fontSize: " 12px",
                // marginTop: " 9%",
                width: "18.5rem",
                margin: "auto",
                // marginTop: " 7%",
              }}
            >
              By continuing, you agree to Amazon's
              <a href="#">Conditions of Use</a>
              and Privacy Notice<a href="#"> Privacy Notice.</a>
            </Typography>
            <Typography
              sx={{
                fontSize: " 13px",
                marginTop: "12px",
                width: "19rem",
                // margin: "auto",
                marginTop: "10px",
                paddingLeft: "25px",
              }}
            >
              <a href="#">Need Help</a>
            </Typography>
            <hr style={{ width: "18rem" }} />
            <Typography
              variant="h6"
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "black",
                marginTop: "10px",
                paddingLeft: "25px",
              }}
            >
              Buying for work?
            </Typography>
            <Typography
              sx={{
                fontSize: " 11px",
                // marginTop: " 9%",
                width: "19rem",
                // margin: "auto",
                marginTop: "10px",
                paddingLeft: "25px",
              }}
            >
              <a href="#">Shop on Amazon Business</a>
            </Typography>
          </Box>
        </Card>
        <Typography component="div" sx={{ display: "flex", marginTop: "7%" }}>
          <hr style={{ width: "7rem" }} />
          <Typography sx={{ fontSize: "12px" }}>New to Account ?</Typography>
          <hr style={{ width: "7rem" }} />
        </Typography>
        {/* <CardActions sx={{ display: "flex", justifyContent: "center" }}> */}
        <Stack direction="row" sx={{ marginTop: "20px" }}>
          <Button
            variant="contained"
            sx={{
              width: "22rem",
              height: "1.7rem",
              textTransform: "capitalize",
              background: "#fff",
              color: "#000",
            }}
            className="createAccountButton"
          >
            Continue
          </Button>
        </Stack>
        {/* </CardActions> */}
      </Box>
      <Divider />
      <Box variant="h6" sx={{ width: "100%" }}>
        <Typography
          component="div"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <a href="#">Conditions of Use </a>
          <a href="#">Privacy Notice</a>
          <a href="#">Help</a>
        </Typography>
        <Typography
          component="div"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          © 1996-2024, Amazon.com, Inc. or its affiliates
        </Typography>
      </Box>
    </>
  );
};

export default SignIn;
