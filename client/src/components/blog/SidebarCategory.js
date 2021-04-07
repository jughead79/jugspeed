import React, { useEffect, useState } from "react";
import axios from "axios";
const SidebarCategory = () => {
  const [categories, setcategories] = useState({});

  const fetchPost = async () => {
    const response = await axios.get("http://127.0.0.1:8000/blog/category/");
    setcategories(response.data);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="widget widget_post_categories">
      <h3 className="widget-title">دسته بندی پست ها</h3>
      <div className="bar"></div>

      <ul>
        {Object.values(categories).map((category) => {
          return (
            <li key={category.id}>
              <a href="#">
                <i className="icofont-bubble-right"></i>{category.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SidebarCategory;
