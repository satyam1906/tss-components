import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const navItems = {
  STREETWEAR: {
    isDropDown: false,
  },
  TOPWEAR: {
    isDropDown: true,
    dropDownItems: [
      "Oversized T-Shirts",
      "All T-Shirts",
      "All Shirts",
      "Polos",
      "Oversized Full Sleeve",
      "Sweatshirts",
      "Jackets",
      "Hoodies",
    ],
  },
  BOTTOMWEAR: {
    isDropDown: true,
    dropDownItems: [
      "All Bottoms",
      "Joggers",
      "Jeans",
      "Trousers",
      "Shorts",
      "Trackpants",
    ],
  },
  SNEAKERS: {
    isDropDown: false,
  },
  ACCESSORIES: {
    isDropDown: true,
    dropDownItems: [
      "Perfumes",
      "Backpacks",
      "Belts",
      "Windcheaters and Umbrellas",
      "Socks",
      "Sunglasses",
      "Watches",
      "Wallets",
    ],
  },
  COLLECTIONS: {
    isDropDown: true,
    dropDownItems: [
      "New Arrivals",
      "Best Sellers",
      "Trending",
      "Activewear",
      "Tie-Dye",
      "Hottest Deals",
    ],
  },
  THEMES: {
    isDropDown: true,
    dropDownItems: [
      "Animal Prints",
      "Camouflage",
      "Florals",
      "Graphic Tees",
      "Neon",
      "Pastels",
      "Tie-Dye",
      "Tropical Prints",
    ],
  },
  MEMBERSHIP: {
    isDropDown: false,
  },
};

const SubNavbar = () => {
  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: "white" }}>
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={9} display={"flex"}>
            {Object.entries(navItems).map(([itemName, item]) => (
              <ButtonGroup
                key={itemName}
                variant="text"
                sx={{ display: "flex" }}
              >
                <Button
                  disableRipple={true}
                  sx={{
                    color: "#3e3f45",
                    paddingX: 2,
                    paddingY: 2.3,
                    marginRight: 1,
                    display: "flex",
                    fontWeight: 600,
                    fontFamily: "Source  Sans Pro, sans-serif",
                    fontSize: "0.6 rem",
                    textTransform: "uppercase",
                    // letterSpacing: ".1rem",
                    textDecoration: "none",
                    borderRadius: "0",
                    borderBottom: "3px solid white",
                    "&:hover": {
                      bgcolor: "fbfbfb",
                      color: "#ed2d2f ",
                      borderRadius: "0",
                      borderBottom: "3px solid #ed2d2f",
                    },
                  }}
                >
                  {itemName}
                  {item.isDropDown && <ArrowDropDownIcon fontSize="small" />}
                </Button>
              </ButtonGroup>
            ))}
          </Grid>
          <Grid
            item
            xs={2}
            // border={"2px solid black"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            paddingX={1}
          >
            <SearchIcon
              sx={{
                color: "#58595b",
                display: "flex",
                marginLeft: 2,
                marginX: 1.2,
                fontSize: "2rem",
                cursor: "pointer",
              }}
              // fontSize="large"
            />
            <PersonOutlineIcon
              sx={{
                color: "#58595b",
                display: "flex",
                marginX: 1.2,
                fontSize: "2rem",
                cursor: "pointer",
                height: "100%",
                borderBottom: "3px solid white",
                "&:hover": {
                  color: "#ed2d2f",
                  borderBottom: "3px solid #ed2d2f",
                },
              }}
              // fontSize="large"
            />
            <FavoriteBorderIcon
              sx={{
                color: "#58595b",
                display: "flex",
                marginX: 1.2,
                fontSize: "2rem",
                cursor: "pointer",
                height: "100%",
                borderBottom: "3px solid white",
                "&:hover": {
                  color: "#ed2d2f",
                  borderBottom: "3px solid #ed2d2f",
                },
              }}
              // fontSize="large"
            />
            <LocalMallIcon
              sx={{
                color: "#58595b",
                display: "flex",
                marginX: 1.2,
                fontSize: "2rem",
                cursor: "pointer",
                height: "100%",
                borderBottom: "3px solid white",
                "&:hover": {
                  color: "#ed2d2f",
                  borderBottom: "3px solid #ed2d2f",
                },
              }}
              // fontSize="large"
            />
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};

export default SubNavbar;
