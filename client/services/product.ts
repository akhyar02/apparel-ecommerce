import { Product } from "@/common/types";
import { fetchStrapi } from "@/helpers/strapi";

export async function getProducts(
  query?: Record<string, any>
): Promise<Product[]> {
  const sharedQuery = {
    populate: {
      image: true,
      category: true,
      collection: true,
    },
  };
  const strapiProducts = await fetchStrapi("/products", {
    ...sharedQuery,
    ...query,
  });
  return strapiProducts.data.map(transformStrapiProduct);
}

export async function getProductBySlug(
  slug: string,
  query?: Record<string, any>
): Promise<Product> {
  const sharedQuery = {
    populate: [
      'image', 'category', 'collection'
    ],
  };
  
  const strapiProduct = await fetchStrapi(`/slugify/slugs/product/${slug}`, {
    ...sharedQuery,
    ...query,
  });
  return transformStrapiProduct(strapiProduct.data);
}

function transformStrapiProduct(strapiProduct: any): Product {
  return {
    id: strapiProduct.id,
    name: strapiProduct.attributes.name,
    image: `${process.env.STRAPI_BASE_URL}${strapiProduct.attributes.image?.data?.attributes?.url}`,
    category: strapiProduct.attributes.category?.data?.attributes?.name,
    price: strapiProduct.attributes.price,
    slug: strapiProduct.attributes.slug,
    collection:
      strapiProduct.attributes?.collection?.data?.attributes?.name || null,
  };
}
