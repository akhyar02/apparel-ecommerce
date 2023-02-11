import { Product } from "@/common/types";
import FilterMenu from "@/components/organisms/filter-menu/FilterMenu";
import ProductsGrid from "@/components/organisms/products/Grid";
import { getProducts } from "@/services/product";
import { GetStaticPropsContext } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductPage({ products }: Props) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const router = useRouter();

  const handleFilter = (filters: any) => {
    const { category, collection, price } = filters;
    const filtered = products.filter((product) => {
      if (category !== "all" && product.category.toLowerCase() !== category) {
        return false;
      }
      if (collection !== "all") {
        if (product?.collection?.toLowerCase() !== collection) return false;
      }
      if (price && (product.price < price[0] || product.price > price[1])) {
        return false;
      }
      return true;
    });
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    const { category, collection, price } = router.query;
    if (category || collection || price) {
      const priceFilter =
        typeof price === "string"
          ? price.split("-").map((p) => parseInt(p))
          : null;
      if (
        priceFilter &&
        (priceFilter?.length !== 2 ||
          priceFilter[0] < 100 ||
          priceFilter[1] > 1000 ||
          priceFilter[0] > priceFilter[1] ||
          isNaN(priceFilter[0]) ||
          isNaN(priceFilter[1]))
      ) {
        priceFilter[0] = 100;
        priceFilter[1] = 1000;
        router.replace({
          pathname: router.pathname,
          query: {
            ...router.query,
            price: `${priceFilter[0]}-${priceFilter[1]}`,
          },
        });
      }
      handleFilter({
        category: category || "all",
        collection: collection || "all",
        price: priceFilter,
      });
    } else {
      setFilteredProducts(products);
    }
  }, [router.query, router]);

  return (
    <>
      <section className="h-[33vh] relative">
        <Image
          src={
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          }
          fill
          alt="product banner"
          className="object-cover"
        />
      </section>
      <section className="w-full py-2 bg-orange-500">
        <FilterMenu dropdownFilters={filters} rangeFilters={rangeFilters} />
      </section>
      <section className="container mx-auto py-4">
        <ProductsGrid products={filteredProducts} />
      </section>
    </>
  );
}

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const products = await getProducts();
  return {
    props: {
      products,
    },
  };
};

const filters = [
  {
    label: "Category",
    options: ["All", "Men", "Women", "Kids"],
  },
  {
    label: "Collection",
    options: ["All", "Autumn"],
  },
];

const rangeFilters = [
  {
    label: "Price",
    min: 100,
    max: 1000,
  },
];

type Props = {
  products: Product[];
}