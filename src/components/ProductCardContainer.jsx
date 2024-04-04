import {  Container, Grid } from "@mui/material";
import ProductCard from "./ProductCard";
// import data from '../assets/'

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
