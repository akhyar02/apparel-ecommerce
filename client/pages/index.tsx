import { Product } from "@/common/types";
import FeaturedProducts from "@/components/organisms/featured-products/FeaturedProducts";
import FeaturedProductsCollage from "@/components/organisms/featured-products/HeroCollage";
import Slider from "@/components/organisms/slider/Slider";
import { getProducts } from "@/services/product";
import { GetStaticPropsContext } from "next";

export default function Home({ products }: Props) {
  return (
    <>
      <section className="h-[calc(100vh-80px)]">
        <Slider images={images} />
      </section>
      <section className="container mx-auto mt-6">
        <FeaturedProducts
          title={"Best Sellers"}
          products={products}
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dignissimos repellat odio a fugiat consectetur, animi vero quaerat numquam atque!`}
        />
      </section>
      <section className="w-full mx-auto mt-6 bg-amber-500 h-[66vh]">
        <FeaturedProductsCollage
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dignissimos repellat odio a fugiat consectetur, animi vero quaerat numquam atque!"
          images={autumnCollectionImages}
          title="Autumn Collection"
          href="/shop"
        />
      </section>
      <section className="container mx-auto mt-6">
        <FeaturedProducts
          title={"New Releases"}
          products={products}
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dignissimos repellat odio a fugiat consectetur, animi vero quaerat numquam atque!`}
        />
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

type Props = {
  products: Product[];
};

const images = [
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
  "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80",
];

const autumnCollectionImages = [
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
  "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
  "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80",
];
