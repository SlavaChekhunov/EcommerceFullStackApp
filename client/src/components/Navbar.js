import React from "react";
import styled from 'styled-components';
import Search from '@mui/icons-material/Search';
import { santaHat } from '../data';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';

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
outline-width: 0;
`

const Center = styled.div`
flex: 1;
text-align: center;
`
const Logo = styled.h1`
font-weight: bold;
color: #d80621;
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
justify-content: center;
padding: 0 25px;
text-decoration: none;
`;


const Image = styled.img`
height: auto;
width: auto;
max-width: 100px;
max-height: 100px;
padding-right: 100px;
`;


const Navbar = () => {
  const quantity = useSelector(state=> state.cart.quantity);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login")
  }
  const handleClickTwo = () => {
    navigate("/register")
  }
  return (
    <Container>
      <Wrapper>
        <NavigationMenu>
          <Left>
            {santaHat.map((item) => (
                  <Image src={item.img} alt={item.alt} />
            ))}
            <Language>EN</Language>
            <SearchContainer>
              <Input />
              <Search style={{ color: "grey", fontSize: 16 }} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>CANADA HARDWARE</Logo>
          </Center>
          <Right>
            <MenuItem onClick={handleClickTwo}>Register</MenuItem>
            <MenuItem onClick={handleClick}>Sign In</MenuItem>
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