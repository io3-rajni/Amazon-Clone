import * as React from "react";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import "./mainnavbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";

const AccountList = () => {
  const [open, setOpen] = React.useState(false);

  const Navigate = useNavigate();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    Navigate("/Sign-in");
    setOpen(true);
  };
  console.log("open", open);
  const signInData = JSON.parse(localStorage.getItem("Data set"));
  console.log("set data", signInData);
  return (
    <>
      <React.Fragment>
        <Button
          id="demo-customized-button2"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClickOpen}
          endIcon={<KeyboardArrowDownIcon />}
          sx={{
            border: "none",
            color: "white",
            background: "transparent",
            textTransform: "capitalize",
          }}
          className="Account-list"
        >
          <Typography component="div">
            <Typography
              variant="h6"
              component="span"
              sx={{ display: { xs: "none", sm: "block", fontSize: "13px" } }}
              // className="delivery-add"
            >
              Hello, {signInData?.name ? signInData?.name : "sign in"}
            </Typography>
            <Typography
              variant="h6"
              component="span"
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  fontSize: "13px",
                  fontWeight: "900",
                },
              }}
              className="update-location"
            >
              Account & List
            </Typography>
          </Typography>
        </Button>
      </React.Fragment>
    </>
  );
};

export default AccountList;
