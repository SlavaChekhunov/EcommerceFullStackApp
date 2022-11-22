import styled from "styled-components";
import React from "react"

const Container = styled.li`
    flex: 1;
    margin: 3px;
    min-height: 70vh;
    position: relative;
`;
const Image = styled.img`
    max-width: 100%;
    height: auto;
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
    background-color: rgba(1, 1, 1, 0.25);
`;
const Title = styled.h3`
    color: white;
    margin-bottom: 20px;
    font-size: 2rem;
`;
const Button = styled.button`
    border: none;
    padding: 10px 20px;
    background-color: white;
    color: grey;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.4rem;
`;

const CategoryItem = ({item}) => {
    
    return (
        <Container>
            <Image src={item.img} alt={item.alt}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem;