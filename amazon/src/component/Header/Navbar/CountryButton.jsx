import React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import "./mainnavbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    "& .MuiMenuItem-root": {
      "&:focus": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const CountryButton = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl("Rajni");
    console.log("setAnchor", event, event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="demo-customized-button2"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
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
            Lang
          </Typography>
        </Typography>
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button2",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          {/* <EditIcon /> */}
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          {/* <FileCopyIcon /> */}
          Duplicate
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          {/* <ArchiveIcon /> */}
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          {/* <MoreHorizIcon /> */}
          More
        </MenuItem>
      </StyledMenu>
    </>
  );
};

export default CountryButton;
