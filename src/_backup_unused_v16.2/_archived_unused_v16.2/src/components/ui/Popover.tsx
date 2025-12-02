'use client';
import React from 'react';

export interface PopoverProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Popover = React.forwardRef<HTMLElement, PopoverProps>(function Popover(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Popover" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Popover;
