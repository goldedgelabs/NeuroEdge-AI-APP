'use client';
import React from 'react';

export interface ToastProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Toast = React.forwardRef<HTMLElement, ToastProps>(function Toast(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Toast" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Toast;
