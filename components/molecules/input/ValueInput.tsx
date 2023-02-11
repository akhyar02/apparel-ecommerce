import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function ValueInput({
  value,
  increment,
  decrement,
  onChange,
}: Props) {
  return (
    <div className="flex w-max">
      <span
        className="flex items-center bg-orange-400 px-2 py-1 rounded-md select-none"
        onClick={decrement}
      >
        <AiOutlineMinus />
      </span>
      <input
        type="text"
        className="w-[2rem] text-center focus:outline-none font-bold"
        maxLength={2}
        value={value}
        onChange={onChange}
      />
      <span
        className="flex items-center bg-orange-400 px-2 py-1 rounded-md select-none"
        onClick={increment}
      >
        <AiOutlinePlus />
      </span>
    </div>
  );
}

type Props = {
  value: number;
  increment: () => void;
  decrement: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
