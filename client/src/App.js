import React from "react";
import Header from "./components/Header";
import SearchBox from './components/SearchBox'
import MainBanner from './components/MainBanner'
import SassTools from './components/SassTools'
import FunFact from './components/FunFact'
import WorkProcess from './components/WorkProcess'
import Pricing from './components/Pricing'
import GetStarted from './components/GetStarted'
import Feedback from './components/Feedback'
import Partner from './components/Partner'
import Footer from './components/Footer'
import Features from './components/Features'
import Overview from './components/Overview'
import Join from './components/Join'
import CTA from './components/CTA'

const App = () => {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
};
export default App;
