import "./style.css";

import Search from "../../components/search";
import Sidebar from "../../components/sidebar";
import ContentSection from "../../components/content-section";
const Home = () => {
  return (
    <div className="home">
      <div className="search-wrapper">
        <Search />
      </div>
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="content-wrapper">
        <ContentSection />
      </div>
    </div>
  );
};

export default Home;
