import { Product } from "@/common/types";
import ValueInput from "@/components/molecules/input/ValueInput";
import Image from "next/image";

export default function CartPage() {
  return (
    <>
      <div className="container mx-auto mt-8">
        <h1 className="text-center text-3xl font-bold mb-8">Cart</h1>
        <div className="flex justify-center gap-4">
          <section className="w-2/5">
            <ul className="flex flex-col gap-4">
              {products.map((product) => (
                <li key={product.id} className="h-36 bg-neutral-100">
                  <div className="flex gap-2 h-full">
                    <div className="w-1/4 relative">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-3/4">
                      <h3 className="font-bold text-2xl">{product.name}</h3>
                      <p className="text-xl">RM {product.price}</p>

                      <ValueInput
                        decrement={() => {}}
                        increment={() => {}}
                        value={1}
                        onChange={() => {}}
                      />
                    </div>
                    <div className="flex items-center mr-4">
                      <button className="bg-red-500 text-white px-2 py-1 rounded-md">
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <section className="w-2/5 bg-neutral-200 px-2 py-1">
            <h2 className="font-bold text-3xl ">Checkout</h2>
            <form>
              <div className="flex gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="border border-neutral-300 rounded-md px-2 py-1"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border border-neutral-300 rounded-md px-2 py-1"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="address">Address 1</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="border border-neutral-300 rounded-md px-2 py-1"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="address2">Address 2</label>
                <input
                  type="text"
                  name="address2"
                  id="address2"
                  className="border border-neutral-300 rounded-md px-2 py-1"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="border border-neutral-300 rounded-md px-2 py-1"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    className="border border-neutral-300 rounded-md px-2 py-1"
                  />
                </div>
              </div>
            </form>
            <div className="flex justify-between">
              <p className="text-xl">Subtotal</p>
              <p className="text-xl">RM 300</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xl">Shipping</p>
              <p className="text-xl">RM 10</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xl">Total</p>
              <p className="text-xl">RM 310</p>
            </div>
            <button className="bg-orange-500 text-white px-2 py-1 rounded-md">
              Checkout
            </button>
          </section>
        </div>
      </div>
    </>
  );
}

const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80",
    category: "Men",
    collection: "Autumn",
    slug: "product-1",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    image:
      "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
    category: "Women",
    collection: "Autumn",
    slug: "product-2",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Kids",
    collection: "Autumn",
    slug: "product-3",
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Men",
    collection: null,
    slug: "product-4",
  },
];
