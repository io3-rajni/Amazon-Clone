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
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import amazone from "../../../../assets/amazone.png";
import "../../Navbar/mainnavbar.css";
import { Navigate, useNavigate } from "react-router-dom";
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
const SignIn = () => {
  const [needData, setNeedData] = React.useState(false);
  const [numberEmail, setNumberEmail] = React.useState();
  const [entreValidNumber, setEnterValidNumber] = React.useState(false);
  const [checkNumberOrEmail, setCheckNumberOrEmail] = React.useState("Number");
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  const numberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
  const navigate = useNavigate();
  const handleNeedHelp = () => {
    setNeedData(() => !needData);
  };
  const handleCreateAccount = () => {
    navigate("/CreateAccount");
  };
  const handleNumberEmail = (e) => {
    const newVal = e?.target?.value;
    if (numberRegex.test(newVal)) {
      setNumberEmail(newVal);
      if (newVal.length == 10) {
        setEnterValidNumber(false);
        setCheckNumberOrEmail("Number");
      } else {
        setEnterValidNumber(true);
      }
    } else if (emailRegex.test(newVal)) {
      setNumberEmail(newVal);
      setEnterValidNumber(false);
      setCheckNumberOrEmail("Email");
    } else {
      setEnterValidNumber(true);
    }
  };
  const handleButton = () => {
    const newObj = {
      value: numberEmail,
      flag: checkNumberOrEmail,
    };

    if (numberEmail && !entreValidNumber)
      navigate("/passwordPage", { state: { fromPassword: { newObj } } });

    localStorage.setItem(
      "RegexData",
      JSON.stringify({
        numberEmail: numberEmail,
        entreValidNumber: entreValidNumber,
      })
    );
  };

  return (
    <>
      <Box component="div" sx={{ display: "grid", justifyContent: "center" }}>
        <img src={amazone} style={{ height: "5rem" }} />
        <Card sx={{ maxWidth: 350, height: "23rem" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
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
                  type="text"
                  onChange={(e) => handleNumberEmail(e)}
                  sx={{
                    width: "20rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                />
                {entreValidNumber ? (
                  <Typography sx={{ color: "red", fontSize: "12px" }}>
                    Enter Valid Number Email
                  </Typography>
                ) : (
                  ""
                )}
              </FormControl>
            </Box>
          </CardContent>
          <Box>
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
                  onClick={handleButton}
                >
                  Continue
                </Button>
              </Stack>
            </CardActions>
            <Typography
              sx={{
                fontSize: " 12px",
                width: "18.5rem",
                margin: "auto",
              }}
            >
              By continuing, you agree to Amazon's
              <a href="#" className="linkTag">
                Conditions of Use
              </a>
              and Privacy Notice
              <a href="#" className="linkTag">
                Privacy Notice.
              </a>
            </Typography>

            <Typography
              sx={{ display: "flex", marginLeft: "18px", marginTop: "12px" }}
            >
              {needData ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
              <Typography
                sx={{
                  fontSize: " 13px",
                  marginTop: "3px",
                  width: "19rem",
                }}
                onClick={handleNeedHelp}
              >
                <a href="#" className="linkTag">
                  Need Help
                </a>
              </Typography>
            </Typography>
            {needData ? (
              <Typography
                sx={{
                  fontSize: " 13px",
                  marginTop: "12px",
                  width: "19rem",
                  lineHeight: "1.4rem",
                  marginTop: "2px",
                  paddingLeft: "42px",
                }}
              >
                <a href="#" className="linkTag">
                  Forgot Password
                </a>
                <br />
                <a href="#" className="linkTag">
                  Other issues with Sign-In
                </a>
              </Typography>
            ) : (
              ""
            )}

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
              <a href="#" className="linkTag">
                Shop on Amazon Business
              </a>
            </Typography>
          </Box>
        </Card>
        <Typography component="div" sx={{ display: "flex", marginTop: "7%" }}>
          <hr style={{ width: "7rem", marginTop: "2%" }} />
          <Typography sx={{ fontSize: "12px" }}>New to Account ?</Typography>
          <hr style={{ width: "7rem" }} />
        </Typography>
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
            onClick={handleCreateAccount}
          >
            Create Amazone Account
          </Button>
        </Stack>
      </Box>
      <Divider sx={{ marginTop: "2%" }} />
      <Box
        variant="h6"
        sx={{
          width: "100%",
          paddingTop: "2%",
          background: "#FBFBFB",
          height: "7.9rem",
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

export default SignIn;
