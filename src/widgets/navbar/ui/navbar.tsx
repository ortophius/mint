import styles from "./navbar.module.scss";
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  allCategories,
  fetchCategories,
} from "../../../entities/categories/model";
import { useAppSelector } from "../../../shared/config/store";
import { useAsyncModel } from "../../../shared/lib/useAysyncModel";
import { withAsyncThunk } from "../../../shared/lib/hocs";

const NavbarComponent = () => {
  // const { sliceSelector } = useAsyncModel({
  //   model: allCategories,
  //   ssr: true,
  // });

  // const categories = useAppSelector(sliceSelector);

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        {/* {categories.map((item, count) => {
          return (
            <li
              key={item.id}
              className={[
                styles.item,
                count === 2 ? styles.item_active : null,
              ].join(" ")}
            >
              <a href="#" className={styles.link}>
                {item.name}
              </a>
            </li>
          );
        })} */}
      </ul>
    </nav>
  );
};

export const Navbar = withAsyncThunk(NavbarComponent, fetchCategories);
