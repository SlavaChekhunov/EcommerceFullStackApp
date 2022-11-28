import React from "react";
import styled from "styled-components";
import FilterContainer from "./FilterContainer";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Wrapper = styled.div`
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
`;
const Title = styled.h2`
    margin: 20px;
`;

const ProductListMain = (props) => {
    return (
        <main id="productListMain">
            <Wrapper>
                <Title>Dresses</Title>
                <FilterContainer />
            </Wrapper>
            <Products />
            <Newsletter />
        </main>
    );
};
export default ProductListMain;