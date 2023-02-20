import React from "react";
import styled from "styled-components";
import newPage from "../assets/images/right-up-arrow.svg";
import tile1 from "../assets/images/man-lifting.jpg";
import tile4 from "../assets/images/man-lifting2.jpg";
import tile5 from "../assets/images/woman-exer.jpg";
import milan from "../assets/icons/milan-jack-pfp.png";
import { motion } from "framer-motion";
import { fadeUp } from "../Animations";
const Classes = () => {
  return (
    <OurClassesWrapper>
      <OurClasses>
        <Heading
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          initial={"hidden"}
          variants={fadeUp}
        >
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
          <motion.div
            className="tile tile1"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            initial={"hidden"}
            variants={fadeUp}
          >
            <img src={tile1} alt="" />
          </motion.div>
          <motion.div
            className="tile author-tile"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            initial={"hidden"}
            variants={fadeUp}
          >
            <div className="author">
              <img src={milan} alt="" />
              <h5>Milan Jack</h5>
            </div>
            <h3>
              Training <br />
              Experiences
            </h3>
            <img src={newPage} alt="" className="arrow" />
          </motion.div>
          <motion.div
            className="tile text-tile"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            initial={"hidden"}
            variants={fadeUp}
          >
            <h3>Create and personalize your workout routine</h3>
          </motion.div>
          <motion.div
            className="tile tile2"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            initial={"hidden"}
            variants={fadeUp}
          >
            <img src={tile4} alt="" />
          </motion.div>
          <motion.div
            className="tile tile3"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            initial={"hidden"}
            variants={fadeUp}
          >
            <img src={tile5} alt="" />
          </motion.div>
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
  @media (max-width: 1500px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;
const Heading = styled(motion.div)`
  display: flex;
  padding-bottom: 7rem;
  padding-top: 5rem;
  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
    p {
      max-width: 100% !important;
      font-size: 2.4rem !important;
    }
  }
  .text {
    flex: 1.3;

    p {
      color: #b9babc;
      max-width: 80%;
      font-size: 1.8rem;
      line-height: 150%;
    }
    @media (max-width: 1100px) {
      p {
        font-size: 1.9rem;
      }
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
      &:hover {
        cursor: pointer;
        img {
          margin-top: -2rem;
          transition: all 0.3s ease-in-out;
        }
      }
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
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    .tile1 {
      grid-area: 2/1/2/2;
    }
    .tile2 {
      grid-area: 3/1/3/2;
    }
    .tile3 {
      grid-area: 3/2/3/3;
    }
    .author-tile {
      grid-area: 1/1/1/3 !important;
    }
    .text-tile {
      grid-area: 2/2/2/3;
    }
  }
  @media (max-width: 800px) {
    .text-tile {
      font-size: 2.4rem !important;
    }
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr) !important;
    max-width: 100% !important;
    .tile1 {
      grid-area: 2/1/2/2;
    }
    .tile2 {
      grid-area: 4/1/4/2;
    }
    .tile3 {
      grid-area: 5/1/5/2;
    }
    .author-tile {
      grid-area: 1/1/1/2 !important;
      .arrow {
        align-self: flex-start !important;
        margin-top: 3rem !important;
      }
      h3 {
        font-size: 5.4rem !important;
      }
    }
    .text-tile {
      grid-area: 3/1/3/2;
      min-height: 40rem;
    }
  }
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
      &:hover {
        cursor: pointer;
        border: 0.25rem solid #ff4450;
        background-color: #ff4450;
        filter: none;
        transition: background-color 0.3s ease-in-out;
      }
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
