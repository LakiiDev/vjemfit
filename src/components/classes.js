import React from "react";
import styled from "styled-components";
import newPage from "../assets/images/right-up-arrow.svg";
import tile1 from "../assets/images/man-lifting.jpg";
import tile4 from "../assets/images/man-lifting2.jpg";
import tile5 from "../assets/images/woman-exer.jpg";
import milan from "../assets/icons/milan-jack-pfp.png";
const Classes = () => {
  return (
    <OurClassesWrapper>
      <OurClasses>
        <Heading>
          <div className="text">
            <h2>Our Classes</h2>
            <p>
              I have been learning from the best healers of our generation, and
              the best bodybuilders/powerliFters, to come up with the best
              holistic method to clean the body while also packing on muscle.
              this took 4-5 years of trial and error on my own body, while alos
              studying bio chemistry, exersice science.
            </p>
          </div>
          <div className="categories">
            <div className="category">
              <h3>Men</h3>
              <img src={newPage} alt="" />
            </div>
            <hr />
            <div className="category">
              <h3>Woman</h3>
              <img src={newPage} alt="" />
            </div>
            <hr />
            <div className="category">
              <h3>Kids</h3>
              <img src={newPage} alt="" />
            </div>
            <hr />
          </div>
        </Heading>
        <Grid>
          <div className="tile">
            <img src={tile1} alt="" />
          </div>
          <div className="tile author-tile">
            <div className="author">
              <img src={milan} alt="" />
              <h5>Milan Jack</h5>
            </div>
            <h3>
              Training <br />
              Experiences
            </h3>
            <img src={newPage} alt="" className="arrow" />
          </div>
          <div className="tile text-tile">
            <h3>Create and personalize your workout routine</h3>
          </div>
          <div className="tile">
            <img src={tile4} alt="" />
          </div>
          <div className="tile">
            <img src={tile5} alt="" />
          </div>
        </Grid>
      </OurClasses>
    </OurClassesWrapper>
  );
};
export default Classes;

const OurClassesWrapper = styled.div`
  background: #121314;
`;
const OurClasses = styled.div`
  max-width: 144rem;
  margin: 0 auto;
  padding-bottom: 10rem;
`;
const Heading = styled.div`
  display: flex;
  padding-bottom: 7rem;
  padding-top: 5rem;
  .text {
    flex: 1.3;

    p {
      color: #b9babc;
      max-width: 80%;
      font-size: 1.8rem;
      line-height: 150%;
    }
    h2 {
      color: #fff;
    }
  }
  .categories {
    flex: 0.7;
    margin-top: 2rem;
    .category {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.8rem;
      color: #fff;
      margin-top: 3rem;
      margin-bottom: 3rem;
      img {
        padding: 1rem;
        background-color: #ff4450;
      }
    }
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 5rem;
  column-gap: 5rem;
  .tile {
    color: #fff;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .author-tile {
    display: flex;
    flex-direction: column;
    grid-column: 2/4;
    background-color: #0e0f10;
    padding: 4rem 4rem 4rem 4rem;
    .author {
      display: flex;
      gap: 2rem;
      align-items: center;
      h5 {
        font-size: 1.8rem;
      }
      img {
        height: 6.4rem;
        width: 6.4rem;
      }
    }
    h3 {
      margin-top: 3rem;
      font-size: 6.4rem;
      color: #ff4f5e;
      margin-bottom: 0rem;
    }
    .arrow {
      height: 3.2rem;
      width: 3.2rem;
      padding: 2.5rem;
      border: 0.25rem solid #ff4f5e;
      align-self: flex-end;
      filter: invert(50%) sepia(55%) saturate(4357%) hue-rotate(326deg)
        brightness(102%) contrast(105%);
    }
  }
  .text-tile {
    background-color: #fff;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 5rem;
    font-size: 3.4rem;
    font-weight: 600;
  }
`;
