import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "./Slider/Slider";

const Body = () => {
  const [slides, setSlides] = useState([]);
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    //componentDidMount
    const getSlider = async () => {
      const response = await axios.get("http://remote.fizzmod.com/body.json");
      console.log(response);
      setSlides(response.data.slides);
      setProducts(response.data.products);
      setFilters(response.data.filters);
    };
    getSlider();
  }, []);

  return (
    <>
      <h1>Body</h1>
      <Slider slides={slides}></Slider>
    </>
  );
};

export default Body;
