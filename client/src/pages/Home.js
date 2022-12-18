import React from "react";
import HomeHeader from "../components/HomeHeader";
import HomeMain from "../components/HomeMain";
import Footer from "../components/Footer";
import Snowfall from "react-snowfall";

const Home = () => {
  const homeID = "homeMain"
  return (
    <>
      <HomeHeader mainID={homeID} />
      <HomeMain />
      <Footer />
      <Snowfall />
    </>
  )
}; 

export default Home