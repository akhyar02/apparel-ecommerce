import Link from "next/link";

export default function NavbarCategoryList() {
  return (
    <ul className="flex gap-6 capitalize basis-1/3">
      <li>
        <Link
          href="/shop/categories/men"
          className="transition hover:text-neutral-600"
        >
          Men
        </Link>
      </li>
      <li>
        <Link
          href="/shop/categories/women"
          className="transition hover:text-neutral-600"
        >
          Women
        </Link>
      </li>
      <li>
        <Link
          href="/shop/categories/kids"
          className="transition hover:text-neutral-600"
        >
          Kids
        </Link>
      </li>
      <li>
        <Link
          href="/shop/"
          className="transition hover:text-neutral-600"
        >
          Shop
        </Link>
      </li>
    </ul>
  );
}
