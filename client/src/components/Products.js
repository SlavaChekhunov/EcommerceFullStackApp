import styled from "styled-components";
import Data from "../DataFake";
import Product from "./Product";

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
            <Data/>
        </Container>
        </>
    )
}

export default Products;