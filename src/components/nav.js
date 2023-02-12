import React from "react";
import styled from "styled-components";

const Nav = (isFooter) => {
  if (!isFooter.isFooter) {
    return (
      <Navigation>
        <p>
          Vjem<span>FIT</span>
        </p>
        <NavList>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Experience</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="" className="button">
              Sign up
            </a>
          </li>
        </NavList>
      </Navigation>
    );
  } else {
    return (
      <Navigation>
        <p>
          Vjem<span>FIT</span>
        </p>
        <NavList>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Experience</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
        </NavList>
      </Navigation>
    );
  }
};
export default Nav;

//make styled component for nav
const Navigation = styled.nav`
  font-size: 3.2rem;
  height: 60px;
  max-width: 144rem;
  margin: 5rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: #fff;
    font-weight: 600;
  }
  span {
    color: #ff4f5e;
  }
`;
const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  align-items: center;
  a {
    font-size: 2.4rem;
    text-decoration: none;
    color: #fff;
  }
  .button {
    margin-left: 3rem;
  }
`;
