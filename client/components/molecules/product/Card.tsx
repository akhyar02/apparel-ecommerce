import { Product } from "@/common/types";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: Props) {
  return (
    <Link
      href={`/shop/product/${product.slug}`}
      className="overflow-hidden border rounded-md border-neutral-300 hover:shadow-lg transition"
    >
      <div className="relative w-full aspect-[3/4]">
        <Image
          fill
          src={product.image}
          alt={product.name}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-between">
        <h3 className="text-2xl font-bold">{product.name}</h3>
        <span className="text-lg font-bold text-orange-600">
          RM {product.price.toFixed(2)}
        </span>
      </div>
    </Link>
  );
}

type Props = {
  product: Product;
};
