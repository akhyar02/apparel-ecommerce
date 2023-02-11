import Image from "next/image";
import { useEffect, useState } from "react";

export default function SliderSlides({ images, activeIndex }: Props) {
  const [translateX, setTranslateX] = useState("");

  useEffect(() => {
    setTranslateX(`-${activeIndex * 100}vw`);
  }, [activeIndex]);

  return (
    <div
      className={`absolute top-0 left-0 h-full flex transition duration-300 ease-in-out`}
      style={{ transform: `translateX(${translateX})` }}
    >
      {images.map((image, index) => (
        <div className="relative w-screen h-full" key={index}>
          <Image src={image} fill alt="slider" className={`object-cover`} />
        </div>
      ))}
    </div>
  );
}

type Props = {
  images: string[];
  activeIndex: number;
};
