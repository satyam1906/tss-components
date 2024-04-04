import {
  createTheme,
  ThemeProvider,
  Container,
  Grid,
  Typography,
  Box,
  Divider,
  Chip,
  TextField,
  Paper,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Select, MenuItem, FormControl, Button } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import AssignmentReturnOutlinedIcon from "@mui/icons-material/AssignmentReturnOutlined";

const sizeAvailable = ["XS", "S", "M", "L", "XL", "XXL"];
const quantity = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];
const materialInfo = [
  "Premium Heavy Gauge Fabric",
  "100% Cotton ",
  "Machine Wash",
];

const company = {
  name: "The Souled Store Pvt. Ltd.",
  addressLine1: "224, Tantia Jogani Industrial Premises",
  addressLine2: "J.R. Boricha Marg",
  addressLine3: "Lower Parel (E)",
  city: "Mumbai - 11",
  email: "connect@thesouledstore.com",
};

const ProductPage = () => {
  const [buyQuantity, setBuyQuantity] = useState(1);

  const theme = createTheme({
    components: {
      MuiTypography: {
        variants: [
          {
            props: {
              variant: "body3",
            },
            style: {
              fontSize: 12,
            },
          },
        ],
      },
    },
  });

  const handleChange = (e) => {
    setBuyQuantity(e.target.value);
  };
  return (
    <>
      <Container sx={{ marginTop: 5 }} maxWidth="xl">
        <ThemeProvider theme={theme}>
          <Grid container spacing={2}>
            <Grid display={"flex"} item xs={7} marginLeft={2}>
              <Grid container display={"flex"}>
                <Grid
                  item
                  xs={6}
                  display={"flex"}
                  justifyContent={"space-around"}
                >
                  <img
                    style={{ height: 550, width: 400 }}
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
            <Grid item xs={4.5}>
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
                    width={"100%"}
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
                <Paper
                  sx={{
                    marginTop: 3,
                    display: "flex",
                    justifyContent: "space-between",
                    paddingY: 1,
                    paddingX: 1,
                  }}
                  elevation={2}
                >
                  <AssignmentReturnOutlinedIcon />
                  <Typography variant="body3" sx={{ marginLeft: 1 }}>
                    This product is eligible for return or exchange under our
                    30-day return or exchange policy. No questions asked.
                  </Typography>
                </Paper>
                <Box marginTop={3} marginBottom={2}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography fontWeight={"bold"} variant="subtitle1">
                        Product Details
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box marginLeft={1.5}>
                        <Typography fontWeight={"bold"} variant="subtitle2">
                          Material & Care:
                        </Typography>
                        {materialInfo.map((info) => (
                          <Typography variant="body2" key={info}>
                            {info}
                          </Typography>
                        ))}
                        <Box marginTop={3} display={"flex"}>
                          <Typography variant="subtitle2" fontWeight={"bold"}>
                            Country of Origin:
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            sx={{ marginLeft: 0.5 }}
                          >
                            India
                          </Typography>
                        </Box>
                        <Box
                          marginTop={3}
                          display={"flex"}
                          flexDirection={"column"}
                        >
                          <Typography fontWeight={"bold"} variant="subtitle2">
                            Manufactured & Sold By:
                          </Typography>
                          {Object.entries(company).map(([itemName, item]) => (
                            <Typography variant="body2" key={itemName}>
                              {item}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      <Typography fontWeight={"bold"} variant="subtitle1">
                        Product Description
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography fontWeight={"bold"} variant="subtitle2">
                        Official Licensed One Piece: Luffy The Pirate King
                        Oversized T-Shirts.
                      </Typography>
                      <Typography variant="body2">
                        Shop for One Piece: Luffy The Pirate King Oversized
                        T-Shirts at The Souled Store.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      </Container>
    </>
  );
};

export default ProductPage;
