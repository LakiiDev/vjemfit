import React from "react";
import styled from "styled-components";
import guy from "../assets/images/social-guy.jpg";
import newPage from "../assets/images/right-up-arrow.svg";
const Social = () => {
  return (
    <SocialsWrapper>
      <Socials>
        <div className="heading">
          <div className="titles">
            <h3>Follow us on</h3>
            <h2>Social Media</h2>
          </div>
          <p>
            I use to eat lots of dairy, meat, and processed junk food. i have
            always had a fast matabolism so it never effected my bodyfat, but my
            interal health was suffering. ever since i implemented the holistic
            methods noah provided.
          </p>
        </div>
        <div className="social-content">
          <img src={guy} alt="" />
          <SocialMedias>
            <SocialMedia class="first">
              <p>Instgram</p>
              <img src={newPage} alt="" />
            </SocialMedia>
            <hr />
            <SocialMedia>
              <p>Facebook</p>
              <img src={newPage} alt="" />
            </SocialMedia>
            <hr />
            <SocialMedia>
              <p>Twitter</p>
              <img src={newPage} alt="" />
            </SocialMedia>
            <hr />
            <SocialMedia>
              <p>Linkedin</p>
              <img src={newPage} alt="" />
            </SocialMedia>
            <hr />
          </SocialMedias>
        </div>
      </Socials>
    </SocialsWrapper>
  );
};
export default Social;

const SocialsWrapper = styled.div`
  background-color: #ffffff;
  padding-top: 10rem;
  padding-bottom: 15rem;
`;
const Socials = styled.div`
  max-width: 144rem;
  margin: 0 auto;
  .heading {
    display: flex;
    align-items: center;
    .titles {
      text-transform: capitalize;
      flex: 0.35;
      h3 {
        font-size: 4.8rem;
        margin-bottom: 0;
        color: transparent;
        -webkit-text-stroke-width: 3px;
        -webkit-text-stroke-color: #ff4450;
        font-weight: 600;
      }
      h2 {
        margin-top: 0rem;
      }
    }
    p {
      flex: 0.65;
      font-size: 2rem;
      line-height: 150%;
    }
  }
  .social-content {
    display: flex;
    gap: 15rem;
    img {
      flex: 0.5;
      max-width: 100%;
    }
  }
  @media (max-width: 1500px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  @media (max-width: 1100px) {
    .social-content {
      flex-direction: column;
      align-items: center;
    }
    .titles {
      h3 {
        font-size: 3.6rem !important;
      }
    }
  }
  @media (max-width: 800px) {
    .heading {
      flex-direction: column;
      align-items: center;
      padding-bottom: 5rem;
      text-align: center;
      h3 {
        font-size: 4rem !important;
      }
    }
  }
`;
const SocialMedias = styled.div`
  flex: 0.5;
  hr {
    height: 0.1rem;
    background-color: #000000;
  }
  @media (max-width: 1100px) {
    width: 70%;
  }
`;
const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
  img {
    max-height: 1.6rem !important;
    max-width: 1.6rem !important;
    padding: 1rem;
    background-color: #ff4450;
  }

  p {
    font-size: 1.8rem;
    font-weight: 500;
  }
`;
