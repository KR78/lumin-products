export interface SVGIcon {
  size?: number,
  className?: string,
  onClick?: Function,
  width?: number,
  height?: number,
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
  quantity?: number,
}

export type Products = Product[]

export enum Currency {
  AED,
  AFN,
  ALL,
  AMD,
  ANG,
  AOA,
  ARS,
  AUD,
  AWG,
  AZN,
  BAM,
  BBD,
  BDT,
  BGN,
  BIF,
  BMD,
  BND,
  BOB,
  BRL,
  BSD,
  BWP,
  BZD,
  CAD,
  CDF,
  CHF,
  CLP,
  CNY,
  COP,
  CRC,
  CVE,
  CZK,
  DJF,
  DKK,
  DOP,
  DZD,
  EGP,
  ETB,
  EUR,
  FJD,
  FKP,
  GBP,
  GEL,
  GIP,
  GMD,
  GNF,
  GTQ,
  GYD,
  HKD,
  HNL,
  HRK,
  HTG,
  HUF,
  IDR,
  ILS,
  INR,
  ISK,
  JMD,
  JPY,
  KES,
  KHR,
  KMF,
  KRW,
  KSG,
  KYD,
  KZT,
  LAK,
  LBP,
  LKR,
  LRD,
  LSL,
  MAD,
  MDL,
  MGA,
  MKD,
  MMK,
  MNT,
  MOP,
  MRO,
  MUR,
  MVR,
  MWK,
  MXN,
  MYR,
  MZN,
  NAD,
  NGN,
  NIO,
  NOK,
  NPR,
  NZD,
  PAB,
  PEN,
  PGK,
  PHP,
  PKR,
  PLN,
  PYG,
  QAR,
  RON,
  RSD,
  RUB,
  RWF,
  SAR,
  SBD,
  SCR,
  SEK,
  SGD,
  SHP,
  SLL,
  SOS,
  SRD,
  STD,
  SVC,
  SZL,
  THB,
  TJS,
  TOP,
  TRY,
  TTD,
  TWD,
  TZS,
  UAH,
  UGX,
  USD,
  UYU,
  UZS,
  VND,
  VUV,
  WST,
  XAF,
  XCD,
  XOF,
  XPF,
  YER,
  ZAR,
  ZMW,
}
