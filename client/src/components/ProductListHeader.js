import React from "react";
import Announcement from "./Announcement";
import Navbar from "./Navbar";

const ProductListHeader = ({ mainID }) => {
    return (
        <header>
            <Announcement message={"Summer Sale! Buy one and get one free"} mainID={mainID}/>
            <Navbar />
        </header>
    );
};
export default ProductListHeader;