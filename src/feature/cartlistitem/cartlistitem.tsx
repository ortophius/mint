import React from "react";
import { MenuItem } from "../../shared/api/modules/types";
import { CartCounter } from "../cartcounter/cartcounter";
import styles from "./cartlistitem.module.scss";

interface ICartListItem {
  menuItem: MenuItem;
}

export const CartListItem: React.FC<ICartListItem> = ({ menuItem }) => {
  return (
    <div className={styles.wrapper}>
      <img src={menuItem.image} alt="" className={styles.img} />
      <div className={styles.descr}>
        <h3 className={styles.title}>{menuItem.name}</h3>
        <div className={styles.footer}>
          <p className={styles.price}>{menuItem.price}</p>
          <CartCounter id={menuItem.id} />
        </div>
      </div>
    </div>
  );
};
