import React, { useState, useEffect, useRef } from "react";
import Trainers from "./components/trainers";
import Classes from "./components/classes";
import Header from "./components/header";
import Nav from "./components/nav";
import Pricing from "./components/pricing";
import Social from "./components/social";
import Footer from "./components/footer";
import LocomotiveScroll from "locomotive-scroll";

const Home = () => {
  const [navToggle, setNavToggle] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      getDirection: true,
      multiplier: 0.5,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
      offset: 100,
    });
    // wait for images to load
    window.addEventListener("load", () => {
      scroll.update();
    });
    return () => scroll.destroy();
  }, []);
  return (
    <div
      className={`${navToggle ? "active" : ""}`}
      data-scroll-container
      ref={containerRef}
      data-scroll-speed="1"
      data-scroll-repeat
    >
      <Nav
        navToggle={navToggle}
        setNavToggle={setNavToggle}
        section="header"
        data-scroll-section
      />
      <Header data-scroll-section />
      <Classes data-scroll-section />
      <Trainers data-scroll-section />
      <Pricing data-scroll-section />
      <Social data-scroll-section />
      <Footer data-scroll-section />
    </div>
  );
};
export default Home;
