import * as React from "react";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const preventDefault = (event) => event.preventDefault();

const Navbar = () => {
  return (
    <>
      <Typography component="div" sx={{ display: "flex" }}>
        <IconButton
          // size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography sx={{ paddingTop: "10px", listStyleType: "none" }}>
          <Box
            sx={{
              typography: "body1",
              "& > :not(style) ~ :not(style)": {
                ml: 2,
              },
            }}
            onClick={preventDefault}
          >
            <Link href="#">Link</Link>
            <Link href="#">
              Link
              {/* {'color="inherit"'} */}
            </Link>
            <Link href="#">
              Link
              {/* {'variant="body2"'} */}
            </Link>
            <Link href="#">Link</Link>
            <Link href="#">Link</Link>
            <Link href="#">Link</Link>
            <Link href="#">Link</Link>
            <Link href="#">Link</Link>
            <Link href="#">Link</Link>
            <Link href="#">Link</Link>
          </Box>
        </Typography>
      </Typography>
    </>
  );
};
export default Navbar;
