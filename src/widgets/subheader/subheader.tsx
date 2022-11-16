import { Ring } from '../../feature/ring';
import { TableIndicator } from '../../feature/tableIndicator/tableIndicator';
import styles from './subheader.module.scss';

export const Subheader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.indicatorWrapper}>
        <TableIndicator />
      </div>
      <div className={styles.ringWrapper}>
        <Ring />
      </div>
    </div>
  )
}