import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
`

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Image = styled.div`
    height: 75%;
    z-index: 2;
`

const Info = styled.div`

`

const Icon = styled.div`

`

const Product = ({item}) => {
  return (
    <Container>
        <Circle />
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartIcon />
            </Icon>
            <Icon>
                <SearchIcon />
            </Icon>
            <Icon>
                <FavoriteBorderIcon />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product
