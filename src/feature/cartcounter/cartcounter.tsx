import styles from './cartcounter.module.scss';

export const CartCounter = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.addBtn}>Добавить</button>
      {/* <button className={styles.rndBtn}>-</button>
      <span className={styles.score}>2</span>
      <button className={styles.rndBtn}>+</button> */}
    </div>
  );
}