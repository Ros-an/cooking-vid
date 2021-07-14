import React from "react";
import { useFilterContext } from "../../context/filterContext";
import "./CategoryList.css";
function CategoryList() {
  const {
    filters: { category },
    updateFilters,
  } = useFilterContext();
  return (
    <section className="category-list">
      <div className="category">
        <input
          type="radio"
          name="category"
          checked={category === "all" && "all"}
          value="all"
          onChange={updateFilters}
        />{" "}
        All
      </div>
      <div className="category">
        <input
          type="radio"
          name="category"
          value="indian"
          checked={category === "indian" && "indian"}
          onChange={updateFilters}
        />{" "}
        Indian
      </div>
      <div className="category">
        <input
          type="radio"
          name="category"
          value="japanese"
          checked={category === "japanese" && "japanese"}
          onChange={updateFilters}
        />{" "}
        Japanese
      </div>
      <div className="category">
        <input
          type="radio"
          name="category"
          value="korean"
          checked={category === "korean" && "korean"}
          onChange={updateFilters}
        />{" "}
        Korean
      </div>
      <div className="category">
        <input
          type="radio"
          name="category"
          value="italian"
          checked={category === "italian" && "italian"}
          onChange={updateFilters}
        />{" "}
        Italian
      </div>
    </section>
  );
}

export default CategoryList;
