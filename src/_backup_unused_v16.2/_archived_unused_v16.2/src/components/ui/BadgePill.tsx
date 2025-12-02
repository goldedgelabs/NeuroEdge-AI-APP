'use client';
import React from 'react';

export interface BadgePillProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const BadgePill = React.forwardRef<HTMLElement, BadgePillProps>(function BadgePill(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="BadgePill" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default BadgePill;
