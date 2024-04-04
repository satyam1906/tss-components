import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";
import { Select, MenuItem, FormControl, Button } from "@mui/material";
import { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import TextField from "@mui/material/TextField";

const sizeAvailable = ["XS", "S", "M", "L", "XL", "XXL"];
const quantity = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];

const ProductPage = () => {
  const [buyQuantity, setBuyQuantity] = useState(1);

  const handleChange = (e) => {
    setBuyQuantity(e.target.value);
  };
  return (
    <>
      <Container sx={{ marginTop: 5 }} maxWidth="xl">
        <Grid container spacing={2}>
          <Grid display={"flex"} item xs={7}>
            <Grid container>
              <Grid item xs={6}>
                <img
                  style={{ height: 550, width: 400, marginRight: 10 }}
                  src="src\assets\test.jpg"
                  alt="error"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  style={{ height: 550, width: 400 }}
                  src="src\assets\test2.jpg"
                  alt="error"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5} >
            <Box>
              <Typography
                variant="h5"
                fontFamily={"Source Sans Pro, sans-serif"}
                fontWeight={"bold"}
                color={"#58595B"}
              >
                One Piece: Luffy The Pirate King
              </Typography>
              <Typography variant="subtitle2" sx={{ marginBottom: 1.5 }}>
                Oversized T-Shirts
              </Typography>
            </Box>
            <Divider />
            <Box marginTop={2.5}>
              <Typography
                variant="h6"
                fontFamily={"Source Sans Pro, sans-serif"}
                fontWeight={"bold"}
                color={"#58595B"}
              >
                ₹ 999
              </Typography>
              <Typography
                variant="subtitle2"
                fontFamily={"Source Sans Pro, sans-serif"}
                fontWeight={400}
                color={"#58595B"}
              >
                MRP incl. of all taxes
              </Typography>
            </Box>
            <Box marginTop={3}>
              <Box display={"flex"}>
                <Typography
                  variant="subtitle2"
                  fontFamily={"Source Sans Pro, sans-serif"}
                  fontWeight={"Bold"}
                  color="#58595B"
                >
                  Please select a size.
                </Typography>
                <Typography
                  variant="subtitle2"
                  fontFamily={"Source Sans Pro, sans-serif"}
                  marginLeft={2}
                  color="#58595B"
                >
                  <Link to={"#"}>SIZE CHART</Link>
                </Typography>
              </Box>
              <Box display={"flex"} marginTop={3.5}>
                {sizeAvailable.map((size) => (
                  <Chip
                    key={sizeAvailable.indexOf(size)}
                    label={size}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 1.5,
                      fontSize: "0.8rem",
                      paddingY: 2,
                      paddingX: 1.5,
                      cursor: "pointer",
                      bgcolor: "white",
                      border: "1px solid #58595B",
                    }}
                    size="small"
                  />
                ))}
              </Box>
              <Box marginTop={2.5} display={"flex"}>
                <Typography
                  variant="subtitle2"
                  fontFamily={"Source Sans Pro, sans-serif"}
                  fontWeight={"Bold"}
                  color="#58595B"
                >
                  Size not available
                </Typography>
                <Typography
                  variant="subtitle2"
                  fontFamily={"Source Sans Pro, sans-serif"}
                  marginLeft={1.5}
                  color="#58595B"
                >
                  <Link to={"#"}>Notify Me</Link>
                </Typography>
              </Box>
              <Box display={"flex"} alignItems={"center"} marginTop={3}>
                <Typography variant="subtitle2">Quantity</Typography>
                <FormControl sx={{ marginLeft: 1 }}>
                  <Select
                    displayEmpty
                    sx={{ height: 22, width: 40 }}
                    inputProps={{ IconComponent: () => null }}
                    value={buyQuantity}
                    onChange={handleChange}
                  >
                    {quantity.map((q) => (
                      <MenuItem
                        key={q}
                        sx={{ fontSize: 14, paddingX: 1 }}
                        value={parseInt(q)}
                      >
                        {q}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box marginTop={3} display={"flex"}>
                <Button
                  disableRipple
                  variant="text"
                  sx={{
                    bgcolor: "rgb(236, 61, 37)",
                    color: "white",
                    paddingX: 6,
                    display: "block",
                    fontWeight: "bold",
                    fontFamily: "monospace",
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    // letterSpacing: ".1rem",
                    textDecoration: "none",
                    borderRadius: "1",
                    ":hover": {
                      bgcolor: "rgb(236, 61, 37)",
                      color: "white",
                    },
                  }}
                >
                  ADD TO CART
                </Button>
                <Button
                  disableRipple
                  variant="text"
                  sx={{
                    bgcolor: "white",
                    color: "#148c8d",
                    marginLeft: 2,
                    paddingRight: 2,
                    display: "flex",
                    fontWeight: 300,
                    fontFamily: "monospace",
                    border: "1px solid #148c8d",
                    fontSize: "0.9rem",
                    textTransform: "uppercase",
                    // letterSpacing: ".1rem",
                    textDecoration: "none",
                    ":hover": {
                      bgcolor: "white",
                      color: "#148c8d",
                    },
                  }}
                >
                  {
                    <FavoriteBorderOutlinedIcon
                      fontSize="small"
                      sx={{ marginRight: 0.5, dontWeight: 200 }}
                    />
                  }{" "}
                  Add to Wishlist
                </Button>
              </Box>
              <Box marginTop={3} display={"flex"} alignItems={"center"}>
                <Typography variant="subtitle2" sx={{ marginRight: 1 }}>
                  Share
                </Typography>
                <WhatsAppIcon sx={{ marginX: 0.5, color: "#58595b" }} />
                <FacebookIcon sx={{ marginX: 0.5, color: "#58595b" }} />
                <TwitterIcon sx={{ marginX: 0.5, color: "#58595b" }} />
                <InstagramIcon sx={{ marginX: 0.5, color: "#58595b" }} />
              </Box>
              <Box marginTop={2}>
                <Typography variant="subtitle1" fontWeight={"bold"}>
                  Delivery Details
                </Typography>
                <Box
                  component="form"
                  marginTop={1}
                  noValidate
                  autoComplete="off"
                  display={"flex"}
                  border={"1px solid #58595b"}
                  width={500}
                  borderRadius={1}
                >
                  <TextField
                    variant="outlined"
                    placeholder="Enter your pincode"
                    sx={{
                      "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":
                        {
                          paddingY: 1,
                          width: 500,
                        },
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 1,
                        "& fieldset": { border: "none" },
                      },
                    }}
                  />
                  <Button
                    sx={{
                      m: 0,
                      paddingX: 1,
                      borderRadius: 1,
                      color: "#148c8d",
                      fontWeight: "bold",
                      ":focus": { outline: "none !important" },
                      border: "0px solid",
                    }}
                  >
                    Check
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProductPage;
