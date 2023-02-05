import Navigation from "@/components/molecules/slider/Navigation";
import Slides from "@/components/molecules/slider/Slides";
import { useState } from "react";

export default function Slider({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="relative w-full h-full">
      <Slides images={images} activeIndex={activeIndex} />
      <Navigation
        images={images}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
}

type Props = {
  images: any[];
};
