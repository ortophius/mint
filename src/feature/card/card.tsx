import React from "react";
import { DishType } from "../../shared/types/dish";
import { CartCounter } from "../cartcounter/cartcounter";
import styles from "./card.module.scss";

interface CardProps {
  data: DishType;
}

export const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.descrWrapper}>
        <img src={data.img} className={styles.picture} alt="" />
        <p className={styles.descr}>
          <h3 className={styles.title}>{data.title}</h3>
          {data.description}
        </p>
      </div>
      <div className={styles.footer}>
        <div className={styles.price}>{data.price}</div>
        <div className={styles.counter}>
          <CartCounter />
        </div>
      </div>
    </div>
  );
};
