import styles from './filter.module.scss';

const conditionsList = [
  'По-популярности',
  'Сначала недорогие',
  'Сначал дорогие',
]

export const Filter = () => {
  return (
    <div className={styles.wrapper}>
      <select name="" className={styles.list}>
        {
          conditionsList.map((item, count) => (
            <option value='' className={styles.listItem}>{conditionsList[count]}</option>
          ))
        }
      </select>
    </div>
  );
}