import React from "react";
import Announcement from "./Announcement";
import Navbar from "./Navbar";
import Slider from "./Slider";

const Header = () => {
    return (
        <header>
            <Announcement />
            <Navbar />
            <Slider />
        </header>
    );
};
export default Header;