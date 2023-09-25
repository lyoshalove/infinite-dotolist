import { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps extends PropsWithChildren {
  to: Element | null;
}

export const Portal = ({ children, to }: PortalProps) => {
  if (!to) {
    return null;
  }

  return ReactDOM.createPortal(children, to);
};
