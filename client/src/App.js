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
const App = () => {
  return (
    <div>
      <Header />
      <SearchBox />
      <MainBanner />

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
