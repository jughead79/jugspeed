import "./style.css";

import Search from "../../components/home/search";
import Sidebar from "../../components/home/sidebar";
import ContentSection from "../../components/home/content/ContentSection";
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
