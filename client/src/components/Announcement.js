import React from "react";
import styled from "styled-components";
import SkipLink from "./SkipLink"

const Container = styled.div`
    height: 3.5rem;
    background-color: #CC231E;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: bold;
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
