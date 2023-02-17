import React from "react";
import styled from "styled-components";
import banner from "../assets/images/banner.jpg";
import play from "../assets/icons/play.svg";
import { motion } from "framer-motion";
import { fadeUp, photoAnim } from "../Animations";
const Trainers = () => {
  return (
    <WorkoutWrapper
      initial={"hidden"}
      transition={{ staggerChildren: 0.5, delayChildren: 1.2 }}
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
    >
      <Workout
        initial={"hidden"}
        transition={{ staggerChildren: 0.5 }}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h2 variants={fadeUp}>Workout trainers</motion.h2>
        <motion.p variants={fadeUp}>
          I have been learning from the best healers of our generation, and the
          best bodybuilders/powerlifters, to come up with the best holistic
          method to clean the body while also packing on muscle. this took 4-5
          years of trial and error on my own body, while alos studying bio
          chemistry, exersice science.
        </motion.p>
      </Workout>
      <motion.div className="banner" variants={fadeUp}>
        <img src={banner} alt="" className="bannerImg" variants={photoAnim} />
        <img src={play} alt="" className="play" />
      </motion.div>
    </WorkoutWrapper>
  );
};
export default Trainers;

const WorkoutWrapper = styled(motion.div)`
  background: #fff;
  width: 100%;
  .banner {
    margin-top: 7rem;
    position: relative;
    width: 100%;
    .bannerImg {
      display: block;
      width: 100%;
      height: auto;
    }
    .play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 20rem;
    }
  }
  @media (max-width: 800px) {
    .play {
      max-width: 15rem !important;
    }
    .bannerImg {
      min-height: 30rem;
      min-width: 100rem;
    }
  }
`;
const Workout = styled(motion.div)`
  padding-bottom: 0;
  max-width: 144rem;
  margin: 0 auto;
  padding-top: 15rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  h2 {
    margin-bottom: 2rem;
  }
  p {
    width: 75%;
    text-align: center;
    font-size: 1.8rem;
    line-height: 150%;
  }
  @media (max-width: 1100px) {
    p {
      font-size: 1.9rem;
    }
  }
  @media (max-width: 500px) {
    h2 {
      width: 90%;
      margin: 2rem auto;
      text-align: center;
    }
    p {
      width: 90%;
      font-size: 2rem;
    }
  }
`;
