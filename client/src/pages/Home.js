import React from "react";
import HomeHeader from "../components/HomeHeader";
import HomeMain from "../components/HomeMain";
import Footer from "../components/Footer";
import ProductList from "./ProductList";

const Home = () => {
  const homeID = "homeMain"
  return (
    <>
      <HomeHeader mainID={homeID} />
      <HomeMain />
      <Footer />
      <ProductList />
    </>
  )
}; 

export default Home