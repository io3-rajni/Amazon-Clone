import React, { useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const SideBar = () => {
  const [openSideDrawer, setOpenSideDrawer] = useState(false);
  // const [textClose, setTextClose] = useState();
  const handleOpenSideDrawer = () => {
    setOpenSideDrawer(true);
  };

  const handleClose = () => {
    setOpenSideDrawer(false);
  };

  const list = (anchor) => {
    return (
      <Box
        onClick={handleClose}
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"

        //   onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
                {console.log("text1", text)}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
                {console.log("Text", text)}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };

  return (
    <>
      <React.Fragment>
        {/* <Button onClick={printName}>Button</Button> */}
        <Button onClick={handleOpenSideDrawer}>LEFT</Button>
        <SwipeableDrawer
          anchor="left"
          open={openSideDrawer}
          onClose={handleClose}
          onOpen={handleOpenSideDrawer}
        >
          {list("Left")}
        </SwipeableDrawer>
      </React.Fragment>
    </>
  );
};
export default SideBar;
