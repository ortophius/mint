import styles from './navbar.module.scss';
import icon_burger from './assets/burger.svg';
/* eslint-disable jsx-a11y/anchor-is-valid */
import { allCategories } from "../../../entities/categories/model";
import { useAppSelector } from "../../../shared/config/store";
import { useAsyncModel } from "../../../shared/lib/useAysyncModel";

export const Navbar = () => {
  const { sliceSelector } = useAsyncModel({
    model: allCategories,
    ssr: true,
  });

  const categories = useAppSelector(sliceSelector);

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
