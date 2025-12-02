'use client';
import React from 'react';

export interface GridProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Grid = React.forwardRef<HTMLElement, GridProps>(function Grid(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Grid" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Grid;
