export interface ICartItem {
  id: number;
  amount: number;
}

export interface IProduct {
  id: number;
  price: number;
  image: string;
  campaignText: string;
  info: string;
  details: string;
  co2: number;
  comparePricePerKg: number;
  originalPrice: number;
}

export interface ICartItemExtended extends ICartItem, IProduct {}
