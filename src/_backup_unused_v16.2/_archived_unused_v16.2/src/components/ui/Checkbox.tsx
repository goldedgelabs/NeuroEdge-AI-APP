'use client';
import React from 'react';

export interface CheckboxProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Checkbox = React.forwardRef<HTMLElement, CheckboxProps>(function Checkbox(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Checkbox" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Checkbox;
