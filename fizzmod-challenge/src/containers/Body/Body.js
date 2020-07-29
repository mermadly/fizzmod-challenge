import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "./Slider/Slider";
import Productos from "./Productos/Productos";
import Filters from "./Filters/Filters";
import "./Body.scss";

const Body = () => {
  const [slides, setSlides] = useState([]);
  const [products, setProducts] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [filters, setFilters] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const sanitizer = (products, filters) => {
    // Si los filters no tienen "length", o sea si el array está vacío
    if (!filters.length) {
      setFilteredProducts(products); // Seteo el estado de filters con los productos que tengo en el estado
    } else {
      // Sino, creo un array vacío y le asigno los productos cuyos atributos coincidan con el valor de los filters
      let filteredProducts = [];
      filteredProducts = products.filter((product) => {
        return (
          filters.includes(product.attributes[0].value) ||
          filters.includes(product.attributes[1].value)
        );
      });
      setFilteredProducts(filteredProducts); // Seteo el filtro con los productos que filtré antes
    }
  };

  useEffect(() => {
    //componentDidMount
    const getData = async () => {
      //Llamo la data de la api
      const response = await axios.get("http://remote.fizzmod.com/body.json");
      //Creo un objeto extra para setearlo luego en el estado
      // Tenía la imagen pero los datos no estaban viniendo de la api, por eso lo agregué manual
      const extraBanner = { imgName: "Banner_4.png", href: "#banner-4" };
      //Seteo los estados
      setSlides([...response.data.slides, extraBanner]);
      setProducts(response.data.products);
      setFilterList(response.data.filters);
      setFilteredProducts(response.data.products);
    };
    getData();
  }, []);

  useEffect(() => {
    sanitizer(products, filters);
  }, [filters]);

  return (
    <div className="body">
      <Slider imageArray={slides}></Slider>
      <div className="productsMain">
        <h2 className="productsTitle">Productos</h2>
        <div className="productsSection">
          <aside>
            <Filters
              filterList={filterList}
              filters={filters}
              setFilters={setFilters}
            ></Filters>
          </aside>
          <Productos products={filteredProducts}></Productos>
        </div>
      </div>
    </div>
  );
};

export default Body;
