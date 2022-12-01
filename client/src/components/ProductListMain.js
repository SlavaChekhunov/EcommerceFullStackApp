import React, { useState } from "react";
import styled from "styled-components";
import FilterContainer from "./FilterContainer";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { useLocation } from "react-router-dom";

const Wrapper = styled.div`
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
`;
const Title = styled.h2`
    margin: 20px;
`;

const ProductListMain = (props) => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];

    const [filter, setFilter] = useState({});
    const [sort, setSort] = useState({});

    const handleFilters = (e) => {
      const value = e.target.value;
      setFilter({
        ...filter,
        [e.target.name]: value,
      });
    };

    return (
      <main id="productListMain">
        <Wrapper>
          <Title>Dresses</Title>
          <FilterContainer />
        </Wrapper>
        <Products cat={cat} filters={filter} sort={sort} />
        <Newsletter />
      </main>
    );
};
export default ProductListMain;