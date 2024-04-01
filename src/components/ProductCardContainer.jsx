import React from "react";
import { Paper, Container, Grid, Box } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductCardContainer = () => {
  return (
    <>
      <Container sx={{marginTop:5}}>
        <Grid container spacing={3}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Grid>
      </Container>
    </>
  );
};

export default ProductCardContainer;
