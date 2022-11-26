import React from "react";
import Categories from "./Categories";
import Products from "./Products";

const HomeMain = (props) => {
    return (
        <main id="homeMain">
            <Categories />
            <Products />
        </main>
    );
};
export default HomeMain;