import { DropdownOption } from "@/common/types";
import DropdownButton from "@/components/atoms/dropdown/Button";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function SelectDropdown({ filter, options }: Props) {
  const router = useRouter();

  const queryLabelValue = router.query?.[filter.label.toLowerCase()];
  let label = filter.label;
  if (queryLabelValue && !Array.isArray(queryLabelValue)) {
    if (queryLabelValue === "all") {
      label = filter.label;
    } else {
      label = queryLabelValue;
    }
  }

  const dropdownRef = useRef<{
    setShowDropdown: (
      value: boolean | ((prevState: boolean) => boolean)
    ) => void;
  }>();

  function onClick(value: string) {
    let params = new URLSearchParams(router.query as Record<string, string>);
    if (value.toLowerCase() === "all")
      params.delete(filter.label.toLowerCase());
    else params.set(filter.label.toLowerCase(), value.toLowerCase());

    router.replace(
      {
        pathname: router.pathname,
        query: params.toString(),
      },
      undefined,
      { shallow: true }
    );

    dropdownRef.current?.setShowDropdown(false);
  }

  return (
    <DropdownButton label={label} ref={dropdownRef}>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => {
              onClick(option);
            }}
            className="px-2 py-1 hover:bg-gray-100"
          >
            <button>{option}</button>
          </li>
        ))}
      </ul>
    </DropdownButton>
  );
}

type Props = {
  filter: DropdownOption;
  options: string[];
};
