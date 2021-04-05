import React from "react";
import Header from "./components/Header";
import SearchBox from './components/SearchBox'
import MainBanner from './components/MainBanner'
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

    </div>
  );
};
export default App;
