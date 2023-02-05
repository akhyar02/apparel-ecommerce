import { Product } from "@/common/types";
import ProductCard from "@/components/molecules/product/Card";

export default function FeaturedProducts({
  title,
  products,
  description,
}: Props) {
  return (
    <>
      <h2 className="font-serif text-4xl font-bold capitalize">{title}</h2>
      <p
        className="w-2/5 text-lg  text-neutral-600"
      >
        {description ||
          ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor esse
        ipsam ratione quis iste voluptate ipsa fugit ex laborum cumque atque in
        eveniet, ipsum eius ab.`}
      </p>
      <div className="grid grid-cols-4 gap-4 px-3 py-3">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}

type Props = {
  title: string;
  products: Product[];
  description: string;
};
