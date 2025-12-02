'use client';
import React from 'react';

export interface CollapsibleProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Collapsible = React.forwardRef<HTMLElement, CollapsibleProps>(function Collapsible(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Collapsible" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Collapsible;
