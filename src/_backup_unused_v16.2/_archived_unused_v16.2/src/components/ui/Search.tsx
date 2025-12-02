'use client';
import React from 'react';

export interface SearchProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Search = React.forwardRef<HTMLElement, SearchProps>(function Search(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Search" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Search;
