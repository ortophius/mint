import styles from './logo.module.scss';
import logo from './assets/logo.png';

export const Logo = () => <div className={styles.logo}>
  <div className={styles.label}>мята</div>
  <img className={styles.logoImg} src={logo} alt="" />
  <div className={styles.label}>lounge</div>
</div>