import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { mobile } from '../responsive'

const Container = styled.footer`
`
const Wrapper = styled.div`
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
    ${mobile({
      width: "95%"
    })}
`
const NavigationMenu = styled.nav`
    display: flex;
    justify-content: space-between;
    ${mobile({
      flexDirection: "column"
    })}
`
const Left = styled.ul`
    flex: 1;
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Center = styled.ul`
    flex: 1;
    padding: 20px;
    ${mobile({
    position: "absolute",
    width: "1px",
    height: "1px",
    margin: "-1px", 
    border: "0",
    padding: "0",
    whiteSpace: "nowrap",
    clipPath: "inset(100%)",
    clip: "rect(0 0 0 0)", 
    overflow: "hidden"
  })}
`;
const Title = styled.h3`
    margin-bottom: 1.5rem;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    flex-basis: 49%;
    margin-bottom: 10px;
`;

const Right = styled.ul`
    flex: 1;
    padding: 20px;
`;
const LogoContainer = styled.li``

const Logo = styled.h2`
    text-transform: uppercase;
`;

const Description = styled.li`
    margin: 1.25rem 0;
`;

const SocialContainer = styled.li`
    display: flex;
`

const SocialList = styled.ul`
    display: flex;
    width: 100%;
    justify-content: start;
    list-style: none;
    padding: 0;
`

const SocialIcon = styled.li`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.colour};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`

const ContactList = styled.ul`
    padding: 0;
    margin: 0 0 20px 0;
    list-style: none;
`

const ContactItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    p {
        margin: 0 0 0 10px;
        padding: 0;
    }

`
const Payment = styled.img``
const Footer = () => {
    return (
      <>
        <Container>
          <Wrapper>
            <NavigationMenu>
              <Left>
                <LogoContainer>
                  <Logo>Canada Hardware</Logo>
                </LogoContainer>
                <Description>
                  Each item on this website is guaranteed in accordance with the
                  terms of any specific manufacturer's warranty. Retain all
                  written warranties and your original receipt in case of future
                  adjustment. Many of the products on this website are covered
                  by our One Year Warranty Exchange program.
                </Description>
                <SocialContainer>
                  <SocialList>
                    <SocialIcon colour="385999">
                      <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon colour="E4405F">
                      <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon colour="55ACEE">
                      <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon colour="E60023">
                      <PinterestIcon />
                    </SocialIcon>
                  </SocialList>
                </SocialContainer>
              </Left>
              <Center>
                <Title>Site Map</Title>
                <List>
                  <ListItem>Home</ListItem>
                  <ListItem>Cart</ListItem>
                  <ListItem>Monitors</ListItem>
                  <ListItem>Desktop Accessories</ListItem>
                  <ListItem>GPUs</ListItem>
                  <ListItem>My Account</ListItem>
                  <ListItem>Order Tracking</ListItem>
                  <ListItem>Wishlist</ListItem>
                  <ListItem>Careers</ListItem>
                  <ListItem>Terms</ListItem>
                </List>
              </Center>
              <Right>
                <Title>Contact</Title>
                <ContactList>
                  <ContactItem>
                    <PlaceIcon />{" "}
                    <p>5151 Yonge Street, Toronto, ON M1K 6P3</p>
                  </ContactItem>
                  <ContactItem>
                    <PhoneIcon />
                    <p>+1 416 555 5555</p>
                  </ContactItem>
                  <ContactItem>
                    <MailOutlineIcon />
                    <p>slavachekhunov@gmail.com</p>
                  </ContactItem>
                </ContactList>
                <Payment
                  src="https://i.ibb.co/Qfvn4z6/payment.png"
                  alt="accepted payment options: MasterCard, Paypal, American Express, Visa, Discover"
                />
              </Right>
            </NavigationMenu>
          </Wrapper>
        </Container>
      </>
    );
};
export default Footer;