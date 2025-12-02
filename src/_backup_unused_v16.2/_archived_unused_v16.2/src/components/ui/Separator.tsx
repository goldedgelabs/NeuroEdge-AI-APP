'use client';
import React from 'react';

export interface SeparatorProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Separator = React.forwardRef<HTMLElement, SeparatorProps>(function Separator(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Separator" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Separator;
