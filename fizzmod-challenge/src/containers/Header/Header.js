import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Header.scss";
import Menu from "./Components/Menu";

const Header = () => {
  // constructor
  const [categoriasMenu, setCategoriasMenu] = useState([]);
  useEffect(() => {
    //componentDidMount
    const getMenu = async () => {
      const response = await axios.get("http://remote.fizzmod.com/menu.json");
      //   console.log(response);
      setCategoriasMenu(response.data.menu.categories);
    };
    getMenu();
  }, []);

  return (
    <>
      <h1>Header</h1>
      <Menu categorias={categoriasMenu}></Menu>
    </>
  );
};

export default Header;
