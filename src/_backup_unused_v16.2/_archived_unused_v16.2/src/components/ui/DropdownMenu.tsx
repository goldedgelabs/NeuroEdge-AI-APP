'use client';
import React from 'react';

export interface DropdownMenuProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const DropdownMenu = React.forwardRef<HTMLElement, DropdownMenuProps>(function DropdownMenu(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="DropdownMenu" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default DropdownMenu;
