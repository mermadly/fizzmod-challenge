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
    if (!filters.length) {
      setFilteredProducts(products);
    } else {
      let filteredProducts = [];
      filteredProducts = products.filter((product) => {
        return (
          filters.includes(product.attributes[0].value) ||
          filters.includes(product.attributes[1].value)
        );
      });
      setFilteredProducts(filteredProducts);
    }
  };

  useEffect(() => {
    //componentDidMount
    const getData = async () => {
      const response = await axios.get("http://remote.fizzmod.com/body.json");
      setSlides(response.data.slides);
      setProducts(response.data.products);
      setFilterList(response.data.filters);
      setFilteredProducts(response.data.products);
    };
    getData();
  }, []);

  let imageArray = [];

  const arrayGenerator = () => {
    console.log(slides);
    const tempArr = [];

    slides.forEach((slide) => {
      tempArr.push(slide.imgName);
    });
    tempArr.push("Banner_4.png");
    imageArray = tempArr;
  };

  arrayGenerator();

  useEffect(() => {
    sanitizer(products, filters);
  }, [filters]);

  return (
    <>
      <Slider imageArray={imageArray}></Slider>
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
    </>
  );
};

export default Body;
