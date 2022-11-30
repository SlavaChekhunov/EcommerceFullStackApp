import React from "react";
import HomeHeader from "../components/HomeHeader";
import HomeMain from "../components/HomeMain";
import Footer from "../components/Footer";
import ProductList from "./ProductList";
import Product from "./Product";

const Home = () => {
  const homeID = "homeMain"
  return (
    <>
      {/* <HomeHeader mainID={homeID} /> */}
      {/* <HomeMain /> */}
      {/* <Footer /> */}
      <Product />
    </>
  )
}; 

export default Home