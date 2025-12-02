'use client';
import React from 'react';

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(function Pagination(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Pagination" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Pagination;
