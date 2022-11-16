import styles from './logo.module.scss';
import logo from './assets/logo.svg';

export const Logo = () => <div className={styles.logo}>
  <div className={styles.label}>мята</div>
  <div className={styles.imgWrapper}>
    <img className={styles.logoImg} src={logo} alt="" />
  </div>
  <div className={styles.label}>lounge</div>
</div>