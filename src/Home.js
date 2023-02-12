import React from "react";
import Trainers from "./components/trainers";
import Classes from "./components/classes";
import Header from "./components/header";
import Nav from "./components/nav";
import Pricing from "./components/pricing";
import Social from "./components/social";
import Footer from "./components/footer";

const Home = () => {
  const [isFooter, setIsFooter] = React.useState(false);
  return (
    <>
      <Nav isFooter={isFooter} />
      <Header />
      <Classes />
      <Trainers />
      <Pricing />
      <Social />
      <Footer isFooter={isFooter} setIsFooter={setIsFooter} />
    </>
  );
};
export default Home;
