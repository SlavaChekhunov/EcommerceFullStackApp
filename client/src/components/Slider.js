import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

//check out props for styled components that allow you to separate different arrows. direction is a prop, left or right.
//issues: figure out why the left one cannot be moved 10px to the left. 

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
`;

const Slide = styled.div`
   display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;
const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 80%;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`;

const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing; 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const Arrow = styled.div`
    cursor: pointer;
    opacity: 0.75;
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: ${(props)=> props.direction ==='right' && '10px'}
    // left: ${(props)=> props.direction ==='left' && '10px'}
`;


const Slider = () => {
  return (
    <Container>
        <Arrow direction='left'>
            <ArrowLeftOutlinedIcon />
        </Arrow>
        <Wrapper>
            <Slide bg='f5f1fd'>
            <ImageContainer>
                <Image />
            </ImageContainer>
            <InfoContainer>
                <Title></Title>
                <Description></Description>
                <Button></Button>
            </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction='right'>
            <ArrowRightOutlinedIcon />
        </Arrow>
    </Container>


  )
};

export default Slider;
