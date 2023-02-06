export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  slug: string;
};

export type DropdownOption = {
  label: string;
  options: string[];
};

export type RangeOption = {
  label: string;
  min: number;
  max: number;
};