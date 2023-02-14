import React from "react";
import styled from "styled-components";
import Nav from "./nav";
import twitter from "../assets/icons/twitter.svg";
import facebook from "../assets/icons/facebook.svg";
import linkedin from "../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="join-program-wrapper">
        <div className="join-program">
          <h2>Ready to join this program and get 1 free program</h2>
          <div className="email">
            <input type="email" placeholder="Enter your email adress" />
            <a href="" className="button">
              Regiter now
            </a>
          </div>
        </div>
      </div>
      <Nav section="footer"></Nav>
      <div className="follow-us">
        <h3>Follow us:</h3>
        <div className="social-icons">
          <a href="">
            <img src={twitter} alt="" />
          </a>
          <a href="">
            <img src={facebook} alt="" />
          </a>
          <a href="">
            <img src={linkedin} alt="" />
          </a>
        </div>
      </div>
    </FooterContainer>
  );
};
export default Footer;

const FooterContainer = styled.footer`
  max-width: 144rem;
  margin: 5rem auto;
  margin-top: 10rem;
  .join-program-wrapper {
    width: 100%;
    background-color: #ff4450;
    text-align: center;
    display: flex;
    justify-content: center;
    padding-bottom: 5rem;
    padding-top: 5rem;
    margin-top: 0;
    .join-program {
      max-width: 40%;
      color: #fff;
      h2 {
        font-size: 4rem;
        line-height: 130%;
        font-weight: 600;
      }
      .email {
        width: 100%;
        display: flex;
        justify-content: space-between;
        input {
          flex: 0.75;
          border: none;
          padding: 1.5rem;
          font-size: 1.8rem;
          font-weight: 400;
          color: #000;
          outline: none;
        }
        a {
          flex: 0.25;
          background-color: #000;
          color: #fff;
          font-size: 1.8rem;
          font-weight: 600;
        }
      }
    }
  }
  .follow-us {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #fff;
    gap: 1.5rem;
    h3 {
      font-size: 2.4rem;
      font-weight: 400;
    }
    .social-icons {
      display: flex;
      gap: 1.5rem;
      align-items: center;
      img {
        height: 3rem;
        width: 3rem;
      }
    }
  }
  @media (max-width: 1500px) {
    margin-left: 2rem;
    margin-right: 2rem;
    .join-program {
      max-width: 50% !important;
    }
  }
  @media (max-width: 1100px) {
    .join-program {
      max-width: 60% !important;
    }
  }
  @media (max-width: 500px) {
    .email {
      flex-direction: column;
      input {
        text-align: center;
      }
    }
  }
`;
