'use client';
import React from 'react';

export interface MenubarProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Menubar = React.forwardRef<HTMLElement, MenubarProps>(function Menubar(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Menubar" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Menubar;
