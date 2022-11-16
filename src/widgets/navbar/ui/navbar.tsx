/* eslint-disable jsx-a11y/anchor-is-valid */
import { allCategories } from "../../../entities/categories/model";
import { useAppSelector } from "../../../shared/config/store";
import { useAsyncModel } from "../../../shared/lib/useAysyncModel";
import styles from "./navbar.module.scss";

export function Navbar() {
  const { sliceSelector } = useAsyncModel({
    model: allCategories,
    ssr: true,
  });

  const categories = useAppSelector(sliceSelector);

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        {categories.map((item, count) => {
          return (
            <li
              className={[
                styles.item,
                count === 2 ? styles.item_active : null,
              ].join(" ")}
              key={item.id}
            >
              <a href="#" className={styles.link}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
