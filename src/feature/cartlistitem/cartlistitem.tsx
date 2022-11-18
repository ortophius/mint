import React from "react";
import { DishType } from "../../shared/types/dish";
import { CartCounter } from "../cartcounter/cartcounter";
import styles from "./cartlistitem.module.scss";

interface ICartListItem {
  data: DishType;
}

export const CartListItem: React.FC<ICartListItem> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <img src={data.img} alt="" className={styles.img} />
      <div className={styles.descr}>
        <h3 className={styles.title}>{data.title}</h3>
        <div className={styles.footer}>
          <p className={styles.price}>{data.price}</p>
          <CartCounter />
        </div>
      </div>
    </div>
  );
};
