import React, { useState } from "react";
import "./Slider.scss";

const Slider = (props) => {
  const [currentImageIdx, setCurrentImagIdx] = useState(0);
  //const [imageArray, setImageArray] = useState([]);
  let imageArray = [];

  const arrayGenerator = () => {
    console.log(props.slides);
    const tempArr = [];

    props.slides.forEach((slide) => {
      tempArr.push(slide.imgName);
    });
    imageArray = tempArr;
  };

  arrayGenerator();

  const prevSlide = () => {
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

  // create a new array with 5 elements from the source images
  const activeImageSourcesFromState = imageArray.slice(
    currentImageIdx,
    currentImageIdx + 3
  );

  // check the length of the new array (it’s less than 5 when index is at the end of the imagge sources array)
  const imageSourcesToDisplay =
    activeImageSourcesFromState.length < 3
      ? // if the imageSourcesToDisplay's length is lower than 5 images than append missing images from the beginning of the original array
        [
          ...activeImageSourcesFromState,
          ...imageArray.slice(0, 3 - activeImageSourcesFromState.length),
        ]
      : activeImageSourcesFromState;

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
