'use client';
import React from 'react';

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const ScrollArea = React.forwardRef<HTMLElement, ScrollAreaProps>(function ScrollArea(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="ScrollArea" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default ScrollArea;
