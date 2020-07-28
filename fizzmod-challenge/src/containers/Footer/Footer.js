import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footerInfo">
        <h6>Productos</h6>
        <ul>
          <li>
            <a href="#">Compre Junto</a>
          </li>
          <li>
            <a href="#">Kit Look</a>
          </li>
          <li>
            <a href="#">Completá tu compra</a>
          </li>
          <li>
            <a href="#">Shop the look</a>
          </li>
          <li>
            <a href="#">Sin stock</a>
          </li>
        </ul>
      </div>
      <div className="footerInfo">
        <h6>Mi Cuenta</h6>
        <ul>
          <li>
            <a href="#">Mis pedidos</a>
          </li>
          <li>
            <a href="#">Wishlist</a>
          </li>
          <li>
            <a href="#">Productos frecuentes</a>
          </li>
          <li>
            <a href="#">Mis listas</a>
          </li>
          <li>
            <a href="#">Mis recetas</a>
          </li>
        </ul>
      </div>
      <div className="footerInfo">
        <h6>Contactanos</h6>
        <ul>
          <li>
            <a href="#">Nuestras sucursales</a>
          </li>
          <li>
            <a href="#">Horarios y teléfonos</a>
          </li>
        </ul>
      </div>
      <div className="footerLinks">
        <a href="http://" target="_blank">
          <span className="icon-icn_facebook icon"></span>
        </a>
        <a href="http://" target="_blank">
          <span className="icon-icn_twitter icon"></span>
        </a>
        <a href="http://" target="_blank">
          <span className="icon-icn_youtube icon"></span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
