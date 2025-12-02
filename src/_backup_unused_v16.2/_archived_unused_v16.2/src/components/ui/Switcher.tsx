'use client';
import React from 'react';

export interface SwitcherProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Switcher = React.forwardRef<HTMLElement, SwitcherProps>(function Switcher(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Switcher" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Switcher;
