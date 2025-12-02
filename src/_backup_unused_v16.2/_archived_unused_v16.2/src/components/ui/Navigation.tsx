'use client';
import React from 'react';

export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Navigation = React.forwardRef<HTMLElement, NavigationProps>(function Navigation(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Navigation" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Navigation;
