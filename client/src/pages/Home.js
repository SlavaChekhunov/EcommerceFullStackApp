import React from "react";
import HomeHeader from "../components/HomeHeader";
import HomeMain from "../components/HomeMain";
import Footer from "../components/Footer";
import ProductList from "./ProductList";
import Product from "./Product";
import Login from "./Login";
import Register from "./Register";

const Home = () => {
  const homeID = "homeMain"
  return (
    <>
      {/* <HomeHeader mainID={homeID} /> */}
      {/* <HomeMain /> */}
      {/* <Footer /> */}
      {/* <Product /> */}
      {/* <Login /> */}
      <Register />
    </>
  )
}; 

export default Home