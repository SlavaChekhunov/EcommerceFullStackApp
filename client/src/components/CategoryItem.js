import styled from "styled-components";
import React from "react"
import { Link } from "react-router-dom";
import { mobile, tablet, smallDesktop } from "../responsive"

const Container = styled.li`
    flex: 1;
    margin: 3px;
    min-height: 70vh;
    position: relative;
    ${mobile({ 
        minHeight: "25vh",
        width: "100%",
        margin: "3px auto"
    })}
`;
const Image = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(1, 1, 1, 0.4);

    &:hover {
        background-color: rgba(1, 1, 1, 0.2);
        transition: 0.5s all ease-out;
    }

`;
const Title = styled.h3`
    color: white;
    margin-bottom: 20px;
    font-size: 2rem;
    text-align: center;
    ${mobile({ 
        fontSize: "1.25rem",
        maxWidth: "200px"
    })}
`;
const Button = styled.button`
    border: none;
    padding: 10px 20px;
    background-color: white;
    color: grey;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.4rem;
    ${mobile({ fontSize: "1rem"})}
`;

const CategoryItem = ({item}) => {
    
    return (
        <Container>
            <Link to={`/products/${item.cat}`}>
            <Image src={item.img} alt={item.alt}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
            </Link>
        </Container>
    )
}

export default CategoryItem;