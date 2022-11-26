import styled from "styled-components";
import SkipLink from "./SkipLink"

const Container = styled.div`
    height: 3.5rem;
    background-color: teal;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: bold;
`

const Announcement = ({message}) => {
  return (
    <Container>
      <SkipLink />
      <p>{message}</p>
    </Container>
  )
};

export default Announcement;
