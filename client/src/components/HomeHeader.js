import React from "react";
import Announcement from "./Announcement";
import Navbar from "./Navbar";
import Slider from "./Slider";

const Header = ({mainID}) => {
    return (
        <header>
            <Announcement message={"Summer Sale! Buy one and get one free"} mainID={mainID} />
            <Navbar />
            <Slider />
        </header>
    );
};
export default Header;