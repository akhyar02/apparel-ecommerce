import { DropdownOption, RangeOption } from "@/common/types";
import RangeDropdown from "@/components/molecules/dropdown/Range";
import SelectDropdown from "@/components/molecules/dropdown/Select";
import { useRouter } from "next/router";

export default function FilterMenu({ dropdownFilters, rangeFilters }: Props) {
  const router = useRouter();

  function clearFilters() {
    router.replace(
      {
        pathname: router.pathname,
        query: {},
      },
      undefined,
      { shallow: true }
    );
  }
  return (
    <div className="container flex justify-between mx-auto">
      <div className="flex gap-4">
        {dropdownFilters?.map((filter, index) => {
          return (
            <SelectDropdown
              key={"dropdown-select-" + index}
              filter={filter}
              options={filter.options}
            />
          );
        })}
        {rangeFilters?.map((filter, index) => {
          return (
            <RangeDropdown key={"dropdown-range-" + index} filter={filter} />
          );
        })}
      </div>
      <button
        className="px-2 py-1 text-white bg-gray-800 rounded-md"
        onClick={clearFilters}
      >
        Clear
      </button>
    </div>
  );
}

type Props = {
  dropdownFilters: DropdownOption[];
  rangeFilters: RangeOption[];
};
