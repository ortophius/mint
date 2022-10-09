import clsx from 'clsx';
import { ButtonProps } from '../types';
import styles from './button.module.scss';

export default ({ variant = "normal", className, ...rest }: ButtonProps) => {
  const buttonClasses = clsx(styles.button, {
    [styles.large]: variant === "large",
  }, className)

  return <button className={buttonClasses} {...rest}>
    {rest.children}
    </button>
};
