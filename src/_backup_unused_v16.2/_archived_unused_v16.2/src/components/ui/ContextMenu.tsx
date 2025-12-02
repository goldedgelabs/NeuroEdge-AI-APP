'use client';
import React from 'react';

export interface ContextMenuProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const ContextMenu = React.forwardRef<HTMLElement, ContextMenuProps>(function ContextMenu(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="ContextMenu" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default ContextMenu;
