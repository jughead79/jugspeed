import React from "react";

const SidebarTagCloud = () => {
  return (
    <div className="widget widget_tag_cloud">
      <h3 className="widget-title">برچسب های محبوب</h3>
      <div className="bar"></div>

      <div className="tagcloud">
        <a href="#">هنر</a>
        <a href="#">کتاب</a>
        <a href="#">ساعت</a>
        <a href="#">تلویزیون</a>
        <a href="#">جایزه</a>
        <a href="#">تلویزیون هوشمند</a>
        <a href="#">طراحی</a>
      </div>
    </div>
  );
};
export default SidebarTagCloud;
