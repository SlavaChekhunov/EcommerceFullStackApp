import React from "react";
import styled from "styled-components";

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
`
const Center = styled.ul`
    flex: 1;
`
const Right = styled.ul`
    flex: 1;
`
const Logo = styled.li``

const Description = styled.li``

const Footer = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <NavigationMenu>
                        <Left>
                            <Logo>SUMMER</Logo>
                            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ea numquam modi facere est repellat beatae eaque, ipsam, sit at doloribus vero incidunt! Eveniet?</Description>
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