export type Source = "POS" | "WEB";
export type Method = "Moncash" | "Credit Card" | "Cash";
export type Status =
  | "PROCESSING"
  | "SHIPPED"
  | "DELIVERED"
  | "CANCELLED"
  | "FAILED";

export type RecentOrders = {
  id: string;
  customer: string;
  items: number;
  amount: number;
  date: string;
  status: Status;
  source: Source;
};

export type LatestOrders = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};
