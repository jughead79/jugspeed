import React, { useEffect, useState } from "react";
import Jugspeed from "../../api/jugspeed";
import { Link } from "react-router-dom";
const SidebarCategory = () => {
  const [categories, setcategories] = useState({});

  const fetchPost = async () => {
    const response = await Jugspeed.get("/blog/category/");
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
              <Link to={`/blog/category/${category.id}`}>
                <i className="icofont-bubble-right"></i>
                {category.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SidebarCategory;
