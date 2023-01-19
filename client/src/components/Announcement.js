import React from "react";
import styled from "styled-components";
import SkipLink from "./SkipLink"
import { mobile, tablet, smallDesktop} from "../responsive"

const Container = styled.div`
    height: 3.5rem;
    background-color: #d80621;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: bold;
    ${mobile({ 
      fontSize: ".85rem",
      height: "3rem"
    })}
`

const Announcement = ({message, mainID}) => {
  return (
    <Container>
      <SkipLink mainID={mainID}/>
      <p>{message}</p>
    </Container>
  )
};

export default Announcement;
