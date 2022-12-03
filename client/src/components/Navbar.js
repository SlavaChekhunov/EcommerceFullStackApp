import styled from 'styled-components';
import Search from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Container = styled.div`
  min-height: 40px;
`
const Wrapper = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
`
const NavigationMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Left = styled.div`
display: flex;
flex: 1;
align-items: center;
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
`
const SearchContainer = styled.div`
border: 0.5px solid lightgrey;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Input = styled.input`
border: none;
`
const Center = styled.div`
flex: 1;
text-align: center;
`
const Logo = styled.h1`
font-weight: bold;
`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`
const MenuItem = styled.div`
    font-size: 1.25rem;
    cursor: pointer;
    flex: 1;
    display: flex;
    justify-content: flex-end;
`
const Navbar = () => {
  const quantity = useSelector(state=> state.cart.quantity);
  console.log(quantity);
  return (
    <Container>
      <Wrapper>
        <NavigationMenu>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input />
              <Search style={{color: 'grey', fontSize: 16}}/>
            </SearchContainer>
          </Left>
          <Center>
            <Logo>SUMMER</Logo>
          </Center>
          <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>Sign In</MenuItem>
            <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
            </Link>
          </Right>
        </NavigationMenu>
      </Wrapper>
    </Container>
  );
}

export default Navbar