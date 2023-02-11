import { Product } from "@/common/types";
import AddToCartOrWishlist from "@/components/organisms/products/AddToCartOrWishlist";
import { getProductBySlug, getProducts } from "@/services/product";
import { GetStaticPropsContext } from "next";
import Image from "next/image";

export default function InnerProductPage({
  product
}: Props) {
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

export const getStaticPaths = async () => {
  const query = {
    fields: ["slug"],
  };
  const products = await getProducts(query);
  const paths = products.map((p) => ({
    params: {
      productSlug: p.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const productSlug = ctx?.params?.productSlug as string;
  const query = {
    fields: [
      "name",
      "price",
      "id",
      'slug',
    ]
  };
  const product = await getProductBySlug(productSlug, query);
  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};

type Props = {
  product: Product;
};