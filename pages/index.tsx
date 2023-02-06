import FeaturedProducts from "@/components/organisms/featured-products/FeaturedProducts";
import FeaturedProductsCollage from "@/components/organisms/featured-products/HeroCollage";
import Slider from "@/components/organisms/slider/Slider";

export default function Home() {
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

const images = [
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
  "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80",
];

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    slug: "product-1",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    slug: "product-2",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    slug: "product-3",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
    slug: "product-4",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

const autumnCollectionImages = [
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
  "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
  "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80",
];
