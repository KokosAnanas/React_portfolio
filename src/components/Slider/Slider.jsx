import { useState } from "react";
import photo_1 from "../../assets/selectedWorks_1.png";
import photo_2 from "../../assets/selectedWorks_2.png";
import photo_3 from "../../assets/selectedWorks_3.png";
import Button from "../Button/Button";
import Slide from "./Slide";

export default function Slider() {
  const [index, setIndex] = useState(0);
  const images = [photo_1, photo_2, photo_3];

  const isFirstSlide = index === 0;
  const isLastSlide = index === images.length - 1;

  const handlePrevious = () => {
    setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
  };

  return (
    <div className="gallery-container">
      <div className="button-container">
        <Slide image={images[index]} />

        <Button label="<" disabled={isFirstSlide} onClick={handlePrevious}>
          &lt;
        </Button>

        <Button label=">" disabled={isLastSlide} onClick={handleNext}>
          &gt;
        </Button>
      </div>
    </div>
  );
}