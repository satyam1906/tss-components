import {
  Button,
  AppBar,
  Typography,
  Box,
  Grid,
  ButtonGroup,
} from "@mui/material";
import { useState } from "react";
import StoreIcon from "@mui/icons-material/Store";
import SubNavbar from "./SubNavbar";

const Navbar = () => {
  const pages = ["MEN", "WOMEN", "KIDS"];
  const utilOptions = ["TRACK ORDER", "CONTACT US", "DOWNLOAD APP"];

  // const [isActive, setIsActive] = useState(false);
  const [activePage, setActivePage] = useState(pages[0]);
  const activeStyle = {
    bgcolor: "white",
    color: "#58595b",
    paddingX: 4,
    display: "block",
    fontWeight: 700,
    fontFamily: "monospace",
    fontSize: "1.2rem",
    textTransform: "uppercase",
    letterSpacing: ".1rem",
    textDecoration: "none",
    borderRadius: "0",
    "&:hover": {
      bgcolor: "white",
      color: "#58595b",
      borderRadius: "0",
    },
  };

  const inactiveButtonStyle = {
    color: "white",
    paddingX: 4,
    display: "block",
    fontWeight: 700,
    fontFamily: "monospace",
    fontSize: "1.2rem",
    textTransform: "uppercase",
    letterSpacing: ".1rem",
    textDecoration: "none",
    borderRadius: "0",
    "&:hover": {
      bgcolor: "#ef8d91",
      color: "white",
      borderRadius: "0",
    },
  };

  return (
    <>
      <AppBar sx={{ bgcolor: "#e01b24" }} position="static">
        {/* <Toolbar sx={{paddingY:0}} disableGutters={true}> */}
        <Grid container display={"flex"}>
          <Grid
            item
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            xs={2}
          >
            <StoreIcon />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontWeight: 200,
                fontFamily: "Source  Sans Pro, sans-serif",
                color: "white",
                letterSpacing: ".2rem",
                textDecoration: "none",
              }}
            > 
              TBD
            </Typography>
          </Grid>
          <Grid display={"flex"} item xs={7}>
            {pages.map((page) => (
              <ButtonGroup key={pages.indexOf(page)}>
                <Button
                  variant="text"
                  onClick={() => setActivePage(page)}
                  sx={activePage === page ? activeStyle : inactiveButtonStyle}
                >
                  {page}
                </Button>
              </ButtonGroup>
            ))}
            {/* </Box> */}
          </Grid>
          <Grid display={"flex"} item xs={3}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {utilOptions.map((util) => (
                <Button
                  variant="text"
                  key={utilOptions.indexOf(util)}
                  sx={{
                    color: "white",
                    display: "block",
                    fontWeight: 700,
                    fontFamily: "Source  Sans Pro, sans-serif",
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    height: "100%",
                  }}
                >
                  {util}
                </Button>
              ))}
            </Box>
          </Grid>
        </Grid>
      </AppBar>
      <SubNavbar />
    </>
  );
};

export default Navbar;
