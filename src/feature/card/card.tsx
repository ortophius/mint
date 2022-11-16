import React from 'react';
import { CartCounter } from '../cartcounter/cartcounter';
import styles from './card.module.scss';

export type Dish = {
  title: string,
  description: string,
  price: number,
  img: string,
}

interface CardProps {
  id: number,
  title: string,
  descr: string,
  price: number,
  img: string,
}

export const Card:React.FC<CardProps> = ({title, descr, price, img}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.descrWrapper}>
        <img src={img} className={styles.picture} alt="" />
        <p className={styles.descr}>
          <h3 className={styles.title}>{title}</h3>
          {descr}
        </p>
      </div>
      <div className={styles.footer}>
        <div className={styles.price}>{price}</div>
        <div className={styles.counter}>
          <CartCounter />
        </div>
      </div>
    </div>
  );
}