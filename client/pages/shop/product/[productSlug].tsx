import AddToCartOrWishlist from "@/components/organisms/products/AddToCartOrWishlist";
import Image from "next/image";

export default function InnerProductPage() {
  return (
    <section className="container flex gap-4 mx-auto mt-8">
      <div className="relative aspect-[3/4] w-1/3">
        <Image
          src={product.image}
          fill
          className="object-cover"
          alt={product.name}
        />
      </div>
      <div className="w-2/3">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="text-2xl text-neutral-600">RM {product.price}</p>

        <div className=" w-full h-0.5 bg-neutral-300 my-4" />

        <p className="mt-4 text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
          distinctio tempore pariatur labore rerum officiis, ad natus rem illo
          suscipit sint eligendi ab tenetur quos sapiente quia dolores. Maiores
          in reiciendis, quas explicabo nostrum mollitia quae iusto obcaecati
          tenetur, voluptate blanditiis veritatis recusandae a. Dicta fugiat
          dolorem delectus dolores sunt?
        </p>

        <AddToCartOrWishlist />
      </div>
    </section>
  );
}

const product = {
  id: 1,
  name: "Product 1",
  price: 100,
  image:
    "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80",
  category: "Men",
  collection: "Autumn",
  slug: "product-1",
};
