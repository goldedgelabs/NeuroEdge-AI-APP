'use client';
import React from 'react';

export interface ProgressProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Progress = React.forwardRef<HTMLElement, ProgressProps>(function Progress(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Progress" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Progress;
