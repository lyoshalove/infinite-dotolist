import { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: () => void;
}

export const Button = ({ text, onClick, ...props }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick} {...props}>
      {text}
    </button>
  );
};
