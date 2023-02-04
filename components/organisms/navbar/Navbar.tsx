import Link from "next/link";
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="h-20 sticky top-0 max-w-[1920px] mx-auto flex justify-between items-center text-2xl px-6">
      <ul className="flex gap-6 capitalize">
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
      </ul>
      <Link href="/" className="text-3xl font-bold">
        K.A apparels
      </Link>
      <ul className="flex gap-6">
        <li>
          <Link href="/cart" className="relative">
            <BsFillCartFill />
            <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white translate-x-2 -translate-y-2 bg-red-500 rounded-full">
              0
            </span>
          </Link>
        </li>
        <li>
          <Link href="/wishlist" className="transition hover:text-red-500">
            <BsFillHeartFill />
          </Link>
        </li>
        <li>
          <Link href="/login">
            <FaUser />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
