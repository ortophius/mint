import clsx from "clsx";
import { PropsWithChildren } from "react";
import image1 from "../assets/food1.png";
import image2 from "../assets/food2.png";
import styles from "./background.module.scss";

export const Background = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className={styles.background}>
      <img src={image1} className={clsx(styles.bgImage, styles.bgImage1)} />
      <img src={image2} className={clsx(styles.bgImage, styles.bgImage2)} />
      {children}
    </div>
  );
};
