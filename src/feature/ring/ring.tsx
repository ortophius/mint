import styles from './ring.module.scss';
import { ReactComponent as RingIcon } from './assets/ring.svg';

export const Ring = () => {
  
  return <button onClick={() => null} className={styles.ringWrapper}>
    <div className={styles.ringIcon}>
      <RingIcon />
    </div>
    <div className={styles.label}>
      Официант
    </div>
  </button>
}