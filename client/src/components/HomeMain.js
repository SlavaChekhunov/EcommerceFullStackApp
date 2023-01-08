import React from "react";
import styled from "styled-components"
import Categories from "./Categories";
import Products from "./Products";
import Newsletter from "./Newsletter";

const Container = styled.main``;

const HomeMain = () => {
    return (
        <Container id="homeMain">
            <Categories />
            <Products />
            <Newsletter />
        </Container>
    );
};
export default HomeMain;