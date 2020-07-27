import React from "react";
import "./Menu.scss";

const Menu = (props) => {
  return (
    <div className="categoriesContainer">
      {props.categories.map((categorie) => {
        return (
          <div className="categoryContainer">
            <a
              className="categoryTitles"
              href={categorie.href}
              key={categorie.title}
            >
              {categorie.title}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
