import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
`

const Announcement = () => {
  return (
    <Container>Summer Sale! Buy one and get one free</Container>

  )
  
};

export default Announcement;
