import { MenuItem } from "../../shared/api/modules/types";
import { useAppDispatch, useAppSelector } from "../../shared/config/store";
import { addItemToCart, remove } from "../cart/model";
import styles from "./cartcounter.module.scss";

type CartCounterProps = {
  id: MenuItem["id"];
};

export const CartCounter = ({ id }: CartCounterProps) => {
  const items = useAppSelector((state) => state.sync.cart);
  const dispatch = useAppDispatch();
  const currentItem = items.find((item) => item.id === id);
  const showCounter = currentItem && currentItem.count > 0;

  return (
    <div className={styles.wrapper}>
      {!showCounter && (
        <button
          type="button"
          className={styles.addBtn}
          onClick={() => {
            dispatch(addItemToCart({ id, count: 1 }));
          }}
        >
          Добавить
        </button>
      )}
      {showCounter && (
        <>
          <button
            type="button"
            className={styles.rndBtn}
            onClick={() => {
              dispatch(remove({ id, count: 1 }));
            }}
          >
            -
          </button>
          <span className={styles.score}>{currentItem.count}</span>
          <button
            type="button"
            className={styles.rndBtn}
            onClick={() => {
              dispatch(addItemToCart({ id, count: 1 }));
            }}
          >
            +
          </button>
        </>
      )}
    </div>
  );
};
