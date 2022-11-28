import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Container = styled.footer`
`
const Wrapper = styled.div`
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
`
const NavigationMenu = styled.nav`
    display: flex;
    justify-content: space-between;
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
`
const Title = styled.h3`
    margin-bottom: 1.5rem;
`
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
`

const Right = styled.ul`
    flex: 1;
    padding: 20px;
`
const LogoContainer = styled.li``

const Logo = styled.h2`
    text-transform: uppercase;
`

const Description = styled.li`
    margin: 1.25rem 0;
`

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
                                <Logo>
                                    Summer
                                </Logo>
                            </LogoContainer>
                            <Description>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ea numquam modi facere est repellat beatae eaque, ipsam, sit at doloribus vero incidunt! Eveniet?
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
                                <ListItem>Men</ListItem>
                                <ListItem>Women</ListItem>
                                <ListItem>Accessories</ListItem>
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
                                <ContactItem><PlaceIcon/> <p>622 Dixie Path, South Tobinchester, 98336</p></ContactItem>
                                <ContactItem>
                                    <PhoneIcon /> 
                                    <p>+1 234 56 78</p>
                                </ContactItem>
                                <ContactItem>
                                    <MailOutlineIcon /> 
                                    <p>contact@summer.co</p>
                                </ContactItem>
                            </ContactList>
                            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" alt="accepted payment options: MasterCard, Paypal, American Express, Visa, Discover"/>
                        </Right>
                    </NavigationMenu>
                </Wrapper>
            </Container>
        </>
    );
};
export default Footer;