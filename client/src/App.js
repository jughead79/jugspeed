import React from "react";
import Header from "./components/Header";
import SearchBox from './components/SearchBox'
import MainBanner from './components/MainBanner'
import Features from './components/Features'
const App = () => {
  return (
    <div>
      <Header />
      <SearchBox />
      <MainBanner />
      <Features />
    </div>
  );
};
export default App;
