'use client';
import React from 'react';

export interface NavigationMenuProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const NavigationMenu = React.forwardRef<HTMLElement, NavigationMenuProps>(function NavigationMenu(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="NavigationMenu" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default NavigationMenu;
