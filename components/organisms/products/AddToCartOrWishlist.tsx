import ValueInput from "@/components/molecules/input/ValueInput";
import { ChangeEvent, useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";

export default function ProductAddToCartOrWishlist() {
  const [value, setValue] = useState(1);
  const decrement = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const increment = () => {
    if (value < 99) {
      setValue(value + 1);
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (val > 0 && val < 100) {
      setValue(val);
    }
  };

  return (
    <div className="mt-4 flex flex-col gap-2">
      <ValueInput
        value={value}
        decrement={decrement}
        increment={increment}
        onChange={onChange}
      />
      <div className="flex gap-4">
        <button className="px-2 py-1 bg-orange-400 rounded-md">
          Add to Cart
        </button>
        <button>
          <BsFillHeartFill className="text-red-500 text-xl" />
        </button>
      </div>
    </div>
  );
}
