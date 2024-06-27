import { useState } from 'react';
import Card from '../Card/card';
import './slider.css';
import left_arrow from '../../assets/arrow-left-solid.svg';
import right_arrow from '../../assets/arrow-right-solid.svg';
const arrayOfReco = require('../../datas/recommandations.json');

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function goToPrevious() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? arrayOfReco.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  function goToNext() {
    const isLastSlide = currentIndex === arrayOfReco.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className="slider">
      <img
        src={left_arrow}
        onClick={goToPrevious}
        className="arrow left_arrow"
        alt="left arrow"
      />

      <Card
        key={arrayOfReco[currentIndex].id}
        title={arrayOfReco[currentIndex].title}
        content={arrayOfReco[currentIndex].content}
        classname="reco_card"
      />

      <img
        src={right_arrow}
        onClick={goToNext}
        className="arrow right_arrow"
        alt="right arrow"
      />
    </div>
  );
}

export default Slider;
