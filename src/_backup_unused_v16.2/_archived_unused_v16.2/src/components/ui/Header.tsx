'use client';
import React from 'react';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Header = React.forwardRef<HTMLElement, HeaderProps>(function Header(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Header" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Header;
