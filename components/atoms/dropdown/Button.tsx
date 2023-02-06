import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

const DropdownButton = forwardRef(({ label, children }: Props, ref: any) => {
  const [showDropdown, setShowDropdown] = useState(false);

  useImperativeHandle(ref, () => ({
    setShowDropdown: (value: boolean | ((prevState: boolean) => boolean)) =>
      setShowDropdown(value),
  }));

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        event.target &&
        event.target instanceof Node &&
        event.target instanceof Element &&
        !event.target.closest(".relative")
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 px-2 py-1 capitalize bg-white rounded-md"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {label} <AiOutlineDown />
      </button>
      {showDropdown && (
        <div className="absolute left-0 w-40 px-2 py-1 bg-white rounded-md shadow-lg top-10">
          {children}
        </div>
      )}
    </div>
  );
});

DropdownButton.displayName = "DropdownButton";

type Props = {
  label: string;
  children?: React.ReactNode;
};

export default DropdownButton;
