import Image from "next/image";

export default function SliderSlides({ images, activeIndex }: Props) {
  return (
    <>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          fill
          alt="slider"
          className={`absolute top-0 left-0 w-full h-full object-cover transition duration-300 ease-in-out ${
            activeIndex === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </>
  );
}

type Props = {
  images: string[];
  activeIndex: number;
};
