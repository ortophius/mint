import { useNavigate } from "react-router-dom";
import styles from "./checkout.module.scss";

export const Checkout = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.amount}>
        <span className={styles.title}>Общая сумма:</span>
        <h3 className={styles.amountPrice}>25631</h3>
      </div>
      <button
        type="button"
        className={styles.checkoutBtn}
        onClick={() => {
          navigate("/checkout");
        }}
      >
        Проверить заказ
      </button>
    </div>
  );
};
