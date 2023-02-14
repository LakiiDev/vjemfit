import React, { useState } from "react";
import Trainers from "./components/trainers";
import Classes from "./components/classes";
import Header from "./components/header";
import Nav from "./components/nav";
import Pricing from "./components/pricing";
import Social from "./components/social";
import Footer from "./components/footer";
import styled from "styled-components";
const Home = () => {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <div className={`${navToggle ? "active" : ""}`}>
      <Nav navToggle={navToggle} setNavToggle={setNavToggle} section="header" />
      <Header />
      <Classes />
      <Trainers />
      <Pricing />
      <Social />
      <Footer />
      <Overlay className={`${navToggle ? "active" : ""}`} />
    </div>
  );
};
export default Home;

const Overlay = styled.div``;
