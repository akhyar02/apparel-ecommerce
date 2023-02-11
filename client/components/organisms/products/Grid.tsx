import { Product } from "@/common/types";
import ProductCard from "@/components/molecules/product/Card";

export default function ProductsGrid({ products = [] }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

type Props = {
  products: Product[];
};
