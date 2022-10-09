import styles from './logo.module.scss';
import logo from '../assets/logo.png';

export const Logo = () => <div className={styles.logo}>
  <span>мята</span>
  <img className={styles.logoImg} src={logo} alt="" />
  <span>lounge</span>
</div>