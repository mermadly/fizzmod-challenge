import React, { useState } from "react";
import "./Slider.scss";
// import Banner4 from "../../../img/Banners/Banner_4.png";
// import Banner5 from "../../../img/Banners/Banner_5.png";

const Slider = ({ imageArray }) => {
  const [currentImageIdx, setCurrentImagIdx] = useState(0);
  //const [imageArray, setImageArray] = useState([]);

  const previousSlide = () => {
    const resetToVeryBack = currentImageIdx === 0;

    const index = resetToVeryBack ? imageArray.length - 1 : currentImageIdx - 1;

    setCurrentImagIdx(index);
  };

  const nextSlide = () => {
    const resetIndex = currentImageIdx === imageArray.length - 1;

    const index = resetIndex ? 0 : currentImageIdx + 1;

    setCurrentImagIdx(index);
  };

  const activeImageSourcesFromState = imageArray.slice(
    currentImageIdx,
    currentImageIdx + 3
  );

  const imageSourcesToDisplay =
    activeImageSourcesFromState.length < 3
      ? [
          ...activeImageSourcesFromState,
          ...imageArray.slice(0, 3 - activeImageSourcesFromState.length),
        ]
      : activeImageSourcesFromState;

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
        {imageSourcesToDisplay.map((slide) => {
          return (
            <div className="slide" key={slide.imgName}>
              <a className="link" href={slide.href}>
                <img src={require(`../../../img/Banners/${slide}`)} alt="" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
