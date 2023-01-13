import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button = (props: ButtonProps) => {
  return <button className={styles.button} {...props} />;
};

export default Button;
