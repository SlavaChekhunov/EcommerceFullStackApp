import styled from "styled-components";
import Data from "../DataFake";
import Product from "./Product";
import React from "react";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({data}) => {
    
    return (
        <>
            <Container>
                <Product/>
            </Container>
        </>
    )
}

export default Products;