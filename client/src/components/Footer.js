import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Container = styled.footer`

`
const Wrapper = styled.div`
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
`
const NavigationMenu = styled.nav`
    display: flex;
`
const Left = styled.ul`
    flex: 1;
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
`
const Center = styled.ul`
    flex: 1;
`
const Right = styled.ul`
    flex: 1;
`
const LogoContainer = styled.li``

const Logo = styled.h2`
    text-transform: uppercase;
`

const Description = styled.li``

const SocialContainer = styled.li``

const SocialList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
`

const SocialIcon = styled.li``

const Footer = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <NavigationMenu>
                        <Left>
                            <LogoContainer>
                                <Logo>Summer</Logo>
                            </LogoContainer>
                            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ea numquam modi facere est repellat beatae eaque, ipsam, sit at doloribus vero incidunt! Eveniet?</Description>
                            <SocialContainer>
                                <SocialList>
                                    <SocialIcon>
                                        <FacebookIcon />
                                    </SocialIcon>
                                    <SocialIcon>
                                        <InstagramIcon />
                                    </SocialIcon>
                                    <SocialIcon>
                                        <TwitterIcon />
                                    </SocialIcon>
                                    <SocialIcon>
                                        <PinterestIcon />
                                    </SocialIcon>
                                </SocialList>
                            </SocialContainer>
                        </Left>
                        <Center></Center>
                        <Right></Right>
                    </NavigationMenu>
                </Wrapper>
            </Container>
        </>
    );
};
export default Footer;