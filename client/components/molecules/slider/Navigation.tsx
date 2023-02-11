import ArrowButton from "@/components/atoms/slider/buttons/ArrowButton";
import NavButton from "@/components/atoms/slider/buttons/NavButton";
import { useCallback, useEffect } from "react";

export default function SliderNavigation({
  images,
  activeIndex,
  setActiveIndex,
}: Props) {
  function handlePrev() {
    if (activeIndex === 0) {
      setActiveIndex(images.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  }

  function handleNext() {
    if (activeIndex === images.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <>
      <div className="absolute top-0 left-0 flex justify-between w-full h-full isolate">
        <ArrowButton onClick={handlePrev} direction="prev" />
        <ArrowButton onClick={handleNext} direction="next" />
      </div>
      <div className="absolute left-0 flex justify-center w-full bottom-10">
        {images.map((_, index) => (
          <NavButton
            key={index}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </>
  );
}

type Props = {
  images: any[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};
