'use client';
import React from 'react';

export interface AlertProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Alert = React.forwardRef<HTMLElement, AlertProps>(function Alert(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Alert" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Alert;
