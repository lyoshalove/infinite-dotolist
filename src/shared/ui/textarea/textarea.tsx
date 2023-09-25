import { TextareaHTMLAttributes } from 'react';

import { cn } from 'src/shared/lib';

import styles from './styles.module.scss';

export const Textarea = ({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return <textarea className={cn(styles.textarea, [className])} {...props} />;
};
