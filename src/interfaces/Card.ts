export interface ICard {
  id: number;
  priceDetail: {
    pricingPercentage: number;
    oldPriceBeautify: string;
    fromPriceBeautify: string;
  };
  destination: string;
  images: Array<any>;
  days: string;
  url: string;
}
