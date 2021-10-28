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
