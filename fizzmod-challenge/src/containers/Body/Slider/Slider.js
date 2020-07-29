import React, { useState } from "react";
import "./Slider.scss";
// import Banner4 from "../../../img/Banners/Banner_4.png";
// import Banner5 from "../../../img/Banners/Banner_5.png";

const Slider = ({ imageArray }) => {
  const [currentImageIdx, setCurrentImagIdx] = useState(0);

  const previousSlide = () => {
    const index =
      currentImageIdx === 0 ? imageArray.length - 1 : currentImageIdx - 1;

    setCurrentImagIdx(index);
  };

  const nextSlide = () => {
    const index =
      currentImageIdx === imageArray.length - 1 ? 0 : currentImageIdx + 1;

    setCurrentImagIdx(index);
  };

  return (
    <div className="slider">
      <div className="sliderContent">
        <button
          onClick={previousSlide}
          className="icon-icn_chevron_left arrowLeft"
        ></button>
        <button
          onClick={nextSlide}
          className="icon-icn_chevron_right arrowRight"
        ></button>
        {imageArray.length !== 0 && (
          <div className="slide">
            <a className="link" href={imageArray[currentImageIdx].href}>
              <img
                src={require(`../../../img/Banners/${imageArray[currentImageIdx].imgName}`)}
                alt=""
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
