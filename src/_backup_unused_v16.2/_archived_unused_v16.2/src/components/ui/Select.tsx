'use client';
import React from 'react';

export interface SelectProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Select = React.forwardRef<HTMLElement, SelectProps>(function Select(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Select" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Select;
