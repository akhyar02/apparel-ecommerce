import ProductCollage from "@/components/molecules/product/Collage";
import Link from "next/link";

export default function FeaturedProductsCollage({
  title,
  description,
  images,
  href
}: Props) {
  return (
    <>
      <div className="max-[1920px] flex h-full justify-center pl-6 ">
        <div className="flex flex-col justify-center gap-4 basis-1/4">
          <h2 className="font-serif text-4xl font-bold capitalize">{title}</h2>
          <div>
            <p className="text-xl text-neutral-900 mb-3">{description}</p>
            <Link
              href={href}
              className="px-2 py-1 text-xl font-bold transition bg-white rounded-md w-max text-amber-500 hover:text-amber-600 hover:bg-amber-50"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <ProductCollage images={images} alt={title} />
      </div>
    </>
  );
}

type Props = {
  images: string[];
  title: string;
  description: string;
  href: string;
};
