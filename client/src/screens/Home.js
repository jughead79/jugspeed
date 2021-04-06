import React from "react";

import SearchBox from '../components/SearchBox';
import MainBanner from "../components/MainBanner";
import SassTools from "../components/SassTools";
import FunFact from "../components/FunFact";
import WorkProcess from "../components/WorkProcess";
import Pricing from "../components/Pricing";
import GetStarted from "../components/GetStarted";
import Feedback from "../components/Feedback";
import Partner from "../components/Partner";
import Features from "../components/Features";
import Overview from "../components/Overview";
import Join from "../components/Join";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <div>
      <SearchBox />
      <MainBanner />
      <Features />
      <Overview />
      <Join />
      <CTA />
      <SassTools />
      <FunFact />
      <WorkProcess />
      <Pricing />
      <GetStarted />  
      <Feedback />
      <Partner />
    </div>
  );
};
export default Home;
