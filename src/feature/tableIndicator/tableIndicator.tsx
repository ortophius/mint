import styles from './tableIndicator.module.scss';

type TableIndicatorProps = {
  number?: number;
}

export const TableIndicator = ({ number = 5 }: TableIndicatorProps) => <div className={styles.tableIndicator}>
  <div className={styles.number}>
    №{number}
  </div>
  <div className={styles.label}>Номер стола</div>
</div>