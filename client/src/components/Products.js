import styled from "styled-components";
import {popularProducts} from "../data"
import Product from "./Product";
import React from "react";

const Wrapper = styled.div`
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
`

const ProductsList = styled.ul`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
`;

const Products = ({cat,filters,sort}) => {

    console.log(cat,filters,sort)
    
    return (
        <section>
            <Wrapper>
                <ProductsList>
                    {popularProducts.map(item=> (
                        <Product item={item} key={item.id}/>
                    ))}
                </ProductsList>
            </Wrapper>
        </section>
    )
}

export default Products;