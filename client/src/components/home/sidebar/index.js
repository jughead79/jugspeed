import React, { useEffect, useState } from "react";
import axios from "axios";

import SidebarItem from "./SidebarItem";
import "./style.css";

const Sidebar = () => {
  const [data, setData] = useState([]);

  const fetch = async () => {
    const response = await axios.get("http://127.0.0.1:8000/category");
    setData(response.data);
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      {data.map((category) => {
        return (
          <SidebarItem
            key={category.id}
            title={category.name}
            icon="fab fa-500px"
            count="90"
          />
        );
      })}
    </div>
  );
};
export default Sidebar;
