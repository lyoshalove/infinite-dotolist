import { TextareaHTMLAttributes } from 'react';

import styles from './styles.module.scss';

export const Textarea = (
  props: TextareaHTMLAttributes<HTMLTextAreaElement>,
) => {
  return <textarea className={styles.textarea} {...props} />;
};
