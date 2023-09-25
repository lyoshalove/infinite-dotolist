import { InputHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text';
}

export const Input = ({ type, ...props }: InputProps) => {
  return <input className={styles.input} type={type} {...props} />;
};
