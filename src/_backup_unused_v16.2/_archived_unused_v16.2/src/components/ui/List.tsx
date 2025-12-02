'use client';
import React from 'react';

export interface ListProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const List = React.forwardRef<HTMLElement, ListProps>(function List(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="List" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default List;
