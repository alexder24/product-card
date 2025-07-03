export enum Currency {
  RUB = 'RUB',
  USD = 'USD',
  EUR = 'EUR',
}

export type Product = {
  id: string;
  title: string;
  origin: string;
  price: number;
  currency: Currency;
  imageUrl: string;
};

export const products: Product[] = [
  {
    id: '1',
    title: 'Кофе Ethiopia Yirgacheffe',
    origin: 'Эфиопия',
    price: 34900,
    currency: Currency.RUB,
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '2',
    title: 'Чай Darjeeling First Flush',
    origin: 'Индия',
    price: 25900,
    currency: Currency.RUB,
    imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '3',
    title: 'Hot Chocolate',
    origin: 'Бельгия',
    price: 49900,
    currency: Currency.RUB,
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '4',
    title: 'Colombian Coffee',
    origin: 'Колумбия',
    price: 599,
    currency: Currency.USD,
    imageUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '5',
    title: 'French Press',
    origin: 'Франция',
    price: 1299,
    currency: Currency.EUR,
    imageUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
];