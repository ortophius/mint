import styles from './navbar.module.scss';

const menuList = [
  'Основное',
  'Закуски',
  'Салаты',
  'Горячее',
  'Супы',
  'Напитки',
  'Алкоголь',
  'Детское',
  'Акции',
  'Супы',
  'Напитки',
  'Алкоголь',
]

export const Navbar = () => {
  return(
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        {menuList.map((item, count) => {
          return (
            <li className={[styles.item, count == 2 ? styles.item_active : null].join(' ')}>
              <a href='#' className={styles.link}>{item}</a>
            </li>
          );
        })}
      </ul>      
    </nav>
  );
}