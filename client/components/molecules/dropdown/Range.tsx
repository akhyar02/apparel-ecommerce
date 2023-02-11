import { RangeOption } from "@/common/types";
import DropdownButton from "@/components/atoms/dropdown/Button";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

export default function RangeDropdown({ filter }: Props) {
  const router = useRouter();

  const [min, setMin] = useState(filter.min);
  const [max, setMax] = useState(filter.max);

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

  function handleApply(min: number, max: number) {
    router.replace(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          [filter.label.toLowerCase()]: `${min}-${max}`,
        },
      },
      undefined,
      { shallow: true }
    );

    dropdownRef.current?.setShowDropdown(false);
  }

  function handleClear() {
    const params = new URLSearchParams(router.query as Record<string, string>);
    params.delete(filter.label.toLowerCase());
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
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-3 place-content-center">
          <input
            className="text-center border border-neutral-400"
            type="text"
            value={min}
            onChange={(e) => {
              if (!isNaN(Number(e.target.value)))
                setMin(Number(e.target.value));
            }}
            onBlur={(e) => {
              if (Number(e.target.value) > max) {
                setMin(max);
              } else if (Number(e.target.value) < filter.min) {
                setMin(filter.min);
              }
            }}
          />
          <span className="text-center">-</span>
          <input
            className="text-center border border-neutral-400"
            type="text"
            value={max}
            onChange={(e) => {
              if (!isNaN(Number(e.target.value)))
                setMax(Number(e.target.value));
            }}
            onBlur={(e) => {
              if (Number(e.target.value) < min) {
                setMax(min);
              } else if (Number(e.target.value) > filter.max) {
                setMax(filter.max);
              }
            }}
          />
        </div>
        <button
          className="px-2 py-1 text-white bg-gray-800 rounded-md"
          onClick={() => {
            handleApply(min, max);
          }}
        >
          Apply
        </button>
        <button
          className="px-2 py-1 text-white bg-gray-800 rounded-md"
          onClick={() => {
            handleClear();
          }}
        >
          Reset
        </button>
      </div>
    </DropdownButton>
  );
}

type Props = {
  filter: RangeOption;
};
