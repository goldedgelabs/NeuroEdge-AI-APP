'use client';
import React from 'react';

export interface MenuProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Menu = React.forwardRef<HTMLElement, MenuProps>(function Menu(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Menu" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Menu;
