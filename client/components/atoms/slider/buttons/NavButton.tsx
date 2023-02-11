export default function SliderNavButton({
  index,
  activeIndex,
  setActiveIndex,
}: Props) {
  return (
    <button
      className={`w-6 h-6 rounded-full mx-1 transition duration-300 ease-in-out ${
        activeIndex === index
          ? "bg-orange-500"
          : "bg-neutral-200 hover:bg-neutral-400"
      }`}
      onClick={() => setActiveIndex(index)}
    />
  );
}

type Props = {
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};
