'use client';
import React from 'react';

export interface NavigationItemProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const NavigationItem = React.forwardRef<HTMLElement, NavigationItemProps>(function NavigationItem(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="NavigationItem" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default NavigationItem;
