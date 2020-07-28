import React from "react";
import "./Filters.scss";

const Filters = ({ setFilters, filters, filterList }) => {
  const handleFilter = (e) => {
    if (e.target.checked) {
      setFilters([...filters, e.target.name]);
    } else {
      const arr = filters.filter((word) => word !== e.target.name);
      setFilters(arr);
    }
  };

  return (
    <div className="filtersContainer">
      {filterList.map((filter) => (
        <div className="filterContainer" key={filter.title}>
          <h2 className="filterTitle">{filter.title}</h2>
          <ul className="filterOptions">
            {filter.values.map((value) => (
              <li className="filterItem" key={value}>
                <label className="b-contain labelcheck">
                  <input
                    className="check"
                    type="checkbox"
                    name={value}
                    id=""
                    onClick={handleFilter}
                  />

                  <span>{value}</span>
                  <div className="b-input"></div>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Filters;
