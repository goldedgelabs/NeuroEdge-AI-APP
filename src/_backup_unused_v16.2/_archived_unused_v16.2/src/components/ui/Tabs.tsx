'use client';
import React from 'react';

export interface TabsProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Tabs = React.forwardRef<HTMLElement, TabsProps>(function Tabs(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Tabs" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Tabs;
