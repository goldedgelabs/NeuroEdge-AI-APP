'use client';
import React from 'react';

export interface ToastProviderProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const ToastProvider = React.forwardRef<HTMLElement, ToastProviderProps>(function ToastProvider(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="ToastProvider" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default ToastProvider;
