import React from "react";
import "./Filters.scss";

const Filters = ({ setFilters, filters, filterList }) => {
  const handleFilter = (e) => {
    if (e.target.checked) {
      setFilters([...filters, e.target.name]); //Si un checkbox fue seleccionado agrego el nombre del atributo a el estado de los filters
    } else {
      const arr = filters.filter((word) => word !== e.target.name); // Sino, filtro los que no coinciden con el nombre del atributo del evento
      setFilters(arr); //Seteo el estado con el nuevo array
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
