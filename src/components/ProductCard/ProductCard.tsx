import React from 'react';
import styles from './ProductCard.module.css';
import { Currency } from '../../mocks/products';

export type ProductCardProps = {
  title: string;
  origin: string;
  price: number;
  currency: Currency;
  imageUrl: string;
};

export const ProductCard: React.FC<ProductCardProps> = ({ title, origin, price, currency, imageUrl }) => {
  const formattedPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(price / 100);

  return (
    <div className={styles.card}>
      <img className={styles.image} src={imageUrl} alt={title} />
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.origin}>{origin}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
    </div>
  );
};