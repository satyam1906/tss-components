// import React from 'react'
import {
  Paper,
  Grid,
  Box,
  Typography,
  Divider,
  createTheme,
  ThemeProvider,
} from "@mui/material";

const ProductCard = () => {
  const theme = createTheme({
    components: {
      MuiTypography: {
        variants: [
          {
            props: {
              variant: "body3",
            },
            style: {
              fontSize: 13,
            },
          },
        ],
      },
    },
  });
  return (
    <>
      <Grid item xs={3}>
        <ThemeProvider theme={theme}>
          <Paper elevation={0}>
            <img
              className="product-image"
              src="../assets/test.jpg"
              alt="error"
            />
            <Box marginLeft={1}>
              <Box sx={{ paddingTop: 0.5, paddingBottom: 0.25 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                  One Piece: Luffy The Pirate King
                </Typography>
              </Box>
              <Divider />
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 400, color: "#737577" }}
                >
                  Oversized T-Shirts
                </Typography>
              </Box>
              <Box sx={{display:"flex" }} marginTop={0.5} >
                <Typography fontWeight={"Bold"} variant="body3">₹ 999</Typography>
                <Typography color={"#888888"} marginLeft={1} variant="body3" >MRP inclusive of all taxes</Typography>
              </Box>
            </Box>
          </Paper>
        </ThemeProvider>
      </Grid>
    </>
  );
};

export default ProductCard;
