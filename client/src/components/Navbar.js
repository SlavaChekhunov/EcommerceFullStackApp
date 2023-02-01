import React from "react";
import styled from 'styled-components';
import Search from '@mui/icons-material/Search';
import { santaHat } from '../data';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { mobile, tablet, smallDesktop } from "../responsive";

const Container = styled.div`
  min-height: 40px;
  position: relative;
`;

const Wrapper = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  ${mobile({ 
    padding: "10px 0px",
    width: "95%"
  })}
`;

const NavigationMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  z-index: 20;
  ${mobile({ height: "auto" })}
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  ${mobile({ 
    justifyContent: "flex-start",

  })}
`;

const Logo = styled.img`
  max-width: 30%;
  height: auto;
  flex-basis: 34%;
  margin: 5px 0;
  ${mobile({ 
    position: "absolute", 
    width: "1px",
    height: "1px",
    margin: "-1px",
    border: "0",
    padding: "0",
    clipPath: "inset(100%)",
    clip: "rect(0 0 0 0)",
    overflow: "hidden",
  })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  flex-basis: 9%;
  text-align: center;
  margin: 0 auto;
  padding: 0 10px;
  ${mobile({ 
    position: "absolute", 
    width: "1px",
    height: "1px",
    margin: "-1px",
    border: "0",
    padding: "0",
    clipPath: "inset(100%)",
    clip: "rect(0 0 0 0)",
    overflow: "hidden",
  })
  }
`;

const SearchForm = styled.form`
  margin: 0;
  padding: 0;
  flex-basis: 34%;
`;

const Input = styled.input`
  border: none;
  outline: none;

  ${mobile({ 
    fontSize: "0.9rem"
  })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  max-width: calc(100% - 10px);

  ${mobile({
    margin: "0",
    padding: "5 0",
    justifyContent: "flex-start"
  })}
`;

const SearchLabel = styled.label`
  position: absolute; 
  width: 1px; 
  height: 1px; 
  margin: -1px; 
  border: 0; 
  padding: 0; 
  white-space: nowrap; 
  clip-path: inset(100%); 
  clip: rect(0 0 0 0); 
  overflow: hidden;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  align-content: center;
  display: flex;
  justify-content: center;
  ${mobile({ justifyContent: "flex-end" })}
`;

const SiteTitle = styled.h1`
  font-weight: bold;
  color: #d80621;
  width: 200px;
  ${mobile({ 
    fontSize: "1.25rem",
    maxWidth: "125px",
    margin: "0"
  })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    justifyContent: "center",
    marginTop: "10px",
  })}
`;

const MenuItem = styled.div`
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  flex-basis: 32%;
  align-content: center;
  padding: 0;
  text-decoration: none;
  
  &:last-child {
    justify-content: flex-end;
  }
  ${mobile({ 
    fontSize: "1rem",
    minWidth: "60px"
  })}
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
                  <Logo src={item.img} alt={item.alt} />
            ))}
            <Language>EN</Language>
            <SearchForm>
              <SearchLabel htmlFor="search">Search:</SearchLabel>
              <SearchContainer>
                <Input id="search" placeholder="Search"/>
                <Search style={{ color: "grey", fontSize: 16 }} />
              </SearchContainer>
            </SearchForm>
          </Left>
          <Center>
            <SiteTitle>CANADA HARDWARE</SiteTitle>
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