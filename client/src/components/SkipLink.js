
import styled from "styled-components";

const Anchor = styled.a`
    background-color: white;
    color: black;
    font-weight: 700;
    padding: 10px 20px;
    border: 1px solid black;
    font-size: 1.2rem;
    text-decoration: none;
    position: absolute;
    left: -9999px;
    top: auto;
    &:focus {
        left: 5px;
    }
`
const SkipLink = (props) => {
    return (
        <>
            <Anchor href="#homeMain">
                Skip to main content
            </Anchor>
        </>
    );
};
export default SkipLink;