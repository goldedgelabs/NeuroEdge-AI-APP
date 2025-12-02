'use client';
import React from 'react';

export interface DialogProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Dialog = React.forwardRef<HTMLElement, DialogProps>(function Dialog(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Dialog" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Dialog;
