import styled from "styled-components";

const Container = styled.li`
    flex: 1;
    margin: 3px;
`
const Image = styled.img`
    max-width: 100%;
` 
const Info = styled.div``
const Title = styled.h3``
const Button = styled.button``

const CategoryItem = ({item}) => {
    
    return (
        <Container key={item.id}>
            <Image src={item.img} alt={item.alt}/>
            <Info />
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
        </Container>
    )
}

export default CategoryItem;