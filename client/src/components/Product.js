import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Info = styled.ul`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  cursor: pointer;
  list-style: none;
  padding: 0;
`;

const Container = styled.li`
  flex: 1;
  margin: 5px;
  padding: 0;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &&:hover ${Info},
  &&:focus-within ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.li`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.25s ease;
  &&:hover,
  &&:focus {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({item}) => {
  return (
    <Container tabIndex={-1}>
        <Circle />
        <Image src={item.img} alt={item.alt} tabIndex={-1}/>
        <Info>
            <Icon tabIndex={0}>
                <ShoppingCartIcon />
            </Icon>
            <Icon tabIndex={0}>
                <SearchIcon />
            </Icon>
            <Icon tabIndex={0}>
                <FavoriteBorderIcon />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product
