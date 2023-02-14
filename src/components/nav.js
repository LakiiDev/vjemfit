import React from "react";
import styled from "styled-components";

const Nav = ({ navToggle, setNavToggle, section }) => {
  const navToggleHandler = async () => {
    setNavToggle(!navToggle);
  };
  if (section === "header") {
    return (
      <Navigation className={`${navToggle ? "active" : ""}`}>
        <p>
          Vjem<span>FIT</span>
        </p>
        <NavList className={`${navToggle ? "activeNav" : ""}`}>
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
        <div
          className="hamburger-menu"
          onClick={() => {
            navToggleHandler();
          }}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
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
  position: relative;
  p {
    color: #fff;
    font-weight: 600;
  }
  span {
    color: #ff4f5e;
  }
  .hamburger-menu {
    display: none;
  }
  @media (max-width: 1500px) {
    max-width: 100%;
    margin: 5rem 2rem;
  }
  @media (max-width: 800px) {
    li {
      display: none;
    }
    .activeNav {
      flex-direction: column;
      position: absolute;
      top: 5rem;
      left: 0;
      padding-left: 0;
      width: 100%;
      padding: 7rem 0;
      border-radius: 2rem;
      li {
        display: block !important;
        text-align: center;
        a {
          margin-left: 0;
        }
      }

      z-index: 101;
      background-color: #000;
      //transform hamburger menu to x
    }
    .hamburger-menu {
      display: block;
      cursor: pointer;
      background-color: #ff4450;
      padding: 1.5rem;
      .bar {
        transition: all 0.5s ease;
        width: 3rem;
        height: 0.5rem;
        background-color: #fff;
        margin: 0.5rem;
      }
    }
    &.active {
      //transform hamburger menu to x in the middle of div
      .hamburger-menu {
        .bar {
          transition: all 0.5s ease;
          &:nth-child(1) {
            transform: rotate(45deg);
            transform-origin: top left;
            translate: 0.5rem;
          }
          &:nth-child(2) {
            opacity: 0;
            transform-origin: center;
          }
          &:nth-child(3) {
            transform: rotate(-45deg);
            transform-origin: bottom left;
            translate: 0.5rem;
          }
        }
      }
    }
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
