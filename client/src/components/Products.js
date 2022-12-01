import styled from "styled-components";
import {popularProducts} from "../data"
import Product from "./Product";
import React, { useEffect, useState } from "react";
import axios from "axios";

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

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                  cat
                    ? `http://localhost:5000/api/products?category=${cat}`
                    : "http://localhost:5000/api/products"
                );
                setProducts(res.data)
            } catch (err) {
                console.log(err)
            }
        };
        getProducts()
    }, [cat]);


    // useEffect = (() => {
    
    // }, [cat, filters])

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