'use client';
import React from 'react';

export interface LinkProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Link = React.forwardRef<HTMLElement, LinkProps>(function Link(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Link" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Link;
