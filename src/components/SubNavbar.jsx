import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import MenuItem from "@mui/material/MenuItem";
import { Select } from "@mui/material";



const navItems = {
  "STREETWEAR EDIT": {
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
      <AppBar position="relative" sx={{ bgcolor: "white" }}>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={8} display={"flex"}>
            {Object.entries(navItems).map(([itemName,item]) => (
              <ButtonGroup key={itemName}>
                
                  {item.isDropDown?
                  (
                    <Select labelId="demo-simple-select-label" label={itemName[0]}  id="demo-simple-select" >
                      {item.dropDownItems.map((dropDownItem) => (
                        <MenuItem key={dropDownItem}>{dropDownItem}</MenuItem>
                      ))}
                    </Select>
                  ):
                  (<Button>{itemName}</Button>)}
              </ButtonGroup>
            ))}
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </AppBar>
    </>
  );
};

export default SubNavbar;
