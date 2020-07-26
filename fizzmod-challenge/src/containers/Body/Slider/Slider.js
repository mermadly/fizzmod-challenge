import React from "react";
import "./Slider.scss";

const Slider = (props) => {
  return (
    <div className="slider">
      {props.slides.map((slide) => {
        return (
          <a className="link" href={slide.href} key={slide.imgName}>
            <img
              src={require(`../../../img/BANNERS/${slide.imgName}`)}
              alt=""
            />
          </a>
        );
      })}
    </div>
  );
};

export default Slider;
