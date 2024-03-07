import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import {
  Button,
  CardActions,
  Card,
  Typography,
  InputBase,
  Box,
  FormControl,
  Stack,
  CardContent,
  Divider,
  Tooltip,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import amazone from "../../../../assets/amazone.png";
import "../../Navbar/mainnavbar.css";
import { useLocation } from "react-router-dom";
// import "../../Navbar/mainnavbar.css";
import { useNavigate } from "react-router-dom";

// import SignIn from "./SignIn";
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
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CreateAccount = () => {
  const [tooltipOpen, setTooltiopOpen] = React.useState(false);
  //   const location = useLocation();
  //   const { fromPassword } = location.state;
  //   let data = fromPassword?.newObj;
  // console.log("formpassward", data);
  const positionRef = React.useRef({
    x: 0,
    y: 0,
  });
  const popperRef = React.useRef(null);
  const areaRef = React.useRef(null);

  const handleTooltip = () => {
    setTooltiopOpen(true);
  };
  return (
    <>
      <Box component="div" sx={{ display: "grid", justifyContent: "center" }}>
        <img src={amazone} style={{ height: "5rem" }} />
        <Card sx={{ maxWidth: 350, height: "30rem" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Create Account
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "black",
                padding: "10px 2px 2px 15px",
              }}
            >
              Your Name
            </Typography>

            <Box component="form" noValidate>
              <FormControl variant="standard">
                <BootstrapInput
                  id="bootstrap-input"
                  type="text"
                  placeholder="First Name & Last Name"
                  sx={{
                    width: "20rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                />
              </FormControl>
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "black",
                padding: "10px 2px 2px 15px",
              }}
            >
              Mobile Number
            </Typography>

            <Box component="form" noValidate>
              <FormControl variant="standard">
                <BootstrapInput
                  id="bootstrap-input"
                  type="text"
                  placeholder="Mobile Number"
                  sx={{
                    width: "20rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                />
              </FormControl>
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "black",
                padding: "10px 2px 2px 15px",
              }}
            >
              Password
            </Typography>

            <Box component="form" noValidate>
              <FormControl variant="standard">
                <BootstrapInput
                  id="bootstrap-input"
                  type="text"
                  placeholder="At least 6 character"
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
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Stack direction="row">
                <Button
                  variant="contained"
                  sx={{
                    fontSize: "13px",
                    width: "18.6rem",
                    height: "1.7rem",
                    textTransform: "capitalize",
                    background: "#FFD814",
                    color: "#000",
                  }}
                  className="buttonStyle"
                >
                  Verify Mobile number
                </Button>
              </Stack>
            </CardActions>
            <p
              style={{
                fontSize: " 13px",
                width: "90%",
                display: "flex",
                margin: "auto",
              }}
            >
              To verify your number, we will send you a text message with a
              temporary code. Message and data rates may apply.
            </p>
            <Typography variant="h6" component="div" sx={{ display: "flex" }}>
              <Checkbox {...label} className="linkTag2" />

              <Typography className="linkTag2">Keep me signed in</Typography>
              <Tooltip
                title="Choosing Keep me signed in reduces the number of times youre asked to Sign-In on this device  To keep your account secure use this option only on your personal devices"
                placement="top"
                arrow
                PopperProps={{
                  popperRef,
                  anchorEl: {
                    getBoundingClientRect: () => {
                      return new DOMRect(
                        positionRef.current.x,
                        areaRef.current.getBoundingClientRect().y,
                        0,
                        0
                      );
                    },
                  },
                }}
              >
                <Box ref={areaRef} sx={{ display: "flex" }}>
                  <a href="#" className="linkTag1">
                    Need Help
                  </a>
                  <Typography>
                    <ArrowDropDownIcon
                      className="linkTag3"
                      ref={areaRef}
                      onClick={handleTooltip}
                    />
                  </Typography>
                </Box>
              </Tooltip>
            </Typography>

            <Typography
              component="div"
              // sx={{ display: "flex", marginTop: "7%" }}
            >
              <hr style={{ width: "20rem", marginTop: "2%" }} />
            </Typography>
            <Typography
              component="span"
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                fontSize: " 13px",
              }}
            >
              Already have an account?
              <a href="/Sign-in" className="linkTag4">
                SignIn
              </a>
            </Typography>

            <Stack direction="row" sx={{ marginTop: "20px" }}>
              <Button
                variant="contained"
                sx={{
                  width: "17rem",
                  height: "1.7rem",
                  margin: "auto",
                  textTransform: "capitalize",
                  background: "#fff",
                  color: "#000",
                }}
                className="createAccountButton"
              >
                Get OTP on your Number
              </Button>
            </Stack>
          </Box>
        </Card>
      </Box>
      <Divider sx={{ marginTop: "2%" }} />
      <Box
        variant="h6"
        sx={{
          width: "100%",
          paddingTop: "2%",
          background: "#FBFBFB",
          height: "8rem",
        }}
      >
        <Typography
          component="div"
          sx={{ display: "flex", justifyContent: "center", fontSize: "11px" }}
        >
          <a href="#" style={{ marginRight: "20px" }} className="linkTag">
            Conditions of Use
          </a>
          <a href="#" className="linkTag">
            Privacy Notice
          </a>
          <a href="#" style={{ marginLeft: "20px" }} className="linkTag">
            Help
          </a>
        </Typography>
        <Typography
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1%",
            fontSize: "11px",
          }}
        >
          © 1996-2024, Amazon.com, Inc. or its affiliates
        </Typography>
      </Box>
    </>
  );
};

export default CreateAccount;
