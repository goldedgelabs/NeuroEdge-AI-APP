'use client';
import React from 'react';

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(function Breadcrumb(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Breadcrumb" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Breadcrumb;
