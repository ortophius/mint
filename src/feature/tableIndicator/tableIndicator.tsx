import styles from './tableIndicator.module.scss';

type TableIndicatorProps = {
  number?: number;
}

export const TableIndicator = ({ number = 5 }: TableIndicatorProps) => <div className={styles.tableIndicator}>
  <div className={styles.label}>Номер стола: №{`4`}</div>
</div>