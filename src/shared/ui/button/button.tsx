import { ButtonHTMLAttributes } from 'react';

import { ButtonSizes, ButtonTheme } from 'src/shared/constants';
import { cn } from 'src/shared/lib';

import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: () => void;
  theme?: ButtonTheme;
  size?: ButtonSizes;
}

export const Button = ({
  text,
  onClick,
  className,
  theme = ButtonTheme.PRIMARY,
  size = ButtonSizes.REGULAR,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, [className, styles[theme], styles[size]])}
      onClick={onClick}
      {...props}>
      {text}
    </button>
  );
};
