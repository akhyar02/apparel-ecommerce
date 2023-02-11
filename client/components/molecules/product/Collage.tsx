import Image from "next/image";

export default function ProductCollage({images, alt}:Props) {
  return (
    <>
      <div
        className="grid w-full h-full basis-3/4"
        style={{
          gridTemplateAreas: `
              "a d e"
              "a c e"
              "b c f"
            `,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-full border-4 border-black"
            style={{ gridArea: `${String.fromCharCode(97 + index)}` }}
          >
            <Image
              src={image}
              alt={alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </>
  );
}

type Props = {
  images: string[];
  alt: string;
};
