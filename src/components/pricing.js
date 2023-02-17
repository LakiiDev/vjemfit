import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PlansData from "../PlansData";
import checkmark from "../assets/icons/checkmark.svg";
import { fadeUp, fade, photoAnim } from "../Animations";
const Pricing = () => {
  const [yearly, setYearly] = React.useState(false);
  const [plans] = React.useState(PlansData());
  const planChange = {
    showMonth: {
      opacity: [0, 0.5, 1],
      y: [50, 0],
    },
    showYear: {
      opacity: [0, 0.5, 1],
      y: [50, 0],
    },
  };
  return (
    <PlansAndPricing>
      <motion.h2
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        initial={"hidden"}
        variants={fadeUp}
      >
        Our pricing & Plans
      </motion.h2>
      <motion.div
        className="plan-selection"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        initial={"hidden"}
        variants={fadeUp}
        transition={{ delay: 0.5 }}
      >
        <h4>Montly</h4>
        <div
          className={`switch ${yearly ? "on" : "off"}`}
          onClick={() => setYearly(!yearly)}
        >
          <motion.div
            layout
            className="circle"
            transition={{
              duration: 0.2,
              stiffness: 200,
              damping: 50,
              opacity: 0,
            }}
          ></motion.div>
        </div>
        <h4>Yearly</h4>
      </motion.div>
      <div
        className={`discount ${yearly ? "active" : ""}`}
        variants={fade}
        transition={{
          duration: 1,
          stiffness: 200,
          damping: 50,
          times: [0, 0.5, 1],
        }}
        initial={"hidden"}
        animate={yearly ? "show" : "hidden"}
      >
        40% discount
      </div>
      <Plans
        variants={planChange}
        animate={yearly ? "showYear" : "showMonth"}
        transition={{
          duration: 1,
          stiffness: 200,
          damping: 50,
          times: [0, 0.5, 1],
        }}
      >
        <Plan
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          initial={"hidden"}
          variants={fadeUp}
        >
          <h3>{plans[0].title}</h3>
          <div className="price">
            <h2>
              {yearly ? `$${plans[0].price * 12 * 0.6}` : `$${plans[0].price}`}
            </h2>
            <p>{yearly ? "/year" : `${plans[0].reccuring}`}</p>
          </div>
          <ul>
            {plans[0].features.map((feature) => (
              <li>
                <img src={checkmark} alt="" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
          <a href="" className="button free">
            {plans[0].button}
          </a>
        </Plan>
        <Plan
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          initial={"hidden"}
          variants={fadeUp}
        >
          <h3>{plans[1].title}</h3>
          <div className="price">
            <h2>
              {yearly ? `$${plans[1].price * 12 * 0.6}` : `$${plans[1].price}`}
            </h2>
            <p>{yearly ? "/year" : `${plans[1].reccuring}`}</p>
          </div>
          <ul>
            {plans[1].features.map((feature) => (
              <li>
                <img src={checkmark} alt="" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
          <a href="">{plans[1].button}</a>
        </Plan>
        <Plan
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          initial={"hidden"}
          variants={fadeUp}
        >
          <h3>{plans[2].title}</h3>
          <div className="price">
            <h2>
              {yearly
                ? `$${(plans[2].price * 12 * 0.6).toFixed(0)}`
                : `$${plans[2].price}`}
            </h2>
            <p>{yearly ? "/year" : `${plans[2].reccuring}`}</p>
          </div>
          <ul>
            {plans[2].features.map((feature) => (
              <li>
                <img src={checkmark} alt="" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
          <a href="">{plans[2].button}</a>
        </Plan>
      </Plans>
    </PlansAndPricing>
  );
};
export default Pricing;

const PlansAndPricing = styled.div`
  padding-top: 15rem;
  max-width: 144rem;
  margin: 0 auto;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  .plan-selection {
    display: flex;
    gap: 2.5rem;
    font-size: 2.4rem;
    align-items: center;
    .switch {
      width: 6rem;
      height: 3rem;
      background-color: #424345;
      border-radius: 3rem;
      display: flex;
      align-items: center;
      padding: 0.3rem;
      .circle {
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 50%;
        background-color: #ff4f5e;
      }

      &.off {
        justify-content: flex-start;
      }
      &.on {
        justify-content: flex-end;
        background-color: rgba(255, 79, 94, 0.1);
      }
    }
  }
  .discount {
    font-size: 2.4rem;
    padding: 1rem 2rem;
    background-color: #ff4f5e;
    font-weight: 600;
    display: none;
    &.active {
      display: block;
    }
  }
  @media (max-width: 1500px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  @media (max-width: 500px) {
    h2 {
      text-align: center !important;
    }
  }
`;
const Plans = styled(motion.div)`
  width: 100%;
  display: flex;
  gap: 4rem;
  margin-top: 5rem;
  padding-bottom: 10rem;
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 10rem;
  }
`;
const Plan = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #000;
  padding: 4rem;
  h3 {
    font-size: 3.2rem;
    font-weight: 600;
  }
  .price {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 2rem 0;
    h2 {
      font-size: 6.4rem;
      font-weight: 700;
      color: #ff4f5e;
      margin: 0;
    }
    p {
      font-size: 1.8rem;
      font-weight: 400;
    }
  }
  ul {
    padding-left: 0;
    margin-bottom: 10rem;
  }
  li {
    margin-left: 0;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 1rem;
      height: 1rem;
      padding: 0.5rem;
      background-color: #ff4f5e;
      border-radius: 50%;
    }
    p {
      font-size: 1.8rem;
      font-weight: 400;
    }
  }
  a {
    font-size: 2.8rem;
    font-weight: 500;
    padding: 1.5rem 3rem;
    border: 0.3rem solid #ff4f5e;
    text-align: center;
    text-decoration: none;
    color: #ff4f5e;
  }
  .free {
    color: #fff;
  }
  @media (max-width: 800px) {
    align-items: center;

    p {
      font-size: 2.2rem !important;
    }
    width: 60%;
    margin: 0 auto;
  }
`;
