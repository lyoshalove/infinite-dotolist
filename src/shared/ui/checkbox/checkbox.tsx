import { InputHTMLAttributes } from 'react';

import { CheckIcon } from 'src/shared/icons';

import styles from './styles.module.scss';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  label?: string;
}

export const Checkbox = ({
  checked = false,
  label,
  ...props
}: CheckboxProps) => {
  return (
    <label className={styles.label}>
      <input
        className={styles.checkbox}
        type={'checkbox'}
        checked={checked}
        {...props}
      />
      <div>{checked && <CheckIcon />}</div>
      {label && <span className={styles.labelText}>{label}</span>}
    </label>
  );
};
