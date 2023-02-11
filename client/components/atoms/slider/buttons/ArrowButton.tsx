import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function SliderArrowButton({
  onClick,
  direction = "next",
}: Props) {
  return (
    <button
      className={`relative flex items-center justify-center w-10 h-full text-3xl hover:text-orange-500 group`}
      onClick={onClick}
    >
      {direction === "prev" && (
        <IoIosArrowBack className="transition group-hover:scale-125" />
      )}
      {direction === "next" && (
        <IoIosArrowForward className="transition group-hover:scale-125" />
      )}
    </button>
  );
}

type Props = {
  onClick: () => void;
  direction: "prev" | "next";
};
