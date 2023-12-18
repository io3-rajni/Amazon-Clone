import React from "react";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

// import { ShopCategoryMoreData } from "./DataConfig";
import { Typography } from "@mui/material";
const CollapseButton = (props) => {
  const [rootExpanded, setRootExpanded] = React.useState(false);
  const [nestedExpanded, setNestedExpanded] = React.useState(false);
  const { collapseData } = props;
  const s = "2rem";
  const handleShowData = () => {
    setRootExpanded(!rootExpanded);
    setNestedExpanded(!rootExpanded);
    // setAllData(true);
  };

  return (
    <div style={{ display: "block", padding: 30 }}>
      {!rootExpanded ? <Button onClick={handleShowData}>Show All</Button> : ""}

      <div style={{ display: "flex" }}>
        <Collapse in={rootExpanded} collapsedSize={s}>
          <List>
            {collapseData?.map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text?.title} />
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
            Show Less
          </Button>
          {/* </Collapse> */}
        </Collapse>
      </div>
    </div>
  );
};

export default CollapseButton;
