import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Header.scss";
import Menu from "./Components/Menu";
import Logo from "../../img/logo_fizzmod.svg";

const Header = () => {
  // constructor
  const [categoriesMenu, setCategoriesMenu] = useState([]);
  useEffect(() => {
    //componentDidMount
    const getMenu = async () => {
      const response = await axios.get("http://remote.fizzmod.com/menu.json");
      setCategoriesMenu(response.data.menu.categories);
    };
    getMenu();
  }, []);

  return (
    <header>
      <div className="headerTop">
        <div className="headerTopLeft">
          <img className="logo" src={Logo} alt="" />
        </div>
        <div className="headerTopRight">
          <nav className="topNav">
            <ul className="nav">
              <li className="navItem">
                <a href="">Ayuda</a>
              </li>
              <li className="navItem">
                <a href="">Mis pedidos</a>
              </li>
              <li className="navItem">
                <a href="">Mi cuenta</a>
              </li>
            </ul>
          </nav>
          <div className="headerSearch">
            <div className="searchBox">
              <form>
                <button type="submit" href="#">
                  <span className="searchIcon icon-icn_search"></span>
                </button>
                <input
                  placeholder="Buscar un producto.."
                  type="search"
                  name=""
                  id=""
                />
              </form>
            </div>
            <a href="#" className="cart">
              <span className="icon-icn_cart icon"></span>
              <span>Mi carrito</span>
            </a>
          </div>
        </div>
      </div>
      <Menu categories={categoriesMenu}></Menu>
    </header>
  );
};

export default Header;
