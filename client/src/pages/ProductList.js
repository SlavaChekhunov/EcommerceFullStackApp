import React, { useState } from "react";
import styled from "styled-components"
import Footer from "../components/Footer";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import { useLocation } from "react-router-dom";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const Wrapper = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = ({mainID}) => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      ...filters,
      [e.target.name]: value.toLowerCase(),
    });
  };

  return (
    <Container>
      <Wrapper>
        <Navbar />
        <Announcement
          message={"Summer Sale! Buy one and get one free"}
          mainID={mainID}
        />
        <Title>{cat}</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select name="color" onChange={handleFilters}>
              <Option disabled>Color</Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>
            <Select name="size" onChange={handleFilters}>
              <Option disabled>Size</Option>
              <Option>24"</Option>
              <Option>27"</Option>
              <Option>32"</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="newest">Newest</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
      </Wrapper>
      <Products cat={cat} sort={sort} filters={filters}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;