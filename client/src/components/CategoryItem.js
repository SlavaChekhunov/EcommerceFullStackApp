import styled from "styled-components";
import React from "react"

const Container = styled.li`
    flex: 1;
    margin: 3px;
    min-height: 70vh;
`
const Image = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: cover;
` 
const Info = styled.div``
const Title = styled.h3``
const Button = styled.button``

const CategoryItem = ({item}) => {
    
    return (
        <Container>
            <Image src={item.img} alt={item.alt}/>
            <Info />
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
        </Container>
    )
}

export default CategoryItem;