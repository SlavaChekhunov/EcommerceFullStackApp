import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem"

const Wrapper = styled.div`
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
`

const CategoryList = styled.ul`
    list-style: none;
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;

const Categories = () => {
    return (
        <>
            <Wrapper>
                <CategoryList>
                    {categories.map((item) =>(
                        <CategoryItem item={item} key={item.id}/>
                    ))}
                </CategoryList>
            </Wrapper>
        </>
    );
}

export default Categories  