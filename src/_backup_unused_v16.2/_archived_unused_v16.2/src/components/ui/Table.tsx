'use client';
import React from 'react';

export interface TableProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Table = React.forwardRef<HTMLElement, TableProps>(function Table(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Table" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Table;
