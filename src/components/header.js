import React from "react";
import styled from "styled-components";
import heroGuy from "../assets/images/hero.png";
import circle from "../assets/images/circle.svg";
import arrow from "../assets/images/arrow.svg";
const Header = () => {
  return (
    <HeroWrapper>
      <Hero>
        <Img>
          <img src={heroGuy} alt="" className="image" />
          <img src={circle} alt="" className="circle" />
        </Img>
        <Text>
          <h1>
            <span>Transform Your</span>
            <br /> <span>Mind, Body & Health</span>
          </h1>
          <p>Heal your body in 90 days with proven holistic methods </p>
          <a href="" className="button">
            I’m Ready to Change
          </a>
        </Text>
      </Hero>
      <img src={arrow} alt="" className="arrow" />
    </HeroWrapper>
  );
};
export default Header;

const Hero = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 144rem;
  margin: 0 auto;
`;
const HeroWrapper = styled.div`
  position: relative;
  padding: 10rem;
  .arrow {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
const Img = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%;
  .circle {
    position: absolute;
    top: 20%;
    left: 5%;
  }
  .image {
    position: relative;
    z-index: 100;
  }
`;
const Text = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: #fff;
  margin-top: 2rem;
  align-items: flex-start;
  h1 {
    font-size: 6.4rem;
    font-weight: 700;
    margin: 0;
  }
  p {
    font-size: 2.4rem;
    font-weight: 400;
  }
  .button {
    font-size: 2.4rem;
    font-weight: 700;
  }
`;
