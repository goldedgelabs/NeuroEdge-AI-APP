'use client';
import React from 'react';

export interface BadgeDotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const BadgeDot = React.forwardRef<HTMLElement, BadgeDotProps>(function BadgeDot(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="BadgeDot" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default BadgeDot;
