import { Filter } from '../../feature/filter/filter';
import styles from './listtitle.module.scss';

export const ListTitle = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{`Основное`}</h1>
      <Filter />
    </div>
  );
}