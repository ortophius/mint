import clsx from "clsx";
import { TextButtonProps } from "../types";
import styles from './button.module.scss';

const TextButton = ({ variant = "normal", className, ...rest }: TextButtonProps) => {
  const textButtonClasses = clsx(styles.textButton, {
    [styles.large]: variant === "large"
  }, className);

  return <button className={textButtonClasses} {...{rest}} >{rest.children}</button>
}

export default TextButton;