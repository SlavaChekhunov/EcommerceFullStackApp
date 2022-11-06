import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: coral;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`


const Slider = () => {
  return (
    <Container>
        <Arrow>
            <ArrowLeftOutlinedIcon />
        </Arrow>
        <Arrow>
            <ArrowRightOutlinedIcon />
        </Arrow>
    </Container>


  )
};

export default Slider;
