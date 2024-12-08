import react from "react";

export type MenuItem = {
  name: string;
  path: string;
  icon: react.ReactNode;
};
export type Coin = {
  id: string;
  name: string;
  image: string;
  icon: react.ReactNode;
  current_price: number;
  market_cap: number;
  symbol: string;
  total_volume: number;
  price_change_percentage_24h: number;
};

export type Asset = {
  coin: {
    image: string;
    name: string;
    price_change_percentage_24h: number;
  };
  buyPrice: number;
  quantity: number;
};

export type Order = {
  coinId: string;
  quantity: number;
  orderType: string;
};
