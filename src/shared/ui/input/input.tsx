import { InputHTMLAttributes } from 'react';

import { cn } from 'src/shared/lib';

import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text';
}

export const Input = ({ type, className, ...props }: InputProps) => {
  return (
    <input className={cn(styles.input, [className])} type={type} {...props} />
  );
};
