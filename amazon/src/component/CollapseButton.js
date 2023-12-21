import React from "react";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./Navbar/mainnavbar.css";
const CollapseButton = (props) => {
  const [rootExpanded, setRootExpanded] = React.useState(false);
  const [nestedExpanded, setNestedExpanded] = React.useState(false);
  const { collapseData } = props;
  const s = "2rem";
  const handleShowData = () => {
    setRootExpanded(!rootExpanded);
    setNestedExpanded(!rootExpanded);
  };

  return (
    <div style={{ display: "block" }}>
      {!rootExpanded ? (
        <Button onClick={handleShowData}>
          See All <KeyboardArrowDownIcon />
        </Button>
      ) : (
        ""
      )}

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Collapse in={rootExpanded} collapsedSize={s}>
          <List>
            {collapseData?.map((text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={index?.title}
                    sx={{ paddingTop: "12px", paddingBottom: "0px", margin: 0 }}
                  />
                  {/* <ListItemIcon> */}
                  <KeyboardArrowRightIcon />
                  {/* </ListItemIcon> */}
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Button
            onClick={() => {
              setRootExpanded(!rootExpanded);
              setNestedExpanded(!rootExpanded);
            }}
          >
            See Less
            <KeyboardArrowUpIcon />
          </Button>
          {/* </Collapse> */}
        </Collapse>
      </div>
    </div>
  );
};

export default CollapseButton;
