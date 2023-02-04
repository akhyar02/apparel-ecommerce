import Link from "next/link";
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="h-20 sticky top-0 max-w-[1920px] mx-auto flex justify-between items-center">
      <ul className="flex">
        <li>
          <Link href="/shop/categories/men">Men</Link>
        </li>
        <li>
          <Link href="/shop/categories/women">Women</Link>
        </li>
        <li>
          <Link href="/shop/categories/kids">Kids</Link>
        </li>
      </ul>
      <Link href="/">K.A apparels</Link>
      <ul className="flex">
        <li>
          <Link href="/cart">
            <BsFillCartFill />
          </Link>
        </li>
        <li>
          <Link href="/wishlist">
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
