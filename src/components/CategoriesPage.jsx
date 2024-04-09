import React from "react";
import { Typography, Grid, Container, Box } from "@mui/material";

import categoryMen from '../assets/categoryMen.json'

const CategoriesPage = () => {
  return (
    <>
      <Box marginTop={5} display={"flex"} justifyContent={"center"}>
        <Typography
          variant="h5"
          fontWeight={"bold"}
          textTransform={"uppercase"}
        >
          Categories
        </Typography>
      </Box>
      <Container maxWidth="xl" sx={{ "& ..css-sr8mhz-MuiContainer-root":{maxWidth: "1441px"}, marginTop: 2, flexGrow: 1 }}>

        <Grid container display={"flex"} spacing={2}>
            {categoryMen.map((category)=>(
                category.name==="First Row"?(
                <Grid item key={category.id} display={"flex"} justifyContent={"center"}   xs={4}>
                  <img style={{width:"100%"}} src={category.image} alt="error" />
                </Grid>
                )
                :(<Grid key={category.id} item xs={3}>
                <img style={{width:"100%"}} src={category.image} alt="error" />
                </Grid>)                
            ))}
            </Grid>
      </Container>
    </>
  );
};

export default CategoriesPage;
