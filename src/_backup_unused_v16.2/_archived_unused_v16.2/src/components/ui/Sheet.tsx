'use client';
import React from 'react';

export interface SheetProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Sheet = React.forwardRef<HTMLElement, SheetProps>(function Sheet(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Sheet" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Sheet;
