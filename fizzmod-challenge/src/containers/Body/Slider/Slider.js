import React from "react";
import "./Slider.scss";

const Slider = (props) => {
  return (
    <div className="slider">
      <div className="sliderContent">
        <span className="icon-icn_chevron_left arrowLeft"></span>
        <span className="icon-icn_chevron_right arrowRight"></span>
        {props.slides.map((slide) => {
          return (
            <div className="slide">
              <a className="link" href={slide.href} key={slide.imgName}>
                <img
                  src={require(`../../../img/Banners/${slide.imgName}`)}
                  alt=""
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
