import styles from './checkout.module.scss'

export const Checkout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.amount}>
        <span className={styles.title}>
          Общая сумма:
        </span>
        <h3 className={styles.amountPrice}>
          25631
        </h3>
      </div>
      <button className={styles.checkoutBtn}>
        Проверить заказ
      </button>
    </div>
  );
}