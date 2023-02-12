import React from "react";
import styled from "styled-components";
import banner from "../assets/images/banner.jpg";
import play from "../assets/icons/play.svg";
const Trainers = () => {
  return (
    <WorkoutWrapper>
      <Workout>
        <h2>Workout trainers</h2>
        <p>
          I have been learning from the best healers of our generation, and the
          best bodybuilders/powerlifters, to come up with the best holistic
          method to clean the body while also packing on muscle. this took 4-5
          years of trial and error on my own body, while alos studying bio
          chemistry, exersice science.
        </p>
      </Workout>
      <div className="banner">
        <img src={banner} alt="" className="bannerImg" />
        <img src={play} alt="" className="play" />
      </div>
    </WorkoutWrapper>
  );
};
export default Trainers;

const WorkoutWrapper = styled.div`
  background: #fff;
  width: 100%;
  .banner {
    margin-top: 7rem;
    position: relative;
    width: 100%;
    .bannerImg {
      width: 100%;
      display: block;
    }
    .play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Workout = styled.div`
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
`;
