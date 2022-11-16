import styles from './navbar.module.scss';
import icon_burger from './assets/burger.svg';

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
  return (
    <nav className={styles.wrapper}>
      <div className={styles.icon}>
        <button className={styles.burger}>
          <img src={icon_burger} alt="" />
        </button>
      </div>
      <div className={styles.title}>Показать меню</div>
      {/* <ul className={styles.list}>
        {menuList.map((item, count) => {
          return (
            <li key={Date.now()} className={[styles.item, count == 2 ? styles.item_active : null].join(' ')}>
              <a href='#' className={styles.link}>{item}</a>
            </li>
          );
        })}
      </ul>       */}
    </nav>
  );
}