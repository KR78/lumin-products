export interface SVGIcon {
  size: number,
  className?: string,
}

export interface SelectOption {
  label: string,
  value: string,
  disabled?: boolean,
  selected?: boolean,
}

export type SelectOptions = SelectOption[]

export interface Product {
  id: number,
  title: string,
  imageUrl: string,
  price: number,
}

export type Products = Product[]
