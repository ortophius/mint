import styles from "./navbar.module.scss";
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useAppDispatch, useAppSelector } from "../../../shared/config/store";
import { withAsyncThunk, withSlice } from "../../../shared/lib/hocs";
import {
  categoriesSelector,
  categoriesSlice,
  changeCurrentCategory,
  fetchCategories,
} from "../../../entities/categories/model";
import { loadItems } from "../../../entities/items/model";

const NavbarComponent = () => {
  const dispatch = useAppDispatch();
  const { allCategories } = useAppSelector(categoriesSelector);

  const changeCategoryHandler = (categoryId: string) => {
    dispatch(changeCurrentCategory(categoryId));
    // dispatch(resetDisplayItems());
    dispatch(loadItems(categoryId));
  };

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        {allCategories.map((item, count) => {
          return (
            <li
              key={item.id}
              className={[
                styles.item,
                count === 2 ? styles.item_active : null,
              ].join(" ")}
            >
              <a
                href="#"
                className={styles.link}
                onClick={(e) => {
                  e.preventDefault();
                  changeCategoryHandler(item.id);
                }}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export const Navbar = withSlice(
  withAsyncThunk(NavbarComponent, fetchCategories),
  categoriesSlice
);
