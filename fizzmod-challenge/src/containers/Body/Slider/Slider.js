import React, { useState } from "react";
import "./Slider.scss";

const Slider = (props) => {
  const [currentImageIdx, setCurrentImagIdx] = useState(0);

  const prevSlide = () => {
    console.log(props.slides);
    // find out whether currentImageIdx eqals 0 and thus user reached beginning of carousel
    const resetToVeryBack = currentImageIdx === 0;

    const index = resetToVeryBack
      ? props.slides.length - 1
      : currentImageIdx - 1;

    // assign the logical index to current image index that will be used in render method
    setCurrentImagIdx(index);
  };

  const nextSlide = () => {
    // check if we need to start over from the first index
    const resetIndex = currentImageIdx === props.slides.length - 1;

    const index = resetIndex ? 0 : currentImageIdx + 1;

    // assign the logical index to current image index that will be used in render method
    setCurrentImagIdx(index);
  };

  return (
    <div className="slider">
      <div className="sliderContent">
        <button
          onClick={prevSlide}
          className="icon-icn_chevron_left arrowLeft"
        ></button>
        <button
          onClick={nextSlide}
          className="icon-icn_chevron_right arrowRight"
        ></button>
        {props.slides.map((slide) => {
          return (
            <div className="slide" key={slide.imgName}>
              <a className="link" href={slide.href}>
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
