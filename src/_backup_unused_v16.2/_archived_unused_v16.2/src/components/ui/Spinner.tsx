'use client';
import React from 'react';

export interface SpinnerProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Spinner = React.forwardRef<HTMLElement, SpinnerProps>(function Spinner(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Spinner" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Spinner;
