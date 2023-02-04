import Link from "next/link";
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

export default function NavbarUserActions() {
  return (
    <ul className="flex gap-6 basis-1/3 justify-end">
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
  );
}
