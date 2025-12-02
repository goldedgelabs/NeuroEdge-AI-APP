'use client';
import React from 'react';

export interface DropdownProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Dropdown = React.forwardRef<HTMLElement, DropdownProps>(function Dropdown(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Dropdown" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Dropdown;
