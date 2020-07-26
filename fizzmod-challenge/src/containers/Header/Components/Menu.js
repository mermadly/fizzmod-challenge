import React from "react";

const Menu = (props) => {
  return (
    <div>
      {props.categorias.map((categoria) => {
        return (
          <a className="link" href={categoria.href} key={categoria.title}>
            {categoria.title}
          </a>
        );
      })}
    </div>
  );
};

export default Menu;
