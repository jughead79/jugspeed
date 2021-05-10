import React from "react";

import MainBanner from "../components/MainBanner";
import Forms from "../components/Forms";
import BlogArea from "../components/BlogArea";
import Faq from "../components/Faq";
import Pricing from "../components/Pricing";
import Partner from "../components/Partner";
import Services from "../components/Services";
import Overview from "../components/Overview";
import Ability from "../components/Ability";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <div>
      <MainBanner />
      <Services />
      <Ability />
      <Overview />
      <CTA />
      <Pricing />
      <Partner />
      <BlogArea />
      <Forms />
      <Faq />
    </div>
  );
};
export default Home;
