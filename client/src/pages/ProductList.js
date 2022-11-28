import React from "react";
import styled from "styled-components"
import ProductListHeader from "../components/ProductListHeader";
import ProductListMain from "../components/ProductListMain";
import Footer from "../components/Footer";

const Container = styled.div``;

const ProductList = () => {
  const productListMainID = "productListMain"
  return (
    <Container>
      <ProductListHeader mainID={productListMainID}/>
      <ProductListMain />
      <Footer />
    </Container>
  );
};

export default ProductList;